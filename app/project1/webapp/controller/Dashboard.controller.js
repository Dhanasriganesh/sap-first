sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.app.project1.controller.Dashboard", {

		onCollapseExpandPress: function () {
			var oSidebar = this.byId("sidebar");
			var bVisible = oSidebar.getVisible();

			oSidebar.setVisible(!bVisible);
		},

		// Navigation Functions for Each Section
		onNavToOverview: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Ov");
		},

		onNavToCharts: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Charts");
		},

		onNavToViewProducts: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ViewProducts");
		},

		onNavToAddProduct: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("AddProduct");
		},

		onNavToEditProduct: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("EditProduct");
		},

		onNavToUpdateStock: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("UpdateStock");
		},

		onNavToStockAlerts: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("StockAlerts");
		},

		onNavToViewSuppliers: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("ViewSuppliers");
		},

		onNavToAddSupplier: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("AddSupplier");
		},

		onNavToEditSupplier: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("EditSupplier");
		},

		onNavToStockReport: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("StockReport");
		},

		onNavToTransactionHistory: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TransactionHistory");
		}

	});
});
