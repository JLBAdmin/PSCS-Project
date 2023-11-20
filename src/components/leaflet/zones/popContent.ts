let feature: any;

export const content =
  `<table class='tbl'>` +
  `<tr><th>รหัสแปลง</th><td>${feature.properties.myGis}</td></tr>` +
  `<tr><th>โควตา - ชื่อ</th><td>${feature.properties.isQuota} - ${feature.properties.isFullName}</td></tr>` +
  `<tr><th>รับส่งเสริม</th><a><td>${feature.properties.isMonny}</td></a></tr>` +
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
