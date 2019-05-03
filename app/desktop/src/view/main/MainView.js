Ext.define('ModernTunes.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  requires: [
    'ModernTunes.view.main.MainViewController',
    'ModernTunes.view.main.MainViewModel',
    'ModernTunes.view.TunesView'
  ],
  tabBarPosition: 'bottom',
  items: [{
      title: "Thumbnails",
      xtype: 'tunesview',
      bind: {
        store: '{tunes}'
      }
    }, {
      title: "Grid",
      html: '<h1>tunes grid</h1>'
  }]
})
