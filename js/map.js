// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 21.130003680551397, lng: 105.77678186951063 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 20,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "PHÒNG KHÁM SẢN PHỤ KHOA NGÂN HÀ",
  });
}

initMap();