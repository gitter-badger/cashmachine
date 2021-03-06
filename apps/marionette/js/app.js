var CashMachine = new Marionette.Application();

CashMachine.addRegions({
  headerRegion: "#header-region",
  mainRegion: "#main-region"
});

CashMachine.on('initialize:after', function(){
  window.location.hash = '#';

  Backbone.history.start();
});

CashMachine.vent.on('signin', function(card) {
  CashMachine.mediator.card = card;
});

CashMachine.vent.on('signout', function() {
  CashMachine.mediator.card = null;
});

$.ajaxSetup({
  dataType: 'json',
  xhrFields: {
    withCredentials: true
  },
  crossDomain: true
});
