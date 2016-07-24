/**
 * \brief Loads the map on the page.
 * \param iconPath the icon to use.
 * \param filters to apply.  Any image that does not meet the 
 *        filter(s) does not get added to the map.
 */
function LoadMap(iconPath, filters)
{
    // Create Map
    var map = L.map('map', {zoomControl: false}).setView([51.505, -0.09], 13);


    // Pull from the OSM API
    var osmURL = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    // In order to use open street map, we need to attribute to it.
    var osmAttrib = 'Map Data &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    // Create the OSM layer.
    var osm = new L.TileLayer(osmURL, {minZoom: 8, maxZoom: 20, attribution: osmAttrib});

    // Set the map to start at RIT at zoom level 15.
    map.setView(new L.LatLng(43.085, -77.678419), 15);

    // Add the osm layer to the map
    map.addLayer(osm);

    // Create the icon.
    var icon = L.icon({
        iconUrl:iconPath,
        iconSize: [25,41],
        iconAnchor:[12.5, 41],
        popupAnchor:[0, -30],
    });

    var zoom = new L.Control.Zoom({ position: 'bottomleft' });
    zoom.addTo(map);
    // Insert the data.
    for (i = 0; i < mapData.mapData.length; ++i) {        
        var data = mapData.mapData[i];
        
        var add = false;
        for (f = 0; (f < data.filter.length) && (add == false); ++f) {
            if (filters.indexOf(data.filter[f]) > -1)
            {
                add = true;
            }
        }
        
        if (add == false)
        {
            continue;
        }
        
        var markerHTML = '<div class = "center" style="overflow:auto;color:black;">';
        markerHTML += '<p><strong>' + data.title + '</strong></p>';
        if (data.image != "") {
            markerHTML += '<p><a href = "media/places/' + data.image + '" target = "_blank">';
            markerHTML += '<img src="media/places/' + data.image + '" alt="' + data.image + '"/></p></a>';
        }
        else {
            markerHTML += '<p><a href="https://github.com/ritmap/ritmap.github.io#submitting-content" target="_blank">';
            markerHTML += '<img src="media/no_image.png" alt="no image"/></a></p>';
        }
        markerHTML += '<p>' + data.desc + '</p>';
        markerHTML += '</div>';
        var popupOffset = L.point(0, 55);
        var newPopup = L.popup({maxWidth:500, autoPanPaddingTopLeft: popupOffset})
                            .setContent(markerHTML);

        var newMarker = L.marker([data.lat, data.lon])
                            .setIcon(icon)
                            .addTo(map)
                            // Must open then close the popup, or the image will appear
                            // outside of it.
                            .bindPopup(newPopup).openPopup().closePopup();
    }
}