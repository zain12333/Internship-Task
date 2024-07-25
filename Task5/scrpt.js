const url = 'https://api.tomorrow.io/v4/weather/realtime?location=india&apikey=BikZ8ocSwCMLDgyA4YwrUjfAowjEV5MM'

const input = document.querySelector('input');
const button = document.querySelector('#btn');
const tempeeratureSpan = document.querySelector('#temperature');
const windSpan = document.querySelector('#wind');
const humiditySpan = document.querySelector('#humidity');
const rainSpan = document.querySelector('#rain');
const snowSpan = document.querySelector('#snow');
const cloudSpan = document.querySelector('#cloud');
const loadingSpinner = document.querySelector('#loading-spinner');




const fetchData = async () => {
    let loc = input.value;

    if (loc === '') {
        alert('Enter location first');
        input.style.border = '2px solid red';
        return; // Exit function if location is not provided
    } else {
        console.log(loc);
        input.style.border = '';
    }

    loadingSpinner.style.display = 'inline-block'; // Show loading spinner

    var customUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${loc}&apikey=BikZ8ocSwCMLDgyA4YwrUjfAowjEV5MM`;

    try {
        let response = await fetch(customUrl);
        let jsonData = await response.json(); // Wait for JSON parsing
        console.log(jsonData); // Log the entire JSON response to check its structure


        const { humidity, temperature, windSpeed, rainIntensity, snowIntensity, cloudCover} = jsonData.data.values;

        //console.log("Temperature:", temperature);
        tempeeratureSpan.innerText = temperature + 'c';

        //console.log("Wind Speed:", windSpeed);
        windSpan.innerText = windSpeed + ' km/h ';

        //console.log("Humidity:", humidity);
        humiditySpan.innerText = humidity + ' %';

        // console.log("Rain intensity: " , rainIntensity );
        if (rainIntensity > 0) {
            rainSpan.innerText = rainIntensity + ' mm';
        }else{
            rainSpan.innerText = '0 mm';
        }

        // console.log("Snow intensity: " , snowIntensity );
        if(snowIntensity > 0){
            snowSpan.innerText = snowIntensity + ' inch'
        }else{
            snowSpan.innerText = '0 inch';
        }

        // console.log("Cloud cover: " , cloudCover );
        if(cloudCover > 0){
            cloudSpan.innerText = cloudCover + ' %'
        }else{
            cloudSpan.innerText = '0 %';
        }

    } catch (error) {
        console.error('Error fetching data:', error);
        
        // Handle error, such as displaying a message to the user
    }finally{
        loadingSpinner.style.display = 'none'; // Hide loading spinner after data is fetched
    } 
    }



button.addEventListener('click' , fetchData);

