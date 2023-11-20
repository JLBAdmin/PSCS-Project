/* eslint-disable no-nested-ternary */
// Assigning color for density class
export function getColor(d: any) {
  // eslint-disable-next-line no-nested-ternary
  return d > 5
    ? '#800026'
    : d > 4
    ? '#BD0026'
    : d > 3
    ? '#E31A1C'
    : d > 2
    ? '#FC4E2A'
    : d > 1
    ? '#FD8D3C'
    : '#FFEDA0';
}

// Create a color dictionary based off of subway route_id
// export const subwayColors = {
//   '1': '#ff3135',
//   '2': '#ff3135',
//   '3': 'ff3135',
//   '4': '#009b2e',
//   '5': '#009b2e',
//   '6': '#009b2e',
//   '7': '#ce06cb',
//   A: '#fd9a00',
//   C: '#fd9a00',
//   E: '#fd9a00',
//   SI: '#fd9a00',
//   H: '#fd9a00',
//   Air: '#ffff00',
//   B: '#ffff00',
//   D: '#ffff00',
//   F: '#ffff00',
//   M: '#ffff00',
//   G: '#9ace00',
//   FS: '#6e6e6e',
//   GS: '#6e6e6e',
//   J: '#976900',
//   Z: '#976900',
//   L: '#969696',
//   N: '#ffff00',
//   Q: '#ffff00',
//   R: '#ffff00'
// };

export function plotStyle(feature: any) {
  return {
    fillColor: getColor(feature.properties.zone),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}

/* Overlay Layers */
export const highlight: any = L.geoJSON(null || undefined);
export const highlightStyle = {
  stroke: false,
  fillColor: '#00FFFF',
  fillOpacity: 0.7,
  radius: 10
};
