Ext.define('ModernTunes.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginCtr',

    onLoginClick: function () {
        localStorage.setItem('ModetnTunes', true);
        console.log('LOGIN');

        this.getView().destroy();

        Ext.create({
            xtype: 'mainview'
        })
    }
})

