

function processSVData(data, status) {
  if (status === 'OK') {
    panorama.setPano(data.location.pano);
    panorama.setPov({
      heading: 270,
      pitch: 0
    });
    panorama.setVisible(true);

    map.addListener('click', function() {
      var markerPanoID = data.location.pano;
      // Set the Pano to use the passed panoID.
      panorama.setPano(markerPanoID);
      panorama.setPov({
        heading: 270,
        pitch: 0
      });
      panorama.setVisible(true);

      if (markerPanoID == "") {
        $("#streetview").css("backgroundColor", "black");
        panorama.setVisible(false);
        $("#streetview").css("display", "none");
      }
    });
  } else {
    console.log('Street View data not found for this location.');
  }
}
var sv = new google.maps.StreetViewService();
var panorama = new google.maps.StreetViewPanorama(document.getElementById('streetview'));