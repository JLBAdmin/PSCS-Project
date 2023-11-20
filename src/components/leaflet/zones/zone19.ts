import { plotStyle } from '../style';

export const plotZone19 = L.geoJSON(null || undefined, {
  style: plotStyle,
  onEachFeature(feature: any, layer) {
    // const centroid = turf.centroid(feature.geometry);
    // eslint-disable-next-line no-console
    // console.log(centroid);
    layer.bindPopup(feature.properties.q_name);
    // boroughSearch.push({
    //   name: layer.feature.properties.BoroName,
    //   source: "Boroughs",
    //   id: L.stamp(layer),
    //   bounds: layer.getBounds()
    // });
  },
  filter(feature: any): boolean {
    return feature.properties.zone === '19';
  }
});

export const pointZone19 = L.geoJSON(null || undefined, {
  // style,
  // onEachFeature(feature: any, layer) {
  //   // const centroid = turf.centroid(feature.geometry);
  //   // eslint-disable-next-line no-console
  //   // console.log(centroid);
  //   layer.bindPopup(feature.properties.q_name);
  //   // boroughSearch.push({
  //   //   name: layer.feature.properties.BoroName,
  //   //   source: "Boroughs",
  //   //   id: L.stamp(layer),
  //   //   bounds: layer.getBounds()
  //   // });
  // },
  filter(feature: any): boolean {
    return feature.properties.zone === '19';
  },
  pointToLayer(feature: any, latLng) {
    return L.marker(latLng, {
      icon: L.icon({
        iconUrl: '/assets/img/marker-b.png',
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      }),
      title: feature.properties.name,
      riseOnHover: true
    });
  }
});

export const zone19Lable = L.geoJSON(null || undefined, {
  // style,
  // onEachFeature(feature: any, layer) {
  //   // const centroid = turf.centroid(feature.geometry);
  //   // eslint-disable-next-line no-console
  //   // console.log(centroid);
  //   layer.bindPopup(feature.properties.q_name);
  //   // boroughSearch.push({
  //   //   name: layer.feature.properties.BoroName,
  //   //   source: "Boroughs",
  //   //   id: L.stamp(layer),
  //   //   bounds: layer.getBounds()
  //   // });
  // },
  filter(feature: any): boolean {
    return feature.properties.zone === '19';
  },
  pointToLayer(feature: any, latLng) {
    const label = String(feature.properties.giscode);
    return new L.CircleMarker(latLng, {
      radius: 8,
      fillColor: '#FFFFFF',
      color: 'Red',
      weight: 2,
      opacity: 0.3,
      fillOpacity: 0.4
      // clickable: true
    })
      .bindTooltip(label, {
        permanent: true,
        direction: 'center',
        className: 'my-labels'
      })
      .openTooltip();
  }
});
