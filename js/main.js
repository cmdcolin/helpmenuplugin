define([
    'dojo/_base/declare',
    'dijit/MenuItem',
    'JBrowse/Plugin',
    'JBrowse/View/Dialog/QuickHelp'
],
function(
    declare,
    dijitMenuItem,
    JBrowsePlugin,
    QuickHelp
) {
return declare( JBrowsePlugin, {
    constructor: function( args ) {
        console.log(args)
        this.browser.afterMilestone('initView', () => {
            this.browser.addGlobalMenuItem( 'help', new dijitMenuItem({
                label: 'WiseRice',
                onClick: () => {
                    new QuickHelp({
                        browser: this.browser,
                        href: 'plugins/HelpMenuPlugin/help.html',
                        style: {
                            width: '800px'
                        }
                    }).show()
                }
            }));
        });
    }

});
});
