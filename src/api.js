export async function getWeather(city) {
    const weatherResponse = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=92907d7c8e1c4131be982745243101&q=${city}`
    ).catch((err) => {
      console.error("Cannot fetch weather: ", err);
    });
  
    const jsonResponse = await weatherResponse.json();
    return jsonResponse.current.temp_c;
}