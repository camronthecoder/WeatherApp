const apiKey = 'ec749bc08c9eee36509c1fc6503ddf2e'
countryCode = 'us'
getWeather = () =>{
    zipCode= document.getElementById('userZipCode').value
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}`
//step 1
    let xhr = new XMLHttpRequest()
//step 2
    xhr.open('GET',url)
//step 3
    xhr.send()
//step 4 
    xhr.onload=()=>{
        jsonData = JSON.parse(xhr.responseText)
        console.log("parsed",jsonData)
        const K = parseInt(jsonData.main.temp)
        const F = (1.8*(K - 273) + 32)
        const description = jsonData.weather[0].description
        const icon = jsonData.weather[0].icon
        const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
        document.getElementById("wicon").src = iconurl
        const cityName = jsonData.name
        const output = `The Weather for ${cityName} is ${F} degrees and ${description}.`
        document.getElementById("main").innerText= output
    }
    }
