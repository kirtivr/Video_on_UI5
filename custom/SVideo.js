sap.ui.core.Control.extend("sap.ui.custom.SVideo",
    {
        metadata:
        {
            properties:
            {
                "src": {
                    type : "string",
                    defaultValue: ""
                },
                "type": {
                    type : "string",
                    defaultValue: "video/mp4"
                },
                "width": {
                    type: "string",
                    defaultValue: "200px"
                },
                "height": {
                    type: "string",
                    defaultValue: "200px"
                },
                "poster": {
                    type: "string",
                    defaultValue: ""
                },
                "fallback": {
                    type: "string",
                    defaultValue: "Sorry, your browser doesn't support embedded videos,  but don't worry, you can download it and watch it with your favorite video player!"
                },
                "autoplay": {
                    type: "boolean",
                    defaultValue: false
                },
                "muted": {
                    type: "boolean",
                    defaultValue: false
                }
            }
        },
        renderer :
        {
            render : function(oRm, oControl)
            {
                oRm.write('<video ');
                oRm.write(' width = '+oControl.getWidth());
                oRm.write(' height = '+oControl.getHeight()+' ');
                if(oControl.getPoster()){
                    oRm.write(' poster = '+oControl.getPoster()+' ');
                }
                oRm.write(' autoplay = '+oControl.getAutoplay()+' ');
                oRm.write(' muted = '+oControl.getMuted()+' ');
                oRm.writeClasses();
                oRm.write(' controls  >');
                oRm.write('<source src='+oControl.getSrc()+' type = '+oControl.getType()+ '>');
                oRm.write(oControl.getFallback());
                oRm.write('</video>');
            }
        }
    });
