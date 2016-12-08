sap.ui.define(["sap/m/MessageToast",
			"sap/ui/core/mvc/Controller",
			"sap/ui/model/json/JSONModel",
			"sap/ui/model/odata/ODataModel",
			"jquery.sap.global"
		],
		function (MessageToast, Controller, JSONModel, ODataModel, jQuery) {
			"use strict";

			var StoreLanding = Controller.extend("sap.ui.chattes.view.App", {

				onInit: function () {
					this.oModel = new JSONModel({
						"selectedItems": []
					}, false);
					this.getView().setModel(this.oModel, "SCANNED");
					//Router
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.getRoute("landing").attachPatternMatched(this._onObjectMatched, this);
				},

				_onObjectMatched: function (oEvent) {
					var matKey = oEvent.getParameters("arguments");
					var matNumber = matKey.arguments.mat;
					if (matNumber == 0)
						return;
					//Fetch Material with Key
					var serviceURL = "http://ldcisd4.wdf.sap.corp:50002/sap/opu/odata/sap/ZCS_GW_SRV";
					var that = this;
					var getMatURL = "MaterialSet" + "(" + "\'" + matNumber + "\'" + ")/";
					var OModelProducts = new ODataModel(serviceURL, true, "I055463", "Hello_789");
					OModelProducts.read(getMatURL, null, null, false, function (oData, oResponse) {
							var scanModel = that.getView().getModel("SCANNED");
							oData.selected = true;
							oData.imageURL = "http://www.futurekirana.com/image/cache/data/Horlicks%20Biscuits%20152g-500x500.jpg";
							scanModel.getObject("/selectedItems").push(oData);
							scanModel.refresh();
					var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
					oRouter.navTo("landing",{mat:0});
							

						});
				},

						addTodo: function (oEvent) {
							var serviceURL = "http://ldcisd4.wdf.sap.corp:50002/sap/opu/odata/sap/ZCS_GW_SRV";
							var that = this;
							var matKey = oEvent.getParameter("value");
							var getMatURL = "MaterialSet" + "(" + "\'" + matKey + "\'" + ")/";
							var OModelProducts = new ODataModel(serviceURL, true, "I055463", "Hello_789");
							OModelProducts.read(getMatURL, null, null, false, function (oData, oResponse) {
								var scanModel = that.getView().getModel("SCANNED");
								oData.selected = true;
								oData.imageURL = "http://www.futurekirana.com/image/cache/data/Horlicks%20Biscuits%20152g-500x500.jpg";
								scanModel.getObject("/selectedItems").push(oData);
								scanModel.refresh();
							});
						},
						checkout: function () {
							var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
							oRouter.navTo("checkout");
						},
						onscan: function () {
							var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
							oRouter.navTo("scan");
						},
						clearCompleted: function () {
							var aScanned = this.getView().getModel("SCANNED").getObject("/selectedItem");
							var cart = this.oModel.getObject("/cart");
							var i = aScanned.length;
							while (i--) {
								var oScanned = aScanned[i];
								if (oScanned.itemImage) {
									aScanned.splice(i, 1);
									cart.push(oScanned);
								}
							}
							this.setCompletedCount(cart.length);
							this.oModel.refresh();
						},

						setCompletedCount: function (iCount) {
							this.oModel.setProperty("/completedCount", iCount);
							this.oModel.refresh();
						},

						handleUploadPress: function (oEvent) {
							var oFileUploader = this.getView().byId("fileUploader");
							// oFileUploader.setSendXHR(true);
							// oFileUploader.upload();
							jQuery.sap.require("QCodeDecoder");
							var qr = new QCodeDecoder();
							var src = "../images/chart.png";
							qr.decodeFromImage(src, function (err, result) {
								if (err) throw err;
								console.log(result);
							});
						}
					});
				return StoreLanding;
			});
