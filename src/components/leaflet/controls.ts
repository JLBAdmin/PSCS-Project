export const mapZoom = L.control.zoom({
  position: 'bottomright'
});

// create fullscreen control
export const fsControl = L.control.fullscreen({
  position: 'bottomright'
});

export const lc = L.control.locate({
  position: 'bottomright',
  flyTo: true,
  // icon: 'fa fa-map-pin',
  strings: {
    title: 'ตำแหน่งของคุณ!'
  },
  locateOptions: {
    maxZoom: 17,
    enableHighAccuracy: true
  }
});
