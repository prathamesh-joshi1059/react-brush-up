import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const apiKey = "059232e6a6eb36f1f4b399e3";
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;