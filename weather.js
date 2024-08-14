const apiKey = '4fdea16a6b62e0ecc798ead97d1c4738';
const cityName = 'rajkot'; // Replace with the desired city name

const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Example: Accessing temperature data
    const temp = data.main.temp;
    console.log(`Temperature in ${cityName}: ${temp}K`);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
