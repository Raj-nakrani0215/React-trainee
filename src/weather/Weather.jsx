import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Paper, InputBase, IconButton } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const WeatherCard = () => {

    const [search, setSearch] = useState('');
    const [data, setData] = useState([])
    const handleChange = (event) => {
        const value = event.target.value;
        setSearch(value);
    };

    useEffect(() => {
        const apiKey = '4fdea16a6b62e0ecc798ead97d1c4738';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${'Rajkot'}&appid=${apiKey}`;

        axios.get(url)
            .then((res) => setData(res.data));

        console.log(data)
    }, [])

    const searchCity = () => {
        if (!search) {
            alert("please search correct field");
        } else {
            console.log(search);
            const apiKey = '4fdea16a6b62e0ecc798ead97d1c4738';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`;

            axios.get(url)
                .then((res) => setData(res.data))
                .catch(error => {
                    if (error.response && error.response.status === 404) {
                      alert(search+' Not Found please Enter Correct spelling');
                    } else {
                      // Handle other types of errors
                      console.error('An error occurred:', error.message);
                    }
                  });
            console.log(data)
        }
        setSearch('');
    }

    function getWindDirection(deg) {
        if (deg >= 0 && deg < 45) return 'North';
        if (deg >= 45 && deg < 90) return 'North-East';
        if (deg >= 90 && deg < 135) return 'East';
        if (deg >= 135 && deg < 180) return 'South-East';
        if (deg >= 180 && deg < 225) return 'South';
        if (deg >= 225 && deg < 270) return 'South-West';
        if (deg >= 270 && deg < 315) return 'West';
        if (deg >= 315 && deg < 360) return 'North-West';
    }

    const { name, sys, main, wind, weather } = data;
    const country = sys?.country;
    const temp = (main?.temp - 273.15).toFixed(1);
    const description = weather && weather[0]?.description;;

    const speed = wind?.speed;
    const direction = getWindDirection(wind?.deg);
    const humidity = main?.humidity
    const feel = (main?.feels_like - 273.15).toFixed(1);
    const pressure = main?.pressure;
    const minTemp = (main?.temp_min - 273.15).toFixed(1);
    const maxTemp = (main?.temp_max - 273.15).toFixed(1);

    const sunriseTimestamp = sys?.sunrise;
    const sunsetTimestamp = sys?.sunset;

    const sunriseDate = new Date(sunriseTimestamp * 1000); // multiply by 1000 to convert from seconds to milliseconds
    const sunsetDate = new Date(sunsetTimestamp * 1000);

    const options = { hour: '2-digit', minute: '2-digit', hour12: true };

    const sunrise = sunriseDate.toLocaleTimeString('en-US', options);
    const sunset = sunsetDate.toLocaleTimeString('en-US', options);

    return (
        <Box sx={{ padding: 2, backgroundColor: '#F0F0F0', minHeight: '100vh' }}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={4} sx={{}} >
                    <Paper sx={{ padding: 2, textAlign: 'center', }}>
                        <Box display="flex" alignItems="center" justifyContent="center" sx={{ backgroundColor: '#F0F0F0', borderRadius: '15px', width: '80%', ml: '10%', mb: '20px' }}>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search City"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                value={search || ''}
                                onChange={handleChange}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={searchCity}>
                                <SearchIcon />
                            </IconButton>
                        </Box>

                        <Typography variant="h4" gutterBottom>
                            {name} ,{country}
                        </Typography>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <WbSunnyIcon fontSize="large" />
                            <Typography variant="h4" sx={{ marginLeft: 1 }}>
                                {temp} °C
                            </Typography>
                        </Box>
                        <Typography variant="h6">{description}</Typography>
                        <Typography variant="body1" color="textSecondary">
                            21-July-2023
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Friday, 12:44 PM
                        </Typography>
                        <Typography variant="body1">{data.name}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8} sx={{}}>
                    <Paper sx={{ padding: 2 }}>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item xs={6} sm={3} sx={{ backgroundColor: 'lightblue', borderRadius: '15px', my: '20px', mx: '15px' }}>
                                <Typography variant="body2">Wind</Typography>
                                <Typography variant="h6">{speed} km/h</Typography>
                                <Typography variant="body2">{direction}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ backgroundColor: 'lightblue', borderRadius: '15px', my: '20px', mx: '15px' }}>
                                <Typography variant="body2">Humidity</Typography>
                                <Typography variant="h6">{humidity}%</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ backgroundColor: 'lightblue', borderRadius: '15px', my: '20px', mx: '15px' }}>
                                <Typography variant="body2">Real Feel</Typography>
                                <Typography variant="h6">{feel}°C</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ backgroundColor: 'lightblue', borderRadius: '15px', my: '20px', mx: '15px' }}>
                                <Typography variant="body2">UV Index</Typography>
                                <Typography variant="h6">3 </Typography>
                                <Typography variant="body2">(Moderate)</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ backgroundColor: 'lightblue', borderRadius: '15px', my: '20px', mx: '15px' }}>
                                <Typography variant="body2">Pressure</Typography>
                                <Typography variant="h6">{pressure} mb</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ backgroundColor: 'lightblue', borderRadius: '15px', my: '20px', mx: '15px' }}>
                                <Typography variant="body2">Chance of Rain</Typography>
                                <Typography variant="h6">70%</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ backgroundColor: 'lightblue', borderRadius: '15px', my: '20px', mx: '15px' }}>
                                <Typography variant="body2">Temperature History</Typography>
                                <Typography variant="h6">
                                    High: {maxTemp}°C
                                </Typography>
                                <Typography variant="h6">
                                    Low: {minTemp}°C
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ backgroundColor: 'lightblue', borderRadius: '15px', my: '20px', mx: '15px' }}>
                                <Typography variant="body2">Sun</Typography>
                                <Typography variant="h6">Rise: {sunrise}</Typography>
                                <Typography variant="h6">Set: {sunset}</Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} sx={{ backgroundColor: 'lightblue', borderRadius: '15px', my: '20px', mx: '15px' }}>
                                <Typography variant="body2">Moon</Typography>
                                <Typography variant="h6">Rise: 5:17 AM</Typography>
                                <Typography variant="h6">Set: 5:17 AM</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WeatherCard;

