Ext.define('ModernTunes.Application', {
  extend: 'Ext.app.Application',
  name: 'ModernTunes',
  requires: ['ModernTunes.*'],

  launch: function () {
    var loggedIn = localStorage.getItem('ModetnTunes');

    Ext.Viewport.add([{xtype: loggedIn ? 'mainview': 'login'}])
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload()
        }
      }
    )
  }
})
