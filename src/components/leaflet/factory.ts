import router from 'next/router';

// import L from '@/components/leaflet/leaflet';

const psFactory = L.icon({
  iconUrl: `${router.basePath}/psicon.ico`,
  iconSize: [30, 30], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [5, 34], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [20, -30] // point from which the popup should open relative to the iconAnchor
});

export const factory = L.icon({
  iconUrl: `${router.basePath}/assets/images/factory.png`,
  iconSize: [50, 50], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [12, 44], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [20, -30] // point from which the popup should open relative to the iconAnchor
});

export const factory1 = L.icon({
  iconUrl: `${router.basePath}/assets/images/factory1.png`,
  iconSize: [25, 25], // size of the icon
  shadowSize: [30, 44], // size of the shadow
  iconAnchor: [12, 54], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [10, -20] // point from which the popup should open relative to the iconAnchor
});

export const factorys = L.layerGroup();
export const tipLayer = L.layerGroup();

export const psDonut: any = L.donut(L.latLng(16.5717494, 100.3585106), {
  radius: 50000,
  innerRadius: 30000,
  innerRadiusAsPercent: false,
  fillColor: 'red',
  fillOpacity: 0.1,
  color: 'green',
  opacity: 0.1
});

export const psDonut2: any = L.donut(L.latLng(16.5717494, 100.3585106), {
  radius: 60000,
  innerRadius: 40000,
  innerRadiusAsPercent: false,
  fillColor: 'red',
  fillOpacity: 0.1,
  color: 'green',
  opacity: 0.1
});

export const psmaker: any = L.marker([16.5717494, 100.3585106], {
  icon: psFactory
});
psmaker.bindPopup('บริษัท น้ำตาลพิษณุโลก จำกัด');

const tip1 = L.marker([16.2230628, 99.8922992], { icon: factory });
tip1.bindPopup('บริษัท น้ำตาลทิพย์กำแพงเพชร จำกัด').addTo(factorys);

const tip2 = L.marker([17.5629913, 99.8583479], { icon: factory });
tip2.bindPopup('บริษัท น้ำตาลทิพย์สุโขทัย จำกัด').addTo(factorys);

const maker1 = L.marker([16.3659365, 99.6078944], { icon: factory });
maker1.bindPopup('บจก. น้ำตาลนครเพชร จำกัด').addTo(factorys);

const maker2 = L.marker([17.662261, 100.2084066], { icon: factory });
maker2.bindPopup('น้ำตาลไทยเอกลักษณ์').addTo(factorys);

const maker3 = L.marker([15.877899, 101.0268224], { icon: factory });
maker3.bindPopup('Thai Sugar Industry Co., Ltd. (Phetchabun)').addTo(factorys);

const maker4 = L.marker([15.3771181, 100.2359408], { icon: factory });
maker4
  .bindPopup('เกษตรไทยอินเตอร์เนชั่นแนล ชูการ์ คอร์ปอเรชั่น')
  .addTo(factorys);

const maker5 = L.marker([15.7235201, 99.7295182], { icon: factory });
maker5.bindPopup('น้ำตาลมิตรเกษตรอุทัยธานี').addTo(factorys);

// const maker1 = L.marker([16.2230628, 99.8922992], { icon: factory });
// maker1.addTo(map).bindPopup('บริษัท น้ำตาลทิพย์กำแพงเพชร จำกัด');

// const tip2 = L.marker([17.5629913, 99.8583479], { icon: factory });
// tip2.bindPopup('บริษัท น้ำตาลทิพย์สุโขทัย จำกัด').addTo(map);

// const maker3 = L.marker([17.6597419, 100.2049842], { icon: factory });
// maker3.bindPopup('น้ำตาลไทยเอกลักษณ์').addTo(map);

// const maker2 = L.marker([16.3659365, 99.6078944], { icon: factory });
// maker2.addTo(map).bindPopup('บจก. น้ำตาลนครเพชร');

const maker7 = L.marker([16.3545369, 99.5981026], { icon: factory1 });
maker7.addTo(factorys).bindPopup('น้ำตาลกำแพงเพชร');

// const maker4 = L.marker([15.877899, 101.0268224], { icon: factory });
// maker4.bindPopup('Thai Sugar Industry Co., Ltd. (Phetchabun)').addTo(map);

// const maker5 = L.marker([15.3771181, 100.2359408], { icon: factory });
// maker5
//   .bindPopup('เกษตรไทยอินเตอร์เนชั่นแนล ชูการ์ คอร์ปอเรชั่น')
//   .addTo(map);

// const maker6 = L.marker([15.7235201, 99.7295182], { icon: factory });
// maker6.bindPopup('น้ำตาลมิตรเกษตรอุทัยธานี').addTo(map);
