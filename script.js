function getpopu() {
    const city = document.getElementById('cityInput').value;
    const WeatherDeatils = document.getElementById('res');
  
    if (city === '') {
     WeatherDeatils.innerHTML = '<p>Please enter a city name.</p>';
      return;
    }
  
    // Fetch population details
    const populationUrl = "https://countriesnow.space/api/v0.1/countries/population/cities";
    fetch(populationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: city
      })
    })
    .then(response => response.json())
    .then(populationData => {
      if (populationData.data && populationData.data.populationCounts && populationData.data.populationCounts.length > 0) {
        const populationDetails = `
          <h2>${populationData.data.citysss}</h2>
          <p>Population: ${populationData.data.populationCounts[0].value}</p>
        `;
        WeatherDeatils.innerHTML = populationDetails;
      } else {
        WeatherDeatils.innerHTML = '<p>No population data available for this city.</p>';
      }
    })
    .catch(error => {
     WeatherDeatils.innerHTML = '<p>Error fetching population data. Please try again.</p>';
    });
  }