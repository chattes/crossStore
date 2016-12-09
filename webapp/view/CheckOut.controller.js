sap.ui.define(["jquery.sap.global", "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/ui/Device"],
	function(jQuery, Controller, JSONModel, Device) {
	"use strict";

	var CheckOut = Controller.extend("sap.ui.chattes.view.CheckOut", {
		onInit : function () {},
		onAfterRendering: function () {
/*			var sCurrentBreakpoint = this._oDSC.getCurrentBreakpoint();
			this.updateToggleButtonState(sCurrentBreakpoint);
	*/		
			this.oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("sap.ui.chattes.model","/mock.json"));
				this.getView().setModel(this.oModel);
		},
		navButtonPress: function(oEvent){
            window.back();
        },
        onSelectradioButtonDeliveryAtGate:function(oEvent){
        	var deliveryAtGate =  this.getView().byId("deliverAtGate");
        	deliveryAtGate.setVisible(true);
        	
        	var deliveryAtHome = this.getView().byId("deliverHome");
        	deliveryAtHome.setVisible(false);
        },
        onSelectradioButtonDeliveryHome:function(oEvent){
        	var deliveryAtGate =  this.getView().byId("deliverAtGate");
        	deliveryAtGate.setVisible(false);
        	
        	var deliveryAtHome = this.getView().byId("deliverHome");
        	deliveryAtHome.setVisible(true);
        },
        proceed: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("confectioneries");
		},
        
	});

	return CheckOut;

});
