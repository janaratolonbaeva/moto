// API Yandex Map
  $(document).ready(function() {
    ymaps.ready(init);
    var myMap;

    function init(){     
      myMap = new ymaps.Map("map", {
        center: [[55.75399399999374,37.62209300000001]],
        zoom: 16
      });
      myMap.controls
      .remove('zoomControl')
      myMap.behaviors.disable([
        'drag',
        'scrollZoom'
        ]);
      var myPlacemark = new ymaps.Placemark([[55.75399399999374,37.62209300000001]], { 
        balloonContentBody: 'MotoStyle',
        hintContent: 'MotoStyle'
      });
    }
  });