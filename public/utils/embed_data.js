function pushToDom(title,newConfirmed,newDeaths,newRecovered,totalConfirmed,totalDeaths,totalRecovered){
    const e_title = document.getElementById("statistic_Title")
    const e_newConfirmed = document.getElementById("statistic_NewConfirmed")
    const e_newDeaths = document.getElementById("statistic_NewDeaths")
    const e_newRecovered = document.getElementById("statistic_NewRecovered")
    const e_totalConfirmed = document.getElementById("statistic_TotalConfirmed")
    const e_totalDeaths = document.getElementById("statistic_TotalDeaths")
    const e_totalRecovered = document.getElementById("statistic_TotalRecovered")

    e_title.innerText = title
    e_newConfirmed.innerText = newConfirmed
    e_newDeaths.innerText = newDeaths
    e_newRecovered.innerText = newRecovered
    e_totalConfirmed.innerText = totalConfirmed
    e_totalDeaths.innerText = totalDeaths
    e_totalRecovered.innerText = totalRecovered

}

function emb(countryCode,global,allCountries){
    if (countryCode == 'GLOBAL'){
        pushToDom(
            "Global",
            global.NewConfirmed,
            global.NewDeaths,
            global.NewRecovered,
            global.TotalConfirmed,
            global.TotalDeaths,
            global.TotalRecovered
        );    
    }else{
        const selectedCountry = allCountries.filter((c) => c.CountryCode == countryCode)[0]
        console.log(selectedCountry)
        pushToDom(
            selectedCountry.Country,
            selectedCountry.NewConfirmed,
            selectedCountry.NewDeaths,
            selectedCountry.NewRecovered,
            selectedCountry.TotalConfirmed,
            selectedCountry.TotalDeaths,
            selectedCountry.TotalRecovered
        );
    }
}

