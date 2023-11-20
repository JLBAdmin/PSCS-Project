function getColor(isService: any) {
  return isService === 'ไม่ขอใช้บริการ' ? '#FD8D3C' : '#229954';
}

function style(feature: any) {
  // eslint-disable-next-line no-console
  // console.log(feature.properties.isService);
  return {
    fillColor: getColor(feature.properties.isService),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
}

export const polygonAll = L.geoJSON(null || undefined, {
  style,
  onEachFeature(_feature, layer: any) {
    layer.on({
      mouseover(e: any) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const layer = e.target;
        layer.setStyle({
          weight: 3,
          opacity: 0.5,
          dashArray: 3,
          color: 'red',
          fillOpacity: 0.1,
          fillColor: '#FAE042'
          // fillColor: getColor(turf.area(feature.geometry) / 1600)
        });
        if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
        }
      },
      mouseout(e: any) {
        polygonAll.resetStyle(e.target);
      },
      click(_e: any) {
        // console.log(feature.geometry.geometries[1]);
      }
    });
  }
});

export const pointOne = L.geoJSON(null || undefined, {
  pointToLayer(_feature, latlng) {
    return L.marker(latlng, {
      icon: L.icon({
        iconUrl: '/assets/img/theater.png',
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      })
    });
  },
  onEachFeature(feature, layer) {
    const content =
      `<table class='tbl'>` +
      `<tr><th>รหัสแปลง</th><td>${feature.properties.myId}</td></tr>` +
      `<tr><th>โควตา - ชื่อ</th><td>${feature.properties.isQuota} - ${feature.properties.isFullName}</td></tr>` +
      `<tr><th>รับส่งเสริม</th><td>${feature.properties.isMonny}</td></tr>` +
      `<tr><th>พื้นที่จดแจ้ง</th><td>${feature.properties.isMotify} ไร่</td></tr>` +
      `<tr><th>พื่นที่ GIS</th><td>${feature.properties.isGIS}  ไร่</td></tr>` +
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
    }
  }
});
