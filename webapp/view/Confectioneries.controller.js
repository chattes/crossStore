sap.ui.define([ "jquery.sap.global", "sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel", "sap/ui/Device" ], function(jQuery,
		Controller, JSONModel, Device) {
	"use strict";

	var CheckOut = Controller.extend("sap.ui.chattes.view.Confectioneries", {
		onInit : function() {
			this.oModel = new sap.ui.model.json.JSONModel(jQuery.sap
					.getModulePath("sap.ui.chattes.model", "/mock.json"));
			this.getView().setModel(this.oModel);

		},
		abc : function(oEvent) {
			console.log("ashish");
		},
		expandList : function(oEvent) {
			var expand = oEvent.getParameters().expand;
			console.log("ashish   " + expand);

			if (expand) {
				var oBindContext = oEvent.getSource();
				var number = oBindContext.getBindingContext().getPath().substr(1).split("/")[1];
				console.log(number);
				
				var itemsOfList = [];
//				itemsOfList = 
				
				
				var oList = this.getView().byId("expandedItem");
				var itemTemplate = this.getView().byId("itemTemplate");
//				console.log("oList " + oList);
				///var oBinding = oList.bindItems("items");
				//var model = oEvent.getSource().getModel().getData().customerCarts[number].Pcart;
				var model = oBindContext.getBindingContext().getPath() + "/Pcart"
//				console.log("model " + model);
//				oList.bindItems(model,itemTemplate);
				
				//var bindEx = oList.bindAggregation("items",model,new sap.m.ColumnListItem());
			}

		}

	});

	return CheckOut;

});