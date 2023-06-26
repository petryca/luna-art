
ham.addEventListener('click', () => {
    ham.classList.toggle('x');
    nav.classList.toggle('open');
});

mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cnljYSIsImEiOiJjazd6eGFxajEwOW5rM2RydW5rb3pzcmtiIn0.eFkGZsTPafVGw_E9bXI8aA';

let map = new mapboxgl.Map({
    container: 'studio',
    center: [14.439972261923986, 50.078594071059776],
    zoom: 15,
    style: 'mapbox://style/mapbox/dark-v10'
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let elm = document.createElement('div');
elm.className = 'pin';

new mapboxgl.Marker({
    element: elm,
    anchor: 'bottom'
}).setLngLat([14.439972261923986, 50.078594071059776]).addTo(map);