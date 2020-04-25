
// Card Generation

async function generateAllCard(){
    // Get summary from summary.js
    let summary = await getSummary()

    // Global Summary
    let global = summary.Global
    // Create Card for global
    createCard("Global",global.NewConfirmed,global.NewDeaths,global.NewRecovered)

    // All Countries
    let allCountries = summary.Countries
    // Create Card for all countries
    allCountries.forEach((country) => {
        createCard(country.Country,country.NewConfirmed,country.NewDeaths,country.NewRecovered)
    })
}

generateAllCard()

// End of Card Generation

// Custom Search Function

const searchBox = document.forms['searchByCountry'].querySelector('input')
searchBox.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase()
    const allCard = document.getElementsByClassName('info-card')
    // console.log(allCard)

    Array.from(allCard).forEach( (card) => {
        console.log(card)
        const country = card.firstElementChild.querySelector("h5").textContent
        if (country.toLowerCase().replace(" ","").indexOf(term) != -1 ){
            card.setAttribute("class","info-card mb-3 col-12 col-sm-6 col-lg-4 col-xl-3")
        }else{
            card.setAttribute("class","info-card mb-3 col-12 col-sm-6 col-lg-4 col-xl-3 d-none")
        }
    } )
})

// End of Custom Search Function