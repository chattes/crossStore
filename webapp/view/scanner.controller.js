sap.ui.define(["sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"jquery.sap.global"
], function (MessageToast, Controller, jQuery) {
	"use strict";
	var Scanner = Controller.extend("sap.ui.chattes.view.scanner", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf view.scanner
		 */
		onInit: function () {

			jQuery.sap.require("QCodeDecoder");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf view.scanner
		 */
		//  onBeforeRendering: function() {
		//
		//  },

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that OpenUI5 controls get after being rendered.
		 * @memberOf view.scanner
		 */
		onAfterRendering: function () {
			var reset = $("#reset");
			var stop = $("stop");
			var video = $("video");
			var sound = $("#audio");
			var that = this;

			var qr = new QCodeDecoder();
			if (!(qr.isCanvasSupported() && qr.hasGetUserMedia())) {
				alert('Your browser doesn\'t match the required specs.');
				throw new Error('Canvas and getUserMedia are required');
			}

			function resultHandler(err, result) {

				if (err) {
					MessageToast.show("Scanning Item");
					return console.log(err.message);

				}

				//qr.stop();
				if (qr.stream) {
					qr.stream.getTracks().forEach(function (track) {
						track.stop();
					});
				}
				sound[0].play();
				MessageToast.show("Item has been Scanned and added",{
					duration: 5000
				});
				var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
				oRouter.navTo("landing", {
					mat: result
				});

			}

			qr.decodeFromCamera(video[0], resultHandler, true);

		}
	});
	return Scanner;
});





// (function () {
// 	"use strict";

// 	sap.ui.controller("sap.ui.chattes.view.scanner", {

// 		/**
// 		 * Called when a controller is instantiated and its View controls (if available) are already created.
// 		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
// 		 * @memberOf view.scanner
// 		 */
// 		onInit: function () {

// 			jQuery.sap.require("QCodeDecoder");
// 		},

// 		/**
// 		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
// 		 * (NOT before the first rendering! onInit() is used for that one!).
// 		 * @memberOf view.scanner
// 		 */
// 		//  onBeforeRendering: function() {
// 		//
// 		//  },

// 		/**
// 		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
// 		 * This hook is the same one that OpenUI5 controls get after being rendered.
// 		 * @memberOf view.scanner
// 		 */
// 		onAfterRendering: function () {
// 			var reset = $("#reset");
// 			var stop = $("stop");		
// 			var video = $("video");
// 			var that = this;
// 			var message = jQuery.sap.require("sap.m.MessageToast");

// 			var qr = new QCodeDecoder();
// 			if (!(qr.isCanvasSupported() && qr.hasGetUserMedia())) {
// 				alert('Your browser doesn\'t match the required specs.');
// 				throw new Error('Canvas and getUserMedia are required');				
// 			}

// 			function resultHandler(err, result) {

// 				if (err){
// 					message.show("Scanning Item");
// 					return console.log(err.message);

// 				}

// 				//qr.stop();
// 				if(qr.stream){
// 					qr.stream.getTracks().forEach(function (track) { track.stop(); });
// 				}
// 				message.show("Item has been Scanned and added");
// 				var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
// 				oRouter.navTo("landing",{mat:result});				

// 			}

// 			qr.decodeFromCamera(video[0], resultHandler, true);

// 		}

// 	});
// } ());
