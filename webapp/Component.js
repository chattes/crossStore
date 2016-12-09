sap.ui.define(["sap/ui/core/UIComponent",
		"jquery.sap.global",
		"sap/ui/model/json/JSONModel",
		"sap/ui/model/resource/ResourceModel"
	],
	function (UIComponent, jquery, JSONModel, ResourceModel) {
		"use strict";
		var Component = UIComponent.extend("sap.ui.chattes.Component", {

			metadata: {
				rootView: "sap.ui.chattes.view.Main",
				name: "CrossStoreApp",
				version: "1.0.0",
				includes: ["css/styles.css"],
				dependencies: {
					libs: ["sap.m"]
				},
				routing: {
					config: {
						viewType: "XML",
						viewPath: "sap.ui.chattes.view",
						targetAggregation: "pages",
						clearTarget: true
					},
					routes: [{
							pattern: "",
							name: "login",
							view: "Login",
							viewPath: "sap.ui.chattes.view",
							targetControl: "app"

						}, {
							pattern: "landing/{mat}",
							name: "landing",
							view: "App",
							viewPath: "sap.ui.chattes.view",
							targetControl: "app"
						}, {
							viewType: "JS",
							pattern: "scan",
							name: "scan",
							view: "scanner",
							viewPath: "sap.ui.chattes.view",
							targetControl: "app"
						}, {
							pattern: "checkout",
							name: "checkout",
							view: "CheckOut",
							viewPath: "sap.ui.chattes.view",
							targetControl: "app"
						},
						{
							pattern: "confectioneries",
							name: "confectioneries",
							view: "Confectioneries",
							viewPath: "sap.ui.chattes.view",
							targetControl: "app"
						},
						{
							pattern: "search",
							name: "search",
							view: "Search",
							viewPath: "sap.ui.chattes.view",
							targetControl: "app"
						}
						



					]
				}
			},
			init: function () {
				UIComponent.prototype.init.apply(this, arguments);
				
				this.getRouter().initialize();


			}
		});
		return Component;
	});
