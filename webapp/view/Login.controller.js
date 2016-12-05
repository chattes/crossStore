sap.ui.define(["sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"jquery.sap.global"],
	function (MessageToast, Controller, JSONModel, jQuery) {
		"use strict";
		var LoginController = Controller.extend("sap.ui.chattes.view.Login", {
			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf view.Login
			 */
			// onInit: function() {

			// },

			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf view.Login
			 */
			//  onBeforeRendering: function() {
			//
			//  },

			/**
			 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			 * This hook is the same one that OpenUI5 controls get after being rendered.
			 * @memberOf view.Login
			 */
			//  onAfterRendering: function() {
			//
			//  },

			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf view.Login
			 */
			//  onExit: function() {
			//
			//  }

			handleLogin: function (oEvent) {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("landing");
			}
		});
		return LoginController;

	});
