// Define some base layers
export const empty = L.tileLayer('', { attribution: '' });

export const googleSatellite = L.tileLayer(
  'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
  {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }
);

export const googleTerrain = L.tileLayer(
  'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',
  {
    maxZoom: 19,
    attribution:
      '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);

export const googleHybrid = L.tileLayer(
  'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',
  {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }
);

export const googleStreets = L.tileLayer(
  'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
  {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
  }
);

// eslint-disable-next-line @typescript-eslint/naming-convention
export const redVial_1 = L.tileLayer.wms(
  'http://wms.ign.gob.ar/geoserver/wms',
  {
    layers: 'idera:red_vial',
    format: 'image/png',
    transparent: true
  }
);

export const osm = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution:
      '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
);

export const OpenTopoMap = L.tileLayer(
  'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 17,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  }
);

export const otopomap = L.tileLayer(
  'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
  {
    attribution: '© OpenStreetMap contributors. OpenTopoMap.org'
  }
);

export const thunderAttr = {
  attribution: '© OpenStreetMap contributors. Tiles courtesy of Andy Allan'
};
export const transport = L.tileLayer(
  '//{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png',
  thunderAttr
);

export const cycle = L.tileLayer(
  'http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
  thunderAttr
);
