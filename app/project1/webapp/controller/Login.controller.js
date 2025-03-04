sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("com.app.project1.controller.Login", {
        validateAndLogin: function() {
            var username = this.getView().byId("username").getValue();
            var password = this.getView().byId("password").getValue();

            if (!username || !password) {
                MessageToast.show("Please enter both username and password.");
                return;
            }

            // Proceed to next page after validation
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("NewPage");
            // let speech = new SpeechSynthesisUtterance("pandipirraloda");
            //   window.speechSynthesis.speak(speech);
        },
        togglePasswordVisibility: function () {
            var oPasswordInput = this.getView().byId("password");
            var oToggleButton = this.getView().byId("togglePassword");
            var bIsPassword = oPasswordInput.getType() === "Password";
        
            oPasswordInput.setType(bIsPassword ? "Text" : "Password");
            oToggleButton.setIcon(bIsPassword ? "sap-icon://hide" : "sap-icon://show");
        }
        
    
    });
});
