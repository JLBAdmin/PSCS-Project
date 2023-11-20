/* eslint-disable tailwindcss/no-custom-classname */
import 'leaflet-sidebar-v2/css/leaflet-sidebar.css';
import 'leaflet.control.layers.tree/L.Control.Layers.Tree.css';

// eslint-disable-next-line import/no-cycle

export const Sidebar = () => {
  return (
    <div id='sidebar' className='leaflet-sidebar collapsed'>
      <div className='leaflet-sidebar-tabs'>
        <ul role='tablist'>
          <li>
            <a href='#home' role='tab'>
              <i className='fa fa-bars active'></i>
            </a>
          </li>
          <li>
            <a href='#autopan' role='tab'>
              <i
                className='fa fa-users'
                aria-hidden='true'
                style={{ color: 'red' }}
              ></i>
            </a>
          </li>
          <li>
            <a href='#layers' role='tab'>
              <i className='fa fa-sliders'></i>
            </a>
          </li>
          <li>
            <a href='#water' role='tab'>
              <i
                className='fa fa-tint'
                aria-hidden='true'
                style={{ color: 'blue' }}
              ></i>
            </a>
          </li>

          <li>
            <a href='#cutter' role='tab'>
              <i
                className='fa fa-truck'
                aria-hidden='true'
                style={{ color: 'green' }}
              ></i>
            </a>
          </li>
        </ul>

        <ul role='tablist'>
          <li>
            <a href='https://github.com/nickpeihl/leaflet-sidebar-v2'>
              <i className='fa fa-github'></i>
            </a>
          </li>
        </ul>
      </div>

      <div className='leaflet-sidebar-content'>
        <div className='leaflet-sidebar-pane' id='home'>
          <h1 className='leaflet-sidebar-header'>
            PS MAP Area
            <span className='leaflet-sidebar-close'>
              <i className='fa fa-caret-left'></i>
            </span>
          </h1>

          <p>
            ข้อมูลที่นำมาแสดงผล รวบรวมมาจากระบบ MCSS{' '}
            <a href='https://leafletjs.com/'>Leaflet</a>.
          </p>
          <p>Compatible with version 0.7 and 1.x (tested up to 1.6.0)</p>
          <p>
            <b>Select the other panes for a showcase of each feature.</b>
          </p>

          <h2>More examples</h2>
          <ul>
            <li>
              <a href='./position-right.html'>Right aligned</a>
            </li>
            <li>
              <a href='./halfheight.html'>
                The sidebar adapts to map container size
              </a>
            </li>
            <li>
              <a href='./leaflet-latest.html'>
                Proof that it works with the latest leaflet version (if not,
                please report it!)
              </a>
            </li>
            <li>
              <a href='./leaflet-0.7.html'>
                Proof that it works with leaflet 0.7
              </a>
            </li>
          </ul>

          <p className='lorem'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p className='lorem'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p className='lorem'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
          <p className='lorem'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className='leaflet-sidebar-pane' id='autopan'>
          <h1 className='leaflet-sidebar-header'>
            โควตา
            <span className='leaflet-sidebar-close'>
              <i className='fa fa-caret-left'></i>
            </span>
          </h1>
          <div className='sidebar-wrapper'>
            <div className='panel panel-default' id='features'>
              <div className='panel-body'>
                <div className='row'>
                  <div className='col-xs-8 col-md-8'>
                    <input
                      type='text'
                      className='form-control search'
                      placeholder='Filter'
                    />
                  </div>
                  <div className='col-xs-4 col-md-4'>
                    <button
                      type='button'
                      className='btn btn-primary pull-right sort'
                      data-sort='feature-name'
                      id='sort-btn'
                    >
                      <i className='fa fa-sort'></i>&nbsp;&nbsp;Sort
                    </button>
                  </div>
                </div>
              </div>
              <div className='sidebar-table'>
                <table className='table-hover table' id='feature-list'>
                  <tbody className='list'></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='leaflet-sidebar-pane' id='layers'>
          <h1 className='leaflet-sidebar-header'>
            Layers
            <span className='leaflet-sidebar-close'>
              <i className='fa fa-caret-left'></i>
            </span>
          </h1>
        </div>

        <div className='leaflet-sidebar-pane' id='water'>
          <h1 className='leaflet-sidebar-header'>
            ปริมาณน้ำฝน
            <span className='leaflet-sidebar-close'>
              <i className='fa fa-caret-left'></i>
            </span>
          </h1>
        </div>

        <div className='leaflet-sidebar-pane' id='cutter'>
          <h1 className='leaflet-sidebar-header'>
            รถตัดอ้อยโรงงาน
            <span className='leaflet-sidebar-close'>
              <i className='fa fa-caret-left'></i>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

// export function syncSidebar() {
//   /* Empty sidebar features */
//   $('#feature-list tbody').empty();
//   /* Loop through master layer and add only features which are in the map bounds */
//   pointSubZone101.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     // eslint-disable-next-line no-console
//     if (map.hasLayer(PointSubZone101Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone101Lable);
//     // } else {
//     //   map.removeLayer(zone101Lable);
//     // }
//   });

//   pointSubZone102.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone102Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone102Lable);
//     // } else {
//     //   map.removeLayer(zone102Lable);
//     // }
//   });

//   pointSubZone103.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone103Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone103Lable);
//     // } else {
//     //   map.removeLayer(zone103Lable);
//     // }
//   });

//   pointSubZone201.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone201Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone201Lable);
//     // } else {
//     //   map.removeLayer(zone201Lable);
//     // }
//   });

//   pointSubZone202.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone202Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone202Lable);
//     // } else {
//     //   map.removeLayer(zone202Lable);
//     // }
//   });

//   pointSubZone301.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone301Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone301Lable);
//     // } else {
//     //   map.removeLayer(zone301Lable);
//     // }
//   });

//   pointSubZone302.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone302Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone302Lable);
//     // } else {
//     //   map.removeLayer(zone302Lable);
//     // }
//   });

//   pointSubZone401.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone401Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone401Lable);
//     // } else {
//     //   map.removeLayer(zone401Lable);
//     // }
//   });

//   pointSubZone402.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone402Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone402Lable);
//     // } else {
//     //   map.removeLayer(zone402Lable);
//     // }
//   });

//   pointSubZone501.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone501Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone501Lable);
//     // } else {
//     //   map.removeLayer(zone501Lable);
//     // }
//   });

//   pointSubZone502.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone502Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone502Lable);
//     // } else {
//     //   map.removeLayer(zone502Lable);
//     // }
//   });

//   pointSubZone503.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone503Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//     // if (map.getZoom() > 16) {
//     //   map.addLayer(zone503Lable);
//     // } else {
//     //   map.removeLayer(zone503Lable);
//     // }
//   });

//   pointSubZone601.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone601Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone602.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone602Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone701.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone701Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone702.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone702Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone801.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone801Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone802.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone802Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone901.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone901Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone902.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone902Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone903.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone903Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1001.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1001Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1002.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1002Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1101.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1101Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1102.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1102Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1103.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1103Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1201.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1201Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1202.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1202Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1203.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1203Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1204.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1204Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1205.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1205Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1206.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1206Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1401.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1401Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1402.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1402Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1501.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1501Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_11.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1502.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1502Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_12.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });

//   pointSubZone1503.eachLayer((layer: any) => {
//     const x = Math.floor(Math.random() * 10 + 1);
//     if (map.hasLayer(PointSubZone1503Layer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $('#feature-list tbody').append(
//           `<tr class='feature-row' id=${L.stamp(layer)} lat=${
//             layer.getLatLng().lat
//           } lng=${
//             layer.getLatLng().lng
//           }><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/images/mapiconscollection-numbers-0b79b8-iphone/number_13.png"></td><td style="vertical-align: middle;"><img width="28" height="28" src="/assets/img/${`${x}.png`}"></td><td class="feature-name">${
//             layer.feature.properties.isFullName
//           }</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>`
//         );
//       }
//     }
//   });
// }
