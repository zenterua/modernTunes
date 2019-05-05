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
    'ModernTunes.view.TunesView',
    'ModernTunes.view.TunesGrid',

  ],
  tabBarPosition: 'bottom',
  items: [{
      title: "Thumbnails",
      xtype: 'tunesview',
      listeners: {
        select: 'onThumbSelect'
      },
      bind: {
        store: '{tunes}'
      }
    }, {
      title: "Grid",
      xtype: 'tunesgrid',
      listeners: {
        select: 'onGridSelect'
      },
      bind: {
        store: '{tunes}'
      }

  }]
})
