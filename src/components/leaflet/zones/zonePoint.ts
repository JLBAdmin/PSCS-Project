export const Lable101ZoneLayer: any = L.geoJSON(null || undefined);
export const PointZone1Layer: any = L.geoJSON(null || undefined);
export const PointSubZone101Layer: any = L.geoJSON(null || undefined);
export const PointSubZone102Layer: any = L.geoJSON(null || undefined);
export const PointSubZone103Layer: any = L.geoJSON(null || undefined);

export const PointZone2Layer: any = L.geoJSON(null || undefined);
export const PointSubZone201Layer: any = L.geoJSON(null || undefined);
export const PointSubZone202Layer: any = L.geoJSON(null || undefined);

export const PointZone3Layer: any = L.geoJSON(null || undefined);
export const PointSubZone301Layer: any = L.geoJSON(null || undefined);
export const PointSubZone302Layer: any = L.geoJSON(null || undefined);

export const PointZone4Layer: any = L.geoJSON(null || undefined);
export const PointSubZone401Layer: any = L.geoJSON(null || undefined);
export const PointSubZone402Layer: any = L.geoJSON(null || undefined);

export const PointZone5Layer: any = L.geoJSON(null || undefined);
export const PointSubZone501Layer: any = L.geoJSON(null || undefined);
export const PointSubZone502Layer: any = L.geoJSON(null || undefined);
export const PointSubZone503Layer: any = L.geoJSON(null || undefined);

export const PointZone6Layer: any = L.geoJSON(null || undefined);
export const PointSubZone601Layer: any = L.geoJSON(null || undefined);
export const PointSubZone602Layer: any = L.geoJSON(null || undefined);

export const PointZone7Layer: any = L.geoJSON(null || undefined);
export const PointSubZone701Layer: any = L.geoJSON(null || undefined);
export const PointSubZone702Layer: any = L.geoJSON(null || undefined);

export const PointZone8Layer: any = L.geoJSON(null || undefined);
export const PointSubZone801Layer: any = L.geoJSON(null || undefined);
export const PointSubZone802Layer: any = L.geoJSON(null || undefined);

export const PointZone9Layer: any = L.geoJSON(null || undefined);
export const PointSubZone901Layer: any = L.geoJSON(null || undefined);
export const PointSubZone902Layer: any = L.geoJSON(null || undefined);
export const PointSubZone903Layer: any = L.geoJSON(null || undefined);

export const PointZone10Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1001Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1002Layer: any = L.geoJSON(null || undefined);

export const PointZone11Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1101Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1102Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1103Layer: any = L.geoJSON(null || undefined);

export const PointZone12Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1201Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1202Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1203Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1204Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1205Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1206Layer: any = L.geoJSON(null || undefined);

export const PointZone14Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1401Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1402Layer: any = L.geoJSON(null || undefined);

export const PointZone15Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1501Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1502Layer: any = L.geoJSON(null || undefined);
export const PointSubZone1503Layer: any = L.geoJSON(null || undefined);

const zones = L.icon({
  iconUrl: '/assets/img/placeholder.png',
  iconSize: [25, 25], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [12, 54], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [10, -50] // point from which the popup should open relative to the iconAnchor
});

export const zone1Layer = L.layerGroup();
const zone1 = L.marker([16.5698767, 100.3606078], { icon: zones });
zone1.addTo(zone1Layer).bindPopup('เขตส่งเสริมอ้อยที่ 01 (ไผ่ล้อม)');

export const zone2Layer = L.layerGroup();
const zone2 = L.marker([16.5787023, 100.6310796], { icon: zones });
zone2.addTo(zone2Layer).bindPopup('เขตส่งเสริมอ้อยที่ 02 (เนินมะปราง)');

export const zone3Layer = L.layerGroup();
const zone3 = L.marker([16.6076125, 100.4508875], { icon: zones });
zone3.addTo(zone3Layer).bindPopup('เขตส่งเสริมอ้อยที่ 03 (วัดตายม)');

export const zone4Layer = L.layerGroup();
const zone4 = L.marker([16.253099, 100.6137005], { icon: zones });
zone4.addTo(zone4Layer).bindPopup('เขตส่งเสริมอ้อยที่ 04 (เขาเจ็ดลูก)');

export const zone5Layer = L.layerGroup();
const zone5 = L.marker([16.68763, 100.2841317], { icon: zones });
zone5.addTo(zone5Layer).bindPopup('เขตส่งเสริมอ้อยที่ 05 (บ้านใหม่)');

export const zone6Layer = L.layerGroup();
const zone6 = L.marker([16.9809821, 100.3305303], { icon: zones });
zone6.addTo(zone6Layer).bindPopup('เขตส่งเสริมอ้อยที่ 06 (วัดโบสถ์)');

export const zone7Layer = L.layerGroup();
const zone7 = L.marker([16.234027, 100.3360327], { icon: zones });
zone7.addTo(zone7Layer).bindPopup('เขตส่งเสริมอ้อยที่ 07 (วังสำโรง)');

export const zone8Layer = L.layerGroup();
const zone8 = L.marker([16.502895, 100.0477014], { icon: zones });
zone8.addTo(zone8Layer).bindPopup('เขตส่งเสริมอ้อยที่ 08 (บึงบัว)');

export const zone9Layer = L.layerGroup();
const zone9 = L.marker([16.4015721, 100.107664], { icon: zones });
zone9.addTo(zone9Layer).bindPopup('เขตส่งเสริมอ้อยที่ 09 (หนองโสน)');

export const zone10Layer = L.layerGroup();
const zone10 = L.marker([16.455533, 99.82813], { icon: zones });
zone10.addTo(zone10Layer).bindPopup('เขตส่งเสริมอ้อยที่ 10 (ไทรงาม)');

export const zone11Layer = L.layerGroup();
const zone11 = L.marker([16.7018416, 100.1017918], { icon: zones });
zone11.addTo(zone11Layer).bindPopup('เขตส่งเสริมอ้อยที่ 11 (ปลักแรด)');

export const zone12Layer = L.layerGroup();
const zone12 = L.marker([16.686008, 99.999321], { icon: zones });
zone12.addTo(zone12Layer).bindPopup('เขตส่งเสริมอ้อยที่ 12 (บางระกำ)');

export const zone14Layer = L.layerGroup();
const zone14 = L.marker([16.6557667, 99.9387051], { icon: zones });
zone14.addTo(zone14Layer).bindPopup('เขตส่งเสริมอ้อยที่ 14 (หนองกุลา)');

export const zone15Layer = L.layerGroup();
const zone15 = L.marker([16.601887, 99.845872], { icon: zones });
zone15.addTo(zone15Layer).bindPopup('เขตส่งเสริมอ้อยที่ 15 (ลานกระบือ)');
