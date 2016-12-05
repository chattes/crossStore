sap.ui.define(["sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"jquery.sap.global"],
	function (MessageToast, Controller, JSONModel, jQuery) {
		"use strict";

		var StoreLanding = Controller.extend("sap.ui.chattes.view.App", {

			onInit: function () {
				this.oModel = new sap.ui.model.json.JSONModel({
					scannedItem: "",
					selectedItem: [
						{
							item: "Horlicks Biscuits",
							itemImage: true,
							quantity: 0
						},
						{
							item: "Tata Tea",
							itemImage: true,
							quantity: 0
						}
					],
					cart: [],
					recommended: [
						{
							item: "Horlicks Biscuits",
							itemImage: true,
							quantity: 0
						},
						{
							item: "Tata Tea",
							itemImage: true,
							quantity: 0
						}
					],
					completedCount: 1
				});
				this.getView().setModel(this.oModel);
			},

			addTodo: function () {
				var aTodos = this.oModel.getObject("/selectedItem");
				aTodos.unshift({
					item: this.oModel.getProperty("/scannedItem"),
					itemImage: true,
					quantity: 0
				});
				this.oModel.setProperty("/scannedItem", "");
				this.oModel.refresh();
			},

			// toggleCompleted: function () {
			// 	var iCompletedCount = 0;
			// 	var aTodos = this.oModel.getObject("/todos");
			// 	var i = aTodos.length;
			// 	while (i--) {
			// 		var oTodo = aTodos[i];
			// 		if (oTodo.completed) {
			// 			iCompletedCount++;
			// 		}
			// 	}
			// 	this.setCompletedCount(iCompletedCount);
			// 	this.oModel.refresh();
			// },

			// clearCompleted: function () {
			// 	var aTodos = this.oModel.getObject("/todos");
			// 	var i = aTodos.length;
			// 	while (i--) {
			// 		var oTodo = aTodos[i];
			// 		if (oTodo.completed) {
			// 			aTodos.splice(i, 1);
			// 		}
			// 	}
			// 	this.setCompletedCount(0);
			// 	this.oModel.refresh();
			// },

			setCompletedCount: function (iCount) {
				this.oModel.setProperty("/completedCount", iCount);
				this.oModel.setProperty("/someCompleted", iCount > 0);
				this.oModel.refresh();
			}


		});
		return StoreLanding;
	});



// (function () {
// 	"use strict";

// 	sap.ui.controller("sap.ui.chattes.view.App", {

// 		onInit: function () {
// 			this.oModel = new sap.ui.model.json.JSONModel({
// 				scannedItem: "",
// 				selectedItem: [
// 					{
// 						item: "Horlicks Biscuits",
// 						itemImage: true,
// 						quantity: 0
// 					},
// 					{
// 						item: "Tata Tea",
// 						itemImage: true,
// 						quantity: 0
// 					}
// 				],
// 				cart: [],
// 				recommended: [
// 					{
// 						item: "Horlicks Biscuits",
// 						itemImage: true,
// 						quantity: 0
// 					},
// 					{
// 						item: "Tata Tea",
// 						itemImage: true,
// 						quantity: 0
// 					}
// 				],
// 				completedCount: 1
// 			});
// 			this.getView().setModel(this.oModel);
// 		},

// 		addTodo: function () {
// 			var aTodos = this.oModel.getObject("/selectedItem");
// 			aTodos.unshift({
// 				item: this.oModel.getProperty("/scannedItem"),
// 				itemImage: true,
// 				quantity: 0
// 			});
// 			this.oModel.setProperty("/scannedItem", "");
// 			this.oModel.refresh();
// 		},

// 		// toggleCompleted: function () {
// 		// 	var iCompletedCount = 0;
// 		// 	var aTodos = this.oModel.getObject("/todos");
// 		// 	var i = aTodos.length;
// 		// 	while (i--) {
// 		// 		var oTodo = aTodos[i];
// 		// 		if (oTodo.completed) {
// 		// 			iCompletedCount++;
// 		// 		}
// 		// 	}
// 		// 	this.setCompletedCount(iCompletedCount);
// 		// 	this.oModel.refresh();
// 		// },

// 		// clearCompleted: function () {
// 		// 	var aTodos = this.oModel.getObject("/todos");
// 		// 	var i = aTodos.length;
// 		// 	while (i--) {
// 		// 		var oTodo = aTodos[i];
// 		// 		if (oTodo.completed) {
// 		// 			aTodos.splice(i, 1);
// 		// 		}
// 		// 	}
// 		// 	this.setCompletedCount(0);
// 		// 	this.oModel.refresh();
// 		// },

// 		setCompletedCount: function (iCount) {
// 			this.oModel.setProperty("/completedCount", iCount);
// 			this.oModel.setProperty("/someCompleted", iCount > 0);
// 			this.oModel.refresh();
// 		}

// 	});

// })();
