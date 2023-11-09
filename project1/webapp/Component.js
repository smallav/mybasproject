/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sap/ui/model/json/JSONModel",
        "sap/f/FlexibleColumnLayoutSemanticHelper",
        "sap/base/util/UriParameters",
        "sap/f/library"
    ],
    function (UIComponent, Device, JSONModel, FlexibleColumnLayoutSemanticHelper, UriParameters, library) {
        "use strict";
        var LayoutType = library.LayoutType;
        return UIComponent.extend("com.app.project.project1.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                
                // var oModel = new JSONModel("com/app/project/project1/model/Products.json");
                // this.setModel(oModel, "products");
                var oModel = new JSONModel();
			    this.setModel(oModel);
                // enable routing
                this.getRouter().initialize();

                // set the device model
                
            },
            getHelper: function () {
                var oFCL = this.getRootControl().byId("fcl"),
                    oParams = UriParameters.fromQuery(location.search),
                    oSettings = {
                        defaultTwoColumnLayoutType: LayoutType.TwoColumnsMidExpanded,
                        defaultThreeColumnLayoutType: LayoutType.ThreeColumnsMidExpanded,
                        mode: oParams.get("mode"),
                        maxColumnsCount: oParams.get("max")
                    };
    
                return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
            }
        });
    }
);