sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
	
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.chattes.view.Search", {
		onInit : function(){
			this.oModel = new sap.ui.model.json.JSONModel(jQuery.sap
					.getModulePath("sap.ui.chattes.model", "/mock.json"));
			this.getView().setModel(this.oModel);
			
		
		},
		formatCell:function(status){
			//var data1= this.getView.getModel("data").getProperty("/status/");
			// console.log("data1");
			
		if (status === "yes"){
					return "green";
		}
		else if(status === "no")
					return "red";
		else
					return "yellow";
				
			
			
		}
			
		

	});
});