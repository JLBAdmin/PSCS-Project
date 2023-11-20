export const legend = new L.Control({ position: 'topright' });
legend.onAdd = () => {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML += '<h4>ปริมาณน้ำฝน</h4>';
  div.innerHTML +=
    '<i style="background: #477AC2"></i><span>เขต 1 วันนี้ 1222 สะสม 5555</span><br>';
  div.innerHTML += '<i style="background: #448D40"></i><span>เขต 2</span><br>';
  div.innerHTML += '<i style="background: #E6E696"></i><span>เขต 3</span><br>';
  div.innerHTML +=
    '<i style="background: #E8E6E0"></i><span>Residential</span><br>';
  div.innerHTML +=
    '<i style="background: #FFFFFF"></i><span><a>Ice</a></span><br>';
  div.innerHTML +=
    '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';

  return div;
};

export const legend1 = new L.Control({ position: 'topright' });
legend.onAdd = () => {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML += '<h4>ปริมาณน้ำฝน</h4>';
  div.innerHTML +=
    '<i style="background: #477AC2"></i><span>เขต 1 วันนี้ 1222 สะสม 5555</span><br>';
  div.innerHTML += '<i style="background: #448D40"></i><span>เขต 2</span><br>';
  div.innerHTML += '<i style="background: #E6E696"></i><span>เขต 3</span><br>';
  div.innerHTML +=
    '<i style="background: #E8E6E0"></i><span>Residential</span><br>';
  div.innerHTML +=
    '<i style="background: #FFFFFF"></i><span><a>Ice</a></span><br>';
  div.innerHTML +=
    '<i class="icon" style="background-image: url(https://d30y9cdsu7xlg0.cloudfront.net/png/194515-200.png);background-repeat: no-repeat;"></i><span>Grænse</span><br>';

  return div;
};
