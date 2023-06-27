
ham.addEventListener('click', () => {
    ham.classList.toggle('x');
    nav.classList.toggle('open');
});

mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cnljYSIsImEiOiJjazd6eGFxajEwOW5rM2RydW5rb3pzcmtiIn0.eFkGZsTPafVGw_E9bXI8aA';

let gps = [14.439972261923986, 50.078594071059776];

let map = new mapboxgl.Map({
    container: 'studio',
    center: gps,
    zoom: 15,
    style: 'mapbox://style/mapbox/dark-v10'
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

let elm = document.createElement('div');
elm.className = 'pin';

let html = '<div class="popup">My Studio is Here</div>';

let popup = new mapboxgl.Popup().setHTML(html);

new mapboxgl.Marker({
    element: elm,
    anchor: 'bottom'
}).setLngLat(gps).addTo(map).setPopup(popup);

form.addEventListener('submit', (evnt) => {
    evnt.preventDefault();
    console.log(email.value, sender.value, message.value);
    form.reset();
    form.classList.remove('validate');
    response.style.display = 'flex';
    setTimeout(() => {
        response.style.display = 'none';
    }, 5000);
});

btnsubmit.addEventListener('click', () => {
    form.classList.add('validate');
});

btnreset.addEventListener('click', () => {
    form.classList.remove('validate');
});