// MENU

menu.addEventListener('click', () => {
    if (menu.textContent == 'close') {
        menu.textContent = 'menu';
    } else {
        menu.textContent = 'close';
    }
    nav.classList.toggle('open');
});

// MAP

mapboxgl.accessToken = 'pk.eyJ1IjoicGV0cnljYSIsImEiOiJjazd6eGFxajEwOW5rM2RydW5rb3pzcmtiIn0.eFkGZsTPafVGw_E9bXI8aA';

let gps = [14.439972261923986, 50.078594071059776];

let map = new mapboxgl.Map({
    container: 'mymap',
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

// FORM

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

    let isValid = (email.checkValidity() && sender.checkValidity() && message.checkValidity());

    if (!isValid) {

        const frames = [
            { transform: 'translate(0, 0)' },
            { transform: 'translate(1rem, 0)' },
            { transform: 'translate(-1rem, 0)' }
        ];

        const timing = {
            duration: 100,
            iterations: 6,
            direction: 'alternate',
            easing: 'ease-in-out'
        }

        form.animate(frames, timing);
    }

    form.classList.add('validate');
});

btnreset.addEventListener('click', () => {
    form.classList.remove('validate');
});

// GRID

const observerOptions = {
    rootMargin: '1000px 0px -200px 0px',
    threshold: 0
};

const observe = entries => entries.forEach(entry => {
    entry.target.classList.toggle('inviewport', entry.isIntersecting);
});

const obs = new IntersectionObserver(observe, observerOptions);
document.querySelectorAll('#grid div').forEach(el => obs.observe(el));