 // Initialize the map and set its view to the chosen geographical coordinates and zoom level
 const map = L.map('map').setView([22.718850, 75.888080], 15); // Replace with latitude and longitude of your location
    
 // Load and display tile layers on the map (you can use different providers for the map tiles)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Add a marker to the map
 L.marker([22.718850, 75.888080]).addTo(map) // Replace with latitude and longitude of your location
     .bindPopup('Navodayan Academy -Kuber House, Geeta Bhawan Square, Indore - 452001 (M.P)')
     .openPopup();