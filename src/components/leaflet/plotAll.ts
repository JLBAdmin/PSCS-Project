import { plotStyle } from './style';

export const plotZoneLayer = L.geoJSON(null || undefined, {
  style: plotStyle,
  onEachFeature(feature: any, layer) {
    // const centroid = turf.centroid(feature.geometry);
    // eslint-disable-next-line no-console
    // console.log(centroid);
    layer.bindPopup(feature.properties.q_name);
    layer.on({
      mouseover(e: any) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const layer = e.target;
        layer.setStyle({
          fillColor: '#FBFCFC',
          color: 'red',
          weight: 2,
          opacity: 0.1,
          fillOpacity: 0.3
        });
        if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
        }
      },
      mouseout(e: any) {
        plotZoneLayer.resetStyle(e.target);
      }
    });
    // boroughSearch.push({
    //   name: layer.feature.properties.BoroName,
    //   source: "Boroughs",
    //   id: L.stamp(layer),
    //   bounds: layer.getBounds()
    // });
  }
  // filter(feature: any): boolean {
  //   return feature.properties.zone === '4';
  // }
});

export const plotLable = L.geoJSON(null || undefined, {
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
  // // },
  filter(feature: any): boolean {
    return feature.properties.zone === '4';
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
