import { highlight, highlightStyle, plotStyle } from '../style';

export const plotZone2 = L.geoJSON(null || undefined, {
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
    return feature.properties.zone === '2';
  }
});

export const pointSubZone201: any = L.geoJSON(null || undefined, {
  onEachFeature(feature: any, layer) {
    const content =
      `<table class='tbl'>` +
      `<tr><th>รหัสแปลง</th><td>${feature.properties.myGis}</td></tr>` +
      `<tr><th>โควตา - ชื่อ</th><td>${feature.properties.isQuota} - ${feature.properties.isFullName}</td></tr>` +
      `<tr><th>รับส่งเสริม</th><td>${feature.properties.isMonny}</td></tr>` +
      `<tr><th>พื้นที่จดแจ้ง</th><td>${feature.properties.isMotify} ไร่</td></tr>` +
      `<tr><th>พื่นที่ GIS</th><td>${feature.properties.isAreaGIS}  ไร่</td></tr>` +
      `<tr><th>คาดการณ์ตัน</th><td>${feature.properties.isExpect}  ตัน</td></tr>` +
      `<tr><th>บริการจักรกลฯ</th><td>${feature.properties.isService}</td></tr>` +
      `<tr><th>ปะเภทพื้นที่</th><td>${feature.properties.isTypeArea}</td></tr>` +
      `<tr><th>ชนิดดิน</th><td>${feature.properties.isSoil}</td></tr>` +
      `<tr><th>การให้น้ำได้</th><td>${feature.properties.isWaterSource}</td></tr>` +
      `<tr><th>Bonsucro</th><td>${feature.properties.isBonsucro}</td></tr>` +
      `<tr><th>นักส่งเสริม</th><td>${feature.properties.isSubZone}</td></tr>` +
      `<tr><th>หมายเหตุ</th><td>${feature.properties.isComment}</td></tr>` +
      `</table>`;
    if (feature.properties) {
      layer.bindPopup(content);
      layer.on({
        click(_e): void {
          highlight
            .clearLayers()
            .addLayer(
              L.circleMarker(
                [
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0]
                ],
                highlightStyle
              )
            );
        }
      });
    }
  },
  filter(feature: any) {
    return feature.properties.isSubvZone === 201;
  },
  pointToLayer(_feature, latLng) {
    return L.marker(latLng, {
      icon: L.icon({
        iconUrl:
          '/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_21.png',
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      })
      // title: feature.properties.name,
      // riseOnHover: true
    });
  }
});

export const pointSubZone202: any = L.geoJSON(null || undefined, {
  onEachFeature(feature: any, layer) {
    const content =
      `<table class='tbl'>` +
      `<tr><th>รหัสแปลง</th><td>${feature.properties.myGis}</td></tr>` +
      `<tr><th>โควตา - ชื่อ</th><td>${feature.properties.isQuota} - ${feature.properties.isFullName}</td></tr>` +
      `<tr><th>รับส่งเสริม</th><td>${feature.properties.isMonny}</td></tr>` +
      `<tr><th>พื้นที่จดแจ้ง</th><td>${feature.properties.isMotify} ไร่</td></tr>` +
      `<tr><th>พื่นที่ GIS</th><td>${feature.properties.isAreaGIS}  ไร่</td></tr>` +
      `<tr><th>คาดการณ์ตัน</th><td>${feature.properties.isExpect}  ตัน</td></tr>` +
      `<tr><th>บริการจักรกลฯ</th><td>${feature.properties.isService}</td></tr>` +
      `<tr><th>ปะเภทพื้นที่</th><td>${feature.properties.isTypeArea}</td></tr>` +
      `<tr><th>ชนิดดิน</th><td>${feature.properties.isSoil}</td></tr>` +
      `<tr><th>การให้น้ำได้</th><td>${feature.properties.isWaterSource}</td></tr>` +
      `<tr><th>Bonsucro</th><td>${feature.properties.isBonsucro}</td></tr>` +
      `<tr><th>นักส่งเสริม</th><td>${feature.properties.isSubZone}</td></tr>` +
      `<tr><th>หมายเหตุ</th><td>${feature.properties.isComment}</td></tr>` +
      `</table>`;
    if (feature.properties) {
      layer.bindPopup(content);
      layer.on({
        click(_e): void {
          highlight
            .clearLayers()
            .addLayer(
              L.circleMarker(
                [
                  feature.geometry.coordinates[1],
                  feature.geometry.coordinates[0]
                ],
                highlightStyle
              )
            );
        }
      });
    }
  },
  filter(feature: any) {
    return feature.properties.isSubvZone === 202;
  },
  pointToLayer(_feature, latLng) {
    return L.marker(latLng, {
      icon: L.icon({
        iconUrl:
          '/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_22.png',
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      })
      // title: feature.properties.name,
      // riseOnHover: true
    });
  }
});

export const zone201Lable: any = L.geoJSON(null || undefined, {
  filter(feature: any) {
    return feature.properties.isSubvZone === 201;
  },
  pointToLayer(feature: any, latLng) {
    const label = String(feature.properties.myId);
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

export const zone202Lable: any = L.geoJSON(null || undefined, {
  filter(feature: any) {
    return feature.properties.isSubvZone === 202;
  },
  pointToLayer(feature: any, latLng) {
    const label = String(feature.properties.myId);
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
