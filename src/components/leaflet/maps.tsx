/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
// eslint-disable-next-line import/extensions, simple-import-sort/imports
import 'leaflet/dist/leaflet.css';
import 'leaflet.fullscreen/Control.FullScreen.css';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import 'leaflet-sidebar-v2/css/leaflet-sidebar.min.css';

import L from 'leaflet';
import React, { useEffect } from 'react';
import 'leaflet.markerclusterv2';
import 'leaflet.markerclusterv2/dist/markerclusterv2.css';
import 'leaflet.markerclusterv2/dist/markerclusverv2.default.css';
import 'leaflet-sidebar-v2';
import 'leaflet.fullscreen/Control.FullScreen';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min';
import 'leaflet.control.layers.tree';

// eslint-disable-next-line import/extensions
import '@/public/js/L.Donut.js';
// eslint-disable-next-line import/extensions
import '@/public/js/leaflet.restoreview.js';

import { googleSatellite } from './tileLayer';
import { psDonut, psmaker } from './factory';
import { pointOne, polygonAll } from './quotas/quota';
import { fsControl } from './controls';
import { highlight } from './style';

import { baseTree1, overlaysTree1, options } from './baseTree';
// eslint-disable-next-line import/no-cycle
import { Sidebar } from './sidebar';
import {
  pointSubZone101,
  pointSubZone102,
  pointSubZone103,
  zone101Lable,
  zone102Lable,
  zone103Lable
} from './zones/zone1';
import {
  pointSubZone1001,
  pointSubZone1002,
  zone1001Lable,
  zone1002Lable
} from './zones/zone10';
import {
  pointSubZone1101,
  pointSubZone1102,
  pointSubZone1103,
  zone1101Lable,
  zone1102Lable,
  zone1103Lable
} from './zones/zone11';
import {
  pointSubZone1201,
  pointSubZone1202,
  pointSubZone1203,
  pointSubZone1204,
  pointSubZone1205,
  pointSubZone1206,
  zone1201Lable,
  zone1202Lable,
  zone1203Lable,
  zone1204Lable,
  zone1205Lable,
  zone1206Lable
} from './zones/zone12';
import {
  pointSubZone1401,
  pointSubZone1402,
  zone1401Lable,
  zone1402Lable
} from './zones/zone14';
import {
  pointSubZone1501,
  pointSubZone1502,
  pointSubZone1503,
  zone1501Lable,
  zone1502Lable,
  zone1503Lable
} from './zones/zone15';
import {
  pointSubZone201,
  pointSubZone202,
  zone201Lable,
  zone202Lable
} from './zones/zone2';
import {
  pointSubZone301,
  pointSubZone302,
  zone301Lable,
  zone302Lable
} from './zones/zone3';
import {
  pointSubZone401,
  pointSubZone402,
  zone401Lable,
  zone402Lable
} from './zones/zone4';
import {
  pointSubZone501,
  pointSubZone502,
  pointSubZone503,
  zone501Lable,
  zone502Lable,
  zone503Lable
} from './zones/zone5';
import {
  pointSubZone601,
  pointSubZone602,
  zone601Lable,
  zone602Lable
} from './zones/zone6';
import {
  pointSubZone701,
  pointSubZone702,
  zone701Lable,
  zone702Lable
} from './zones/zone7';
import {
  pointSubZone801,
  pointSubZone802,
  zone801Lable,
  zone802Lable
} from './zones/zone8';
import {
  pointSubZone901,
  pointSubZone902,
  pointSubZone903,
  zone901Lable,
  zone902Lable,
  zone903Lable
} from './zones/zone9';
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
  PointSubZone1503Layer
} from './zones/zonePoint';

// eslint-disable-next-line import/no-cycle

// eslint-disable-next-line import/no-cycle

const style = {
  width: '100%',
  height: '90vh'
};

declare const $: any;

const Maps = ({
  addressPoint,
  polygons,
  pointAll,
  plotpoint,
  sidebarAdd
}: any) => {
  // create map
  const mapRef: any = React.useRef(null);
  let markerClusters: any;
  let isEmptyPolygons: any;
  let isEmptyPoint: any;
  let isEmptyPointAll: any;
  // const featureList: any;

  function clearHighlight() {
    highlight.clearLayers();
  }

  // eslint-disable-next-line no-inner-declarations
  function sidebarClick(id: number) {
    const layer: any = markerClusters.getLayer(id);
    mapRef.current.setView([layer.getLatLng().lat, layer.getLatLng().lng], 17, {
      animation: true
    });

    layer.fire('click');
    /* Hide sidebar and go to the map on small screens */
    mapRef.current.invalidateSize();
  }

  const layerControl = L.control.layers.tree(baseTree1, overlaysTree1, options);

  function syncSidebar() {
    /* Empty sidebar features */
    $('#feature-list tbody').empty();
    /* Loop through master layer and add only features which are in the map bounds */
    pointSubZone101.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      // eslint-disable-next-line no-console
      if (mapRef.current.hasLayer(PointSubZone101Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone101Lable);
      // } else {
      //   map.removeLayer(zone101Lable);
      // }
    });

    pointSubZone102.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone102Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone102Lable);
      // } else {
      //   map.removeLayer(zone102Lable);
      // }
    });

    pointSubZone103.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone103Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone103Lable);
      // } else {
      //   map.removeLayer(zone103Lable);
      // }
    });

    pointSubZone201.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone201Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone201Lable);
      // } else {
      //   map.removeLayer(zone201Lable);
      // }
    });

    pointSubZone202.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone202Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone202Lable);
      // } else {
      //   map.removeLayer(zone202Lable);
      // }
    });

    pointSubZone301.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone301Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone301Lable);
      // } else {
      //   map.removeLayer(zone301Lable);
      // }
    });

    pointSubZone302.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone302Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone302Lable);
      // } else {
      //   map.removeLayer(zone302Lable);
      // }
    });

    pointSubZone401.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone401Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone401Lable);
      // } else {
      //   map.removeLayer(zone401Lable);
      // }
    });

    pointSubZone402.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone402Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone402Lable);
      // } else {
      //   map.removeLayer(zone402Lable);
      // }
    });

    pointSubZone501.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone501Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone501Lable);
      // } else {
      //   map.removeLayer(zone501Lable);
      // }
    });

    pointSubZone502.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone502Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone502Lable);
      // } else {
      //   map.removeLayer(zone502Lable);
      // }
    });

    pointSubZone503.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone503Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
      // if (map.getZoom() > 16) {
      //   map.addLayer(zone503Lable);
      // } else {
      //   map.removeLayer(zone503Lable);
      // }
    });

    pointSubZone601.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone601Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone602.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone602Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone701.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone701Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone702.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone702Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone801.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone801Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone802.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone802Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone901.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone901Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone902.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone902Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone903.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone903Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1001.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1001Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1002.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1002Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1101.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1101Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1102.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1102Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1103.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1103Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1201.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1201Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1202.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1202Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1203.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1203Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1204.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1204Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1205.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1205Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1206.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1206Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1401.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1401Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1402.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1402Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1501.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1501Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1502.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1502Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });

    pointSubZone1503.eachLayer((layer: any) => {
      const x = Math.floor(Math.random() * 10 + 1);
      if (mapRef.current.hasLayer(PointSubZone1503Layer)) {
        if (mapRef.current.getBounds().contains(layer.getLatLng())) {
          $('#feature-list tbody').append(
            `<tr class='feature-row' id=${L.stamp(layer)} lat=${
              layer.getLatLng().lat
            } lng=${
              layer.getLatLng().lng
            }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
              layer.feature.properties.isFullName
            }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
          );
        }
      }
    });
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define

    markerClusters = new L.MarkerClusterGroup({
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      disableClusteringAtZoom: 15
    });

    mapRef.current = L.map('map', {
      layers: [psDonut, markerClusters, googleSatellite],
      center: [16.5717494, 100.3585106],
      zoom: 9,
      // minZoom: 7,
      maxZoom: 19,
      zoomControl: true,
      // eslint-disable-next-line import/extensions
      attributionControl: true
    });
    mapRef.current.addControl(fsControl);
    mapRef.current.locate({ enableHighAccuracy: true });
    mapRef.current.on('locationfound', (e: any) => {
      const coords = [e.latlng.lat, e.latlng.lng];
      psmaker.addTo(mapRef.current).openPopup();
      mapRef.current.flyTo(coords, 14);
    });
    // events are fired when entering or exiting fullscreen.
    mapRef.current.on('enterFullscreen', () => {
      // eslint-disable-next-line no-console
      console.log('entered fullscreen');
    });

    mapRef.current.on('exitFullscreen', () => {
      // eslint-disable-next-line no-console
      console.log('exited fullscreen');
    });
    if (sidebarAdd === true) {
      // eslint-disable-next-line func-names
      $(document).on('click', '.feature-row', function (this: number): void {
        $(document).off('mouseout', '.feature-row', clearHighlight);
        sidebarClick(parseInt($(this).attr('id'), 10));
      });

      $(document).on('mouseout', '.feature-row', clearHighlight);
      const sidebar: any = L.control.sidebar({
        autopan: true, // whether to maintain the centered map point when opening the sidebar
        closeButton: true, // whether t add a close button to the panes
        container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
        position: 'left' // left or right
      });
      layerControl
        .addTo(mapRef.current)
        .collapseTree()
        .expandSelected()
        .collapseTree(true);

      const htmlObject = layerControl.getContainer();
      const a = document.getElementById('layers');

      // eslint-disable-next-line no-inner-declarations
      function setParent(el: any, newParent: any) {
        newParent.appendChild(el);
      }
      setParent(htmlObject, a);
      sidebar.addTo(mapRef.current);
    }
  }, [sidebarAdd]);

  // add layer
  const layerRef: any = React.useRef(null);
  // create the sidebar instance and add it to the map
  React.useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
    if (!mapRef.current.restoreView()) {
      mapRef.current.setView([16.5717494, 100.3585106], 16);
    }
    if (polygons) {
      isEmptyPolygons = Object.keys(polygons).length === 0;
    }

    if (isEmptyPolygons === false) {
      polygonAll.addData(polygons);
      mapRef.current.addLayer(polygonAll);
      setTimeout(() => {
        mapRef.current.fitBounds(polygonAll.getBounds());
      }, 1000);
    }

    if (plotpoint) {
      isEmptyPoint = Object.keys(plotpoint).length === 0;
    }
    if (isEmptyPoint === false) {
      pointOne.addData(plotpoint);
      mapRef.current.addLayer(pointOne);
      setTimeout(() => {
        mapRef.current.fitBounds(pointOne.getBounds());
      }, 3000);
    }

    if (pointAll) {
      isEmptyPointAll = Object.keys(pointAll).length === 0;
    }

    if (isEmptyPointAll === false) {
      zone101Lable.addData(pointAll);
      zone102Lable.addData(pointAll);
      zone103Lable.addData(pointAll);
      zone201Lable.addData(pointAll);
      zone202Lable.addData(pointAll);
      zone301Lable.addData(pointAll);
      zone302Lable.addData(pointAll);
      zone401Lable.addData(pointAll);
      zone402Lable.addData(pointAll);
      zone501Lable.addData(pointAll);
      zone502Lable.addData(pointAll);
      zone503Lable.addData(pointAll);
      zone601Lable.addData(pointAll);
      zone602Lable.addData(pointAll);
      zone701Lable.addData(pointAll);
      zone702Lable.addData(pointAll);
      zone801Lable.addData(pointAll);
      zone802Lable.addData(pointAll);
      zone901Lable.addData(pointAll);
      zone902Lable.addData(pointAll);
      zone903Lable.addData(pointAll);
      zone1001Lable.addData(pointAll);
      zone1002Lable.addData(pointAll);
      zone1101Lable.addData(pointAll);
      zone1102Lable.addData(pointAll);
      zone1103Lable.addData(pointAll);
      zone1201Lable.addData(pointAll);
      zone1202Lable.addData(pointAll);
      zone1203Lable.addData(pointAll);
      zone1204Lable.addData(pointAll);
      zone1205Lable.addData(pointAll);
      zone1206Lable.addData(pointAll);
      zone1401Lable.addData(pointAll);
      zone1402Lable.addData(pointAll);
      zone1501Lable.addData(pointAll);
      zone1502Lable.addData(pointAll);
      zone1503Lable.addData(pointAll);
      pointSubZone101.addData(pointAll);
      pointSubZone102.addData(pointAll);
      pointSubZone103.addData(pointAll);
      pointSubZone201.addData(pointAll);
      pointSubZone202.addData(pointAll);
      pointSubZone301.addData(pointAll);
      pointSubZone302.addData(pointAll);
      pointSubZone401.addData(pointAll);
      pointSubZone402.addData(pointAll);
      pointSubZone501.addData(pointAll);
      pointSubZone502.addData(pointAll);
      pointSubZone503.addData(pointAll);
      pointSubZone601.addData(pointAll);
      pointSubZone602.addData(pointAll);
      pointSubZone701.addData(pointAll);
      pointSubZone702.addData(pointAll);
      pointSubZone801.addData(pointAll);
      pointSubZone802.addData(pointAll);
      pointSubZone901.addData(pointAll);
      pointSubZone902.addData(pointAll);
      pointSubZone903.addData(pointAll);
      pointSubZone1001.addData(pointAll);
      pointSubZone1002.addData(pointAll);
      pointSubZone1101.addData(pointAll);
      pointSubZone1102.addData(pointAll);
      pointSubZone1103.addData(pointAll);
      pointSubZone1201.addData(pointAll);
      pointSubZone1202.addData(pointAll);
      pointSubZone1203.addData(pointAll);
      pointSubZone1204.addData(pointAll);
      pointSubZone1205.addData(pointAll);
      pointSubZone1206.addData(pointAll);
      pointSubZone1401.addData(pointAll);
      pointSubZone1402.addData(pointAll);
      pointSubZone1501.addData(pointAll);
      pointSubZone1502.addData(pointAll);
      pointSubZone1503.addData(pointAll);
    }

    if (addressPoint) {
      const century21icon = L.icon({
        iconUrl: '/assets/img/placeholder.png',
        iconSize: [30, 30]
      });
      L.marker(addressPoint, { icon: century21icon }).addTo(mapRef.current);
      setTimeout(() => {
        mapRef.current.flyTo(addressPoint, 17);
      }, 2000);
    }
  }, [addressPoint, plotpoint, polygons, pointAll]);

  // update markers
  React.useEffect(() => {
    layerRef.current.clearLayers();
    if (sidebarAdd === true) {
      mapRef.current.on('overlayadd', (e: any) => {
        if (e.layer === PointSubZone101Layer) {
          markerClusters.addLayer(pointSubZone101);
          syncSidebar();
        }
        if (e.layer === PointSubZone102Layer) {
          markerClusters.addLayer(pointSubZone102);
          syncSidebar();
        }
        if (e.layer === PointSubZone103Layer) {
          markerClusters.addLayer(pointSubZone103);
          syncSidebar();
        }
        if (e.layer === PointSubZone201Layer) {
          markerClusters.addLayer(pointSubZone201);
          syncSidebar();
          // zone201Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone202Layer) {
          markerClusters.addLayer(pointSubZone202);
          syncSidebar();
          // zone202Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone301Layer) {
          markerClusters.addLayer(pointSubZone301);
          syncSidebar();
          // zone301Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone302Layer) {
          markerClusters.addLayer(pointSubZone302);
          syncSidebar();
          // zone302Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone401Layer) {
          markerClusters.addLayer(pointSubZone401);
          syncSidebar();
          // zone401Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone402Layer) {
          markerClusters.addLayer(pointSubZone402);
          syncSidebar();
          // zone402Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone501Layer) {
          markerClusters.addLayer(pointSubZone501);
          syncSidebar();
          // zone501Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone502Layer) {
          markerClusters.addLayer(pointSubZone502);
          syncSidebar();
          // zone502Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone503Layer) {
          markerClusters.addLayer(pointSubZone503);
          syncSidebar();
          // zone503Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone601Layer) {
          markerClusters.addLayer(pointSubZone601);
          syncSidebar();
          // zone601Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone602Layer) {
          markerClusters.addLayer(pointSubZone602);
          syncSidebar();
          // zone602Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone701Layer) {
          markerClusters.addLayer(pointSubZone701);
          syncSidebar();
          // zone701Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone702Layer) {
          markerClusters.addLayer(pointSubZone702);
          syncSidebar();
          // zone702Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone801Layer) {
          markerClusters.addLayer(pointSubZone801);
          syncSidebar();
          // zone801Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone802Layer) {
          markerClusters.addLayer(pointSubZone802);
          syncSidebar();
          // zone802Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone901Layer) {
          markerClusters.addLayer(pointSubZone901);
          syncSidebar();
          // zone901Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone902Layer) {
          markerClusters.addLayer(pointSubZone902);
          syncSidebar();
          // zone902Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone903Layer) {
          markerClusters.addLayer(pointSubZone903);
          syncSidebar();
          // zone903Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1001Layer) {
          markerClusters.addLayer(pointSubZone1001);
          syncSidebar();
          // zone1001Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1002Layer) {
          markerClusters.addLayer(pointSubZone1002);
          syncSidebar();
          // zone1002Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1101Layer) {
          markerClusters.addLayer(pointSubZone1101);
          syncSidebar();
          // zone1101Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1102Layer) {
          markerClusters.addLayer(pointSubZone1102);
          syncSidebar();
          // zone1102Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1103Layer) {
          markerClusters.addLayer(pointSubZone1103);
          syncSidebar();
          // zone1103Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1201Layer) {
          markerClusters.addLayer(pointSubZone1201);
          syncSidebar();
          // zone1201Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1202Layer) {
          markerClusters.addLayer(pointSubZone1202);
          syncSidebar();
          // zone1202Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1203Layer) {
          markerClusters.addLayer(pointSubZone1203);
          syncSidebar();
          // zone1203Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1204Layer) {
          markerClusters.addLayer(pointSubZone1204);
          syncSidebar();
          // zone1204Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1205Layer) {
          markerClusters.addLayer(pointSubZone1205);
          syncSidebar();
          // zone1205Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1206Layer) {
          markerClusters.addLayer(pointSubZone1206);
          syncSidebar();
          // zone1206Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1401Layer) {
          markerClusters.addLayer(pointSubZone1401);
          syncSidebar();
          // zone1401Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1402Layer) {
          markerClusters.addLayer(pointSubZone1402);
          syncSidebar();
          // zone1402Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1501Layer) {
          markerClusters.addLayer(pointSubZone1501);
          syncSidebar();
          // zone1501Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1502Layer) {
          markerClusters.addLayer(pointSubZone1502);
          syncSidebar();
          // zone1502Lable.addData(pointAll);
        }
        if (e.layer === PointSubZone1503Layer) {
          markerClusters.addLayer(pointSubZone1503);
          syncSidebar();
          // zone1503Lable.addData(pointAll);
        }
      });

      mapRef.current.on('overlayremove', (e: any) => {
        if (e.layer === PointSubZone101Layer) {
          markerClusters.removeLayer(pointSubZone101);
          syncSidebar();
        }
        if (e.layer === PointSubZone102Layer) {
          markerClusters.removeLayer(pointSubZone102);
          syncSidebar();
        }
        if (e.layer === PointSubZone103Layer) {
          markerClusters.removeLayer(pointSubZone103);
          syncSidebar();
        }
        if (e.layer === PointSubZone201Layer) {
          markerClusters.removeLayer(pointSubZone201);
          syncSidebar();
          // zone201Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone202Layer) {
          markerClusters.removeLayer(pointSubZone202);
          syncSidebar();
          // zone202Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone301Layer) {
          markerClusters.removeLayer(pointSubZone301);
          syncSidebar();
          // zone301Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone302Layer) {
          markerClusters.removeLayer(pointSubZone302);
          syncSidebar();
          // zone302Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone401Layer) {
          markerClusters.removeLayer(pointSubZone401);
          syncSidebar();
          // zone401Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone402Layer) {
          markerClusters.removeLayer(pointSubZone402);
          syncSidebar();
          // zone402Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone501Layer) {
          markerClusters.removeLayer(pointSubZone501);
          syncSidebar();
          // zone501Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone502Layer) {
          markerClusters.removeLayer(pointSubZone502);
          syncSidebar();
          // zone502Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone503Layer) {
          markerClusters.removeLayer(pointSubZone503);
          syncSidebar();
          // zone503Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone601Layer) {
          markerClusters.removeLayer(pointSubZone601);
          syncSidebar();
          // zone601Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone602Layer) {
          markerClusters.removeLayer(pointSubZone602);
          syncSidebar();
          // zone602Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone701Layer) {
          markerClusters.removeLayer(pointSubZone701);
          syncSidebar();
          // zone701Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone702Layer) {
          markerClusters.removeLayer(pointSubZone702);
          syncSidebar();
          // zone702Lable.removeData(pointAll);
        }
        if (e.layer === PointSubZone801Layer) {
          markerClusters.removeLayer(pointSubZone801);
          syncSidebar();
          // zone801Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone802Layer) {
          markerClusters.removeLayer(pointSubZone802);
          syncSidebar();
          // zone802Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone901Layer) {
          markerClusters.removeLayer(pointSubZone901);
          syncSidebar();
          // zone901Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone902Layer) {
          markerClusters.removeLayer(pointSubZone902);
          syncSidebar();
          // zone902Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone903Layer) {
          markerClusters.removeLayer(pointSubZone903);
          syncSidebar();
          // zone903Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1001Layer) {
          markerClusters.removeLayer(pointSubZone1001);
          syncSidebar();
          // zone1001Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1002Layer) {
          markerClusters.removeLayer(pointSubZone1002);
          syncSidebar();
          // zone1002Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1101Layer) {
          markerClusters.removeLayer(pointSubZone1101);
          syncSidebar();
          // zone1101Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1102Layer) {
          markerClusters.removeLayer(pointSubZone1102);
          syncSidebar();
          // zone1102Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1103Layer) {
          markerClusters.removeLayer(pointSubZone1103);
          syncSidebar();
          // zone1103Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1201Layer) {
          markerClusters.removeLayer(pointSubZone1201);
          syncSidebar();
          // zone1201Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1202Layer) {
          markerClusters.removeLayer(pointSubZone1202);
          syncSidebar();
          // zone1202Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1203Layer) {
          markerClusters.removeLayer(pointSubZone1203);
          syncSidebar();
          // zone1203Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1204Layer) {
          markerClusters.removeLayer(pointSubZone1204);
          syncSidebar();
          // zone1204Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1205Layer) {
          markerClusters.removeLayer(pointSubZone1205);
          syncSidebar();
          // zone1205Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1206Layer) {
          markerClusters.removeLayer(pointSubZone1206);
          syncSidebar();
          // zone1206Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1401Layer) {
          markerClusters.removeLayer(pointSubZone1401);
          syncSidebar();
          // zone1401Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1402Layer) {
          markerClusters.removeLayer(pointSubZone1402);
          syncSidebar();
          // zone1402Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1501Layer) {
          markerClusters.removeLayer(pointSubZone1501);
          syncSidebar();
          // zone1501Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1502Layer) {
          markerClusters.removeLayer(pointSubZone1502);
          syncSidebar();
          // zone1502Lable.removeLayer(pointAll);
        }
        if (e.layer === PointSubZone1503Layer) {
          markerClusters.removeLayer(pointSubZone1503);
          syncSidebar();
          // zone1503Lable.removeLayer(pointAll);
        }
      });

      /* Filter sidebar feature list to only show features in current map bounds */
      mapRef.current.on('moveend', (_e: any) => {});
    }
    mapRef.current.on('click', (_e: any) => {
      highlight.clearLayers();
    });
  }, []);

  // eslint-disable-next-line no-console

  return (
    <>
      <div id='map' className='crosshairs' style={style} />
      {sidebarAdd === true ? <Sidebar /> : ''}
    </>
  );
};

export default Maps;
