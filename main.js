const apiKey = '<script src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap" async defer></script>'

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);