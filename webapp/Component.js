sap.ui.define(["sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
],
	function (UIComponent, JSONModel, ResourceModel) {
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
					routes:
					[
						{
							pattern: "",
							name: "login",
							view: "Login",
							viewPath: "sap.ui.chattes.view",
							targetControl: "app"

						},
						{
							pattern: "landing",
							name: "landing",
							view: "App",
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

