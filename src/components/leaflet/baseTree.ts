import { factorys, tipLayer } from './factory';
// eslint-disable-next-line import/no-cycle
import {
  cycle,
  googleHybrid,
  googleSatellite,
  googleStreets,
  OpenTopoMap,
  osm,
  transport
} from './tileLayer';
import {
  PointSubZone101Layer,
  PointSubZone102Layer,
  PointSubZone103Layer,
  PointSubZone201Layer,
  PointSubZone202Layer,
  PointSubZone301Layer,
  PointSubZone302Layer,
  PointSubZone401Layer,
  PointSubZone402Layer,
  PointSubZone501Layer,
  PointSubZone502Layer,
  PointSubZone503Layer,
  PointSubZone601Layer,
  PointSubZone602Layer,
  PointSubZone701Layer,
  PointSubZone702Layer,
  PointSubZone801Layer,
  PointSubZone802Layer,
  PointSubZone901Layer,
  PointSubZone902Layer,
  PointSubZone903Layer,
  PointSubZone1001Layer,
  PointSubZone1002Layer,
  PointSubZone1101Layer,
  PointSubZone1102Layer,
  PointSubZone1103Layer,
  PointSubZone1201Layer,
  PointSubZone1202Layer,
  PointSubZone1203Layer,
  PointSubZone1204Layer,
  PointSubZone1205Layer,
  PointSubZone1206Layer,
  PointSubZone1401Layer,
  PointSubZone1402Layer,
  PointSubZone1501Layer,
  PointSubZone1502Layer,
  PointSubZone1503Layer,
  zone1Layer,
  zone2Layer,
  zone3Layer,
  zone4Layer,
  zone5Layer,
  zone6Layer,
  zone7Layer,
  zone8Layer,
  zone9Layer,
  zone10Layer,
  zone11Layer,
  zone12Layer,
  zone14Layer,
  zone15Layer
} from './zones/zonePoint';

export const baseTree1: any = [
  {
    label: 'GoogelMap',
    layer: googleSatellite,
    children: [
      {
        label: 'googleHybrid',
        layer: googleHybrid,
        name: 'GoogleMap'
      },
      // {
      //   label: 'googleTerrain',
      //   layer: googleTerrain,
      //   name: 'GoogleMap'
      // },
      {
        label: 'googleStreets',
        layer: googleStreets,
        name: 'GoogleMap'
      }
    ]
  },
  {
    label: 'OpenStreeMap',
    children: [
      {
        label: 'Mapnik',
        layer: osm,
        name: 'Mapnik <b>OpenStreeMap</b>'
      },
      { label: 'OpenTopoMap', layer: OpenTopoMap, name: 'Topographic - OSM' }
    ]
  },
  {
    label: 'Thunder',
    children: [
      { label: 'Cycle', layer: cycle },
      { label: 'Transport', layer: transport }
    ]
  }
];

export const overlaysTree1: any = [
  {
    label: 'เขตส่งเสริมอ้อย',
    selectAllCheckbox: 'Un/select all',
    children: [
      {
        label: 'เขตส่งเสริมที่ 1',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 1', layer: zone1Layer },
          { label: '101 นายสมคิด ใจรู้รอบ', layer: PointSubZone101Layer },
          { label: '102 นายเอกนรินทร์ พงษ์พาณิช', layer: PointSubZone102Layer },
          { label: '103 นายอภินันทร์ นวลแตง', layer: PointSubZone103Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 2',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 2', layer: zone2Layer },
          { label: '201 นายวศิน โรจนโพธิ์', layer: PointSubZone201Layer },
          { label: '202 นายอนุวัฒน์ สอนใจ', layer: PointSubZone202Layer }
        ]
      },

      {
        label: 'เขตส่งเสริมที่ 3',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 3', layer: zone3Layer },
          { label: '301 นายพระรส สุขบุตร', layer: PointSubZone301Layer },
          { label: '302 นายธนวันต์ โรจนโพธิ์', layer: PointSubZone302Layer }
        ]
      },

      {
        label: 'เขตส่งเสริมที่ 4',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 4', layer: zone4Layer },
          { label: '401 นายเอนกพล รัตนานนท์', layer: PointSubZone401Layer },
          { label: '402 นายคณากร พรมสิงห์', layer: PointSubZone402Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 5',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 5', layer: zone5Layer },
          { label: '501 นายรณฤทธิ์ สิงห์สถิตย์', layer: PointSubZone501Layer },
          { label: '502 นายยงยุทธ สระทองยุ้ง', layer: PointSubZone502Layer },
          { label: '503 นายประมวล ประทุมมา', layer: PointSubZone503Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 6',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 6', layer: zone6Layer },
          { label: '601 นายกฤษฎา ดำดี', layer: PointSubZone601Layer },
          { label: '602 นายอนุวัฒน์ ปานแดง', layer: PointSubZone602Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 7',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 7', layer: zone7Layer },
          { label: '701 นายภูชิต ลำปะละ', layer: PointSubZone701Layer },
          { label: '702 นายวสันต์ มนูญญา', layer: PointSubZone702Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 8',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 8', layer: zone8Layer },
          { label: '801 นายสุชาติ ปานโต', layer: PointSubZone801Layer },
          { label: '802 นายอัษฎายุธิ มณี', layer: PointSubZone802Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 9',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 9', layer: zone9Layer },
          { label: '901 นายปัญญา หนูทอง', layer: PointSubZone901Layer },
          { label: '902 นายอนึ่ง เกตุสาคร', layer: PointSubZone902Layer },
          { label: '903 นายชูชีพ เอนกพงษ์', layer: PointSubZone903Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 10',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 10', layer: zone10Layer },
          { label: '1001 นายนพพร ขันกสิกรรม', layer: PointSubZone1001Layer },
          { label: '1002 นายสมบรูณ์ เชาวริต', layer: PointSubZone1002Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 11',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 11', layer: zone11Layer },
          { label: '1101 นายธีรยุทธ กลมกล่อม', layer: PointSubZone1101Layer },
          { label: '1102 นายพีรพล บางยิ้ม', layer: PointSubZone1102Layer },
          { label: '1103 นายวรุต แก้วสีทัศน์', layer: PointSubZone1103Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 12',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 12', layer: zone12Layer },
          { label: '1201 นายวินัย ประทามะโก', layer: PointSubZone1201Layer },
          { label: '1202 นายไกรสร โกสากุล', layer: PointSubZone1202Layer },
          { label: '1203 นายสมพงษ์ พันจั่น', layer: PointSubZone1203Layer },
          { label: '1204 นายนัฐวุฒิ โตบึงกอก', layer: PointSubZone1204Layer },
          { label: '1205 นายชนนน เอมอ่ำ', layer: PointSubZone1205Layer },
          { label: '1206 นายธนพล โอ้ระลึก', layer: PointSubZone1206Layer }
        ]
      },
      // {
      //   label: 'เขตส่งเสริมที่ 13',
      //   selectAllCheckbox: true,
      //   children: [
      //     { label: '401', layer: L.layerGroup([]) },
      //     { label: '402', layer: L.layerGroup([]) },
      //     { label: '403', layer: L.layerGroup([]) }
      //   ]
      // },
      {
        label: 'เขตส่งเสริมที่ 14',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 14', layer: zone14Layer },
          {
            label: '1401 นายวุฒิชัย วงษ์ประพันธ์',
            layer: PointSubZone1401Layer
          },
          { label: '1402 นายวิโรจน์ เกสร', layer: PointSubZone1402Layer }
        ]
      },
      {
        label: 'เขตส่งเสริมที่ 15',
        selectAllCheckbox: true,
        children: [
          { label: 'ที่ตั้งเขต 15', layer: zone15Layer },
          { label: '1501 นายวงศพัทธ์ เกิดปั้น', layer: PointSubZone1501Layer },
          { label: '1502 นายประวิทย์ ทองอ่อน', layer: PointSubZone1502Layer },
          { label: '1503 นางสาวอำภา รอดได้', layer: PointSubZone1503Layer }
        ]
      }
    ]
  },

  // {
  //   label: 'ข้อมูลอ้อยฤดูการผลิต',
  //   children: [
  //     { label: 'แปลงอ้อย', layer: L.layerGroup([]), radioGroup: 'bc' },
  //     { label: 'แปลงเป้าหมาย', layer: L.layerGroup([]), radioGroup: 'bc' },
  //     { label: 'อนุมัติเงินเกี๊ยว', layer: L.layerGroup([]), radioGroup: 'bc' },
  //     { label: 'กิจกรรมแปลง', layer: L.layerGroup([]), radioGroup: 'bc' },
  //     {
  //       label: 'ประเมินอ้อย',
  //       layer: L.marker([42.883, -2.724]),
  //       radioGroup: 'bc'
  //     },
  //     {
  //       label: 'คิวตัดอ้อย',
  //       layer: L.marker([42.883, -2.724]),
  //       radioGroup: 'bc'
  //     },
  //     {
  //       label: 'ค่าความหวาน',
  //       layer: L.marker([42.883, -2.724]),
  //       radioGroup: 'bc'
  //     }
  //   ]
  // },
  // {
  //   label: 'ช้อมูลนำอ้อยเข้าหีบ',
  //   children: [
  //     { label: 'การสั่งตัด', layer: L.layerGroup([]), radioGroup: 'bc' },
  //     {
  //       label: 'คิวบรรทุก',
  //       layer: L.marker([43.301, -2.911]),
  //       radioGroup: 'bc'
  //     },
  //     { label: 'กิจกรรม', layer: L.marker([43.356, -1.791]), radioGroup: 'bc' },
  //     {
  //       label: 'ประเมินอ้อย',
  //       layer: L.marker([42.883, -2.724]),
  //       radioGroup: 'bc'
  //     }
  //   ]
  // },
  {
    label: 'โรงงานน้ำตาลใกล้เคียง',
    children: [
      // { label: 'โรงงานกลุ่มทิพย์', layer: tipLayer },
      { label: 'โรงงานใกล้เคียง', layer: factorys, tipLayer }
    ]
  }
];

export const baseWater1: any = [
  {
    label: 'ปีการส่งเสริม 2565/66',
    children: [
      { label: 'ประจำวัน', layer: L.layerGroup([]) },
      { label: 'สะสม', layer: L.layerGroup([]) }
    ]
  },
  {
    label: 'ปีการส่งเสริม 2566/67',
    children: [
      { label: 'ประจำวัน', layer: cycle },
      { label: 'สะสม', layer: transport }
    ]
  }
];

export const overlaysWater1: any = [
  {
    label: 'ปริมาณน้ำฝน',
    selectAllCheckbox: true,
    children: [
      { label: 'ไผ่ล้อม', layer: L.layerGroup([]) },
      { label: 'เนินมะปราง', layer: L.layerGroup([]) },
      { label: 'วัดตายม', layer: L.layerGroup([]) },
      { label: 'จิตเสือเต้น', layer: L.layerGroup([]) },
      { label: 'บ้านใหม่', layer: L.layerGroup([]) },
      { label: 'วัดโบสถ์', layer: L.layerGroup([]) },
      { label: 'วังสำโรง', layer: L.layerGroup([]) },
      { label: 'บึงบัว', layer: L.layerGroup([]) },
      { label: 'หนองโสน', layer: L.layerGroup([]) },
      { label: 'ไทรงาม', layer: L.layerGroup([]) },
      { label: 'ปลักแรด', layer: L.layerGroup([]) },
      { label: 'บางระกำ', layer: L.layerGroup([]) },
      { label: 'หนองกุลา', layer: L.layerGroup([]) },
      { label: 'ลานกระบือ', layer: L.layerGroup([]) }
    ]
  }
];

export const overlaysCutter1: any = [
  {
    label: 'เบอร์รถตัด',
    selectAllCheckbox: 'Un/select all',
    children: [
      { label: 'เบอร์ 1', layer: L.layerGroup([]) },
      { label: 'เบอร์ 2', layer: L.layerGroup([]) },
      { label: 'เบอร์ 3', layer: L.layerGroup([]) },
      { label: 'เบอร์ 4', layer: L.layerGroup([]) },
      { label: 'เบอร์ 5', layer: L.layerGroup([]) },
      { label: 'เบอร์ 6', layer: L.layerGroup([]) },
      { label: 'เบอร์ 7', layer: L.layerGroup([]) },
      { label: 'เบอร์ 8', layer: L.layerGroup([]) },
      { label: 'เบอร์ 9', layer: L.layerGroup([]) },
      { label: 'เบอร์ 10', layer: L.layerGroup([]) },
      { label: 'เบอร์ 11', layer: L.layerGroup([]) },
      { label: 'เบอร์ 12', layer: L.layerGroup([]) },
      { label: 'เบอร์ 13', layer: L.layerGroup([]) },
      { label: 'เบอร์ 14', layer: L.layerGroup([]) },
      { label: 'เบอร์ 15', layer: L.layerGroup([]) },
      { label: 'เบอร์ 16', layer: L.layerGroup([]) },
      { label: 'เบอร์ 17', layer: L.layerGroup([]) },
      { label: 'เบอร์ 18', layer: L.layerGroup([]) },
      { label: 'เบอร์ 19', layer: L.layerGroup([]) },
      { label: 'เบอร์ 20', layer: L.layerGroup([]) },
      { label: 'เบอร์ 21', layer: L.layerGroup([]) },
      { label: 'เบอร์ 22', layer: L.layerGroup([]) },
      { label: 'เบอร์ 23', layer: L.layerGroup([]) },
      { label: 'เบอร์ 24', layer: L.layerGroup([]) },
      { label: 'เบอร์ 25', layer: L.layerGroup([]) },
      { label: 'เบอร์ 26', layer: L.layerGroup([]) },
      { label: 'เบอร์ 27', layer: L.layerGroup([]) },
      { label: 'เบอร์ 28', layer: L.layerGroup([]) },
      { label: 'เบอร์ 28', layer: L.layerGroup([]) },
      { label: 'เบอร์ 28', layer: L.layerGroup([]) },
      { label: 'เบอร์ 29', layer: L.layerGroup([]) },
      { label: 'เบอร์ 30', layer: L.layerGroup([]) },
      { label: 'เบอร์ 31', layer: L.layerGroup([]) },
      { label: 'เบอร์ 32', layer: L.layerGroup([]) },
      { label: 'เบอร์ 33', layer: L.layerGroup([]) },
      { label: 'เบอร์ 34', layer: L.layerGroup([]) },
      { label: 'เบอร์ 35', layer: L.layerGroup([]) },
      { label: 'เบอร์ 36', layer: L.layerGroup([]) },
      { label: 'เบอร์ 37', layer: L.layerGroup([]) },
      { label: 'เบอร์ 38', layer: L.layerGroup([]) },
      { label: 'เบอร์ 39', layer: L.layerGroup([]) },
      { label: 'เบอร์ 40', layer: L.layerGroup([]) },
      { label: 'เบอร์ 41', layer: L.layerGroup([]) },
      { label: 'เบอร์ 42', layer: L.layerGroup([]) },
      { label: 'เบอร์ 43', layer: L.layerGroup([]) },
      { label: 'เบอร์ 44', layer: L.layerGroup([]) },
      { label: 'เบอร์ 45', layer: L.layerGroup([]) },
      { label: 'เบอร์ 46', layer: L.layerGroup([]) },
      { label: 'เบอร์ 47', layer: L.layerGroup([]) }
    ]
  }
];

export const options: any = {
  namedToggle: true,
  selectorBack: false,
  closedSymbol: '&#8862; &#x1f5c0;',
  openedSymbol: '&#8863; &#x1f5c1;',
  collapseAll: 'Collapse all',
  expandAll: 'Expand all',
  collapsed: false
};
