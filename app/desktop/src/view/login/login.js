Ext.define('ModernTunes.view.login.Login', {
    extend: 'Ext.container.Container',
    xtype: 'login',
    minWidth: 350,
    maxWidth: 600,

    requires: [
        'ModernTunes.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'loginCtr',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'formpanel',
        reference: 'formpanel',
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            xtype: 'button',
            text: 'Login',
            // formBind: true,
            handler: function() {
                alert('You clicked the button!');
            },
            listeners: {
                click: function () {
                    alert('local click');
                }
                // click: 'onLoginClick'
            }
        }]
    }
});