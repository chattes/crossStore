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
					"selectedItems": [],
					"basketanalysis": [],
					"othercustomer": [],
					"promotions": []
				}, false);
				this.getView().setModel(this.oModel, "SCANNED");
				this.imageModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("sap.ui.chattes.model", "/imageMap.json"));
				this.getView().setModel(this.imageModel, "IMAGES");
				//Router
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.getRoute("landing").attachPatternMatched(this._onObjectMatched, this);
			},
			_onObjectMatched: function (oEvent) {
				var matKey = oEvent.getParameters("arguments");
				var matNumber;
				if (matKey.arguments) {
					matNumber = matKey.arguments.mat;
				} else {
					matNumber = matKey.value;
				}

				if (!matNumber)
					matNumber = matKey.arguments.value; //Temp Coding for testing
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
					oData.quantity = 0;
					if (oData.GenericMaterial)
						oData.imageURL = that.getView().getModel("IMAGES").getData()[oData.GenericMaterial];
					else
						oData.imageURL = "http://farm8.staticflickr.com/7225/7210160572_f5b2a58e7e_z.jpg";
					scanModel.getObject("/selectedItems").push(oData);
					scanModel.refresh();
				});

				// Other Customer		

				OModelProducts.read(getMatURL + "/OtherCustomer", null, null, false, function (oData, oResponse) {
					var scanModel = that.getView().getModel("SCANNED");
					scanModel.getObject("/othercustomer").splice(0, scanModel.getObject("/othercustomer").length); //Clear Array
					oData.results.map(function (data) {
						var genMat = data.OC_MaterialNumber.toString().slice(0,4);
					if (genMat)
						data.imageURL = that.getView().getModel("IMAGES").getData()[genMat];
					else
						data.imageURL = "http://farm8.staticflickr.com/7225/7210160572_f5b2a58e7e_z.jpg";
						
						scanModel.getObject("/othercustomer").push(data);
					})
					scanModel.refresh();
				});
				//Basket Analysis						
				OModelProducts.read(getMatURL + "/BasketAnalysis", null, null, false, function (oData, oResponse) {
					var scanModel = that.getView().getModel("SCANNED");
					scanModel.getObject("/basketanalysis").splice(0, scanModel.getObject("/basketanalysis").length); //Clear Array
					oData.results.map(function (data) {
					if (data.BA_GenericMaterial)
						data.imageURL = that.getView().getModel("IMAGES").getData()[data.BA_GenericMaterial];
					else
						data.imageURL = "http://farm8.staticflickr.com/7225/7210160572_f5b2a58e7e_z.jpg";
						scanModel.getObject("/basketanalysis").push(data);
					})
					scanModel.refresh();
				});
				//TODO- Promotions							
				// OModelProducts.read(getMatURL, null, null, false, function (oData, oResponse) {
				// 		var scanModel = that.getView().getModel("SCANNED");
				// 		oData.selected = true;
				// 		oData.imageURL = "http://www.futurekirana.com/image/cache/data/Horlicks%20Biscuits%20152g-500x500.jpg";
				// 		scanModel.getObject("/selectedItems").push(oData);
				// 		scanModel.refresh();
				// 	});																	
				var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
				oRouter.navTo("landing", {
					mat: 0
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
			}


		});
		return StoreLanding;
	});
