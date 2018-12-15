define([
    'dojo/_base/declare',
    'dijit/MenuItem',
    'JBrowse/Plugin',
],
function(
    declare,
    dijitMenuItem,
    JBrowsePlugin,
) {
return declare( JBrowsePlugin, {
    constructor: function( args ) {
        console.log(args)
        this.browser.afterMilestone('initView', () => {
            this.browser.addGlobalMenuItem( 'help', new dijitMenuItem({
                label: 'View WiseRice webpage',
                onClick: () => {
                    window.open('http://your.web.site')
                }
            }));
        });
    }

});
});
