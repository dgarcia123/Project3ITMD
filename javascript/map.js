function initMap(){
  var neighborhood = {lat: 41.772811, lng: -87.722275};
  var highschool = {lat: 41.792194, lng: -87.724959};
  var elementary = {lat: 41.770792, lng: -87.739684};

  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 12, center: neighborhood
    }
  );

  var marker1 = new google.maps.Marker({
    position: neighborhood,
    map: map
  });

  var marker2 = new google.maps.Marker({
    position: highschool,
    map: map
  });

  var marker3 = new google.maps.Marker({
    position: elementary,
    map: map
  });


}