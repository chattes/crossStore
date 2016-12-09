(function () {
	"use strict";

	sap.ui.jsview("sap.ui.chattes.view.scanner", {

		/** Specifies the Controller belonging to this View. 
		 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
		 * @memberOf fioricollaboration.ShellView
		 */
		getControllerName: function () {
			return "sap.ui.chattes.view.scanner";
		},

		//#######################################################################################################################################################
		// VIEW LAYOUT FUNCTIONS
		//#######################################################################################################################################################

		/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
		 * Since the Controller is given to this method, its event handlers can be attached right away.
		 * @memberOf fioricollaboration.ShellView
		 */
		/*jshint unused: vars */
		createContent: function (oController) {
			var video = new sap.ui.core.HTML("html1", {
				content:
				"<video class='centre' width='50%' height='50%' align='middle' autoplay>"+"</video>"+
				"<audio id='audio' src='http://www.soundjay.com/button/beep-07.wav' autostart='false' >"+"</audio>"
				});

var oPanel = new sap.m.Panel();
oPanel.setHeaderText('Scan QR Code');
//Add something to the panel's content area
oPanel.addContent(video);

			return oPanel;
		}
	});
} ());