Ext.define('ModernTunes.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',

  requires: [
    'ModernTunes.view.Preview',

  ],

  onButtonClick: function (button) {
    this.lookupReference('df').setValue(Date.now())
  },

  onThumbSelect: function (thumbs, record) {
    console.log(record);
    this.onShowPreview(record);
  },

  onGridSelect: function (thumbs, record) {
    console.log(record);
    this.onShowPreview(record[0]);
  },

  onShowPreview: function (record) {
    var videoConfig = {
      xtype: 'video',
      url: record.data.preview,
      posterUrl: record.data.image
    };
    var linkConfig = {
      docked: 'bottom',
      xtype: 'component',
      style: 'width: 16px',
      cls: 'imgWrapper',
      tpl: [
        '<a href="{itunesstore}" target="itunes_store">',
        '<img src="resources/img/img.svg">',
        '</a>'
      ],
      data: {
        itunesstore: record.data.itunesstore
      }
    };
    var containerConfig = { // parent container of the video and the anchor/link
      xtype: 'container',
      title: record.data.title + ' — ' + record.data.artist,
      style: '{background-color: #000;}',
      layout: 'fit',
      items: [
        videoConfig,
        linkConfig
      ]
    };
    var vid = Ext.create({
      xtype: 'preview',
      title: record.data.title,
      layout: 'fit',
      items: [containerConfig]
    });
    vid.show();
  }

})
