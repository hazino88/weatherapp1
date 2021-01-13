const key = '5b16a781acdf685fcce1468d2d2b1719';

// const baseURL = 'http://api.lopenweathermap.org/data/2.5/weather?q=Lahore&appid=5b16a781acdf685fcce1468d2d2b171';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
