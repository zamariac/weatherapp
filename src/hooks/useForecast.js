import { useState } from "react";
import axios from 'axios';

const BASE_URL = 'https://api.meteomatics.com/2023-06-02T00:00:00Z/t_2m:C/52.520551,13.461804/html'

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    const submitRequest = location => (
        console.log({location})
    );

    return {
        isError, 
        isLoading, 
        forecast,
        submitRequest,
    };

};

export default useForecast;    