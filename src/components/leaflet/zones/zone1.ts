import { highlight, highlightStyle, plotStyle } from '../style';

export const plotZone1 = L.geoJSON(null || undefined, {
  style: plotStyle,
  onEachFeature(feature: any, layer: any) {
    // const centroid = turf.centroid(feature.geometry);
    // eslint-disable-next-line no-console
    // console.log(centroid);
    layer.bindPopup(feature.properties.q_name);
    layer.on({
      mouseover(e: any) {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        const layer = e.target;
        layer.setStyle({
          weight: 3,
          color: '#00FFFF',
          opacity: 1
        });
        if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
        }
      },
      mouseout(e: any) {
        plotZone1.resetStyle(e.target);
      }
    });
    // boroughSearch.push({
    //   name: layer.feature.properties.BoroName,
    //   source: "Boroughs",
    //   id: L.stamp(layer),
    //   bounds: layer.getBounds()
    // });
  },
  filter(feature: any): boolean {
    return feature.properties.zone === '1';
  }
});

export const pointZone1: any = L.geoJSON(null || undefined, {
  filter(feature: any) {
    return feature.properties.isZone === '1';
  },
  pointToLayer(_feature, latLng) {
    return L.marker(latLng, {
      icon: L.icon({
        iconUrl:
          '/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_1.png',
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      })
      // title: feature.properties.name,
      // riseOnHover: true
    });
  }
});

export const pointSubZone101: any = L.geoJSON(null || undefined, {
  onEachFeature(feature: any, layer) {
    const content =
      `<table class='tbl'>` +
      `<tr><th>รหัสแปลง</th><td>${feature.properties.myCode}</td></tr>` +
      `<tr><th>โควตา - ชื่อ</th><td>${feature.properties.isQuota} - ${feature.properties.isFullName}</td></tr>` +
      `<tr><th>รับส่งเสริม</th><a><td>${feature.properties.isMonny}</a></td></tr>` +
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
      `<tr><th>จดแจ้ง</th><td><img src="/assets/images/1.jfif" /></td></tr>` +
      `<tr><th>ตรวจสอบ</th><td><img src="/assets/images/2.jfif" /></td></tr>` +
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
    return feature.properties.isSubvZone === 101;
  },
  pointToLayer(_feature, latLng) {
    return L.marker(latLng, {
      icon: L.icon({
        iconUrl:
          '/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png',
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      })
      // title: feature.properties.name,
      // riseOnHover: true
    });
  }
});

export const pointSubZone102: any = L.geoJSON(null || undefined, {
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
      `<tr><th>จดแจ้ง</th><td><img src="/assets/images/1.jfif" /></td></tr>` +
      `<tr><th>ตรวจสอบ</th><td><img src="/assets/images/2.jfif" /></td></tr>` +
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
    return feature.properties.isSubvZone === 102;
  },
  pointToLayer(_feature, latLng) {
    return L.marker(latLng, {
      icon: L.icon({
        iconUrl:
          '/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png',
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      })
      // title: feature.properties.name,
      // riseOnHover: true
    });
  }
});

export const pointSubZone103: any = L.geoJSON(null || undefined, {
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
      `<tr><th>จดแจ้ง</th><td><img src="/assets/images/1.jfif" /></td></tr>` +
      `<tr><th>ตรวจสอบ</th><td><img src="/assets/images/2.jfif" /></td></tr>` +
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
    return feature.properties.isSubvZone === 103;
  },
  pointToLayer(_feature, latLng) {
    return L.marker(latLng, {
      icon: L.icon({
        iconUrl:
          '/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png',
        iconSize: [28, 28],
        iconAnchor: [12, 28],
        popupAnchor: [0, -25]
      })
      // title: feature.properties.name,
      // riseOnHover: true
    });
  }
});

export const zone101Lable = L.geoJSON(null || undefined, {
  filter(feature: any) {
    return feature.properties.isSubvZone === 101;
  },
  pointToLayer(feature: any, latLng) {
    const label = String(feature.properties.myId);
    return new L.CircleMarker(latLng, {
      radius: 0,
      fillColor: '#FFFFFF',
      color: 'Red',
      weight: 1,
      opacity: 0.1,
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

export const zone102Lable = L.geoJSON(null || undefined, {
  filter(feature: any) {
    return feature.properties.isSubvZone === 102;
  },
  pointToLayer(feature: any, latLng) {
    const label = String(feature.properties.myId);
    return new L.CircleMarker(latLng, {
      radius: 0,
      fillColor: '#FFFFFF',
      color: 'Red',
      weight: 1,
      opacity: 0.1,
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

export const zone103Lable = L.geoJSON(null || undefined, {
  filter(feature: any) {
    return feature.properties.isSubvZone === 103;
  },
  pointToLayer(feature: any, latLng) {
    const label = String(feature.properties.myId);
    return new L.CircleMarker(latLng, {
      radius: 0,
      fillColor: '#FFFFFF',
      color: 'Red',
      weight: 1,
      opacity: 0.1,
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
