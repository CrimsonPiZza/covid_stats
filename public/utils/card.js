function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function createCard(countryCode,title,newConfirmed,newDeaths,newRecovered){

    // Main Row
    const row = document.getElementById("mainRow")

    // Main Grid
    const grid = document.createElement("div")
        // Set Class
        grid.setAttribute("class","info-card mb-3 col-12 col-sm-6 col-lg-4 col-xl-3")
        

    // Main Card
    const card = document.createElement("div")
        // Set Style
        card.setAttribute("style","width: 18rem;")
        // Set Class
        card.setAttribute("Class","card bg-dark mx-auto animated bounceInUp")


    // Image
    const img = document.createElement("img")
        // Set img src
        img.setAttribute("src","https://www.ippf.org/sites/default/files/styles/featured_image_crop_sm/public/2020-03/Screen%20Shot%202020-03-27%20at%2013.30.48.png?h=d6a8c78b&itok=Gme6cxV5")
        // Set class
        img.setAttribute("class","card-img-top")
    

    // Main Card's Body
    const cardBody = document.createElement("div")
        // Set Class
        cardBody.setAttribute("class","card-body")


    // Starting Information
    
    // Title
    const e_title = document.createElement("h5")
        // Set Class
        e_title.setAttribute("class","card-title text-warning")
        // Set Text
        e_title.innerText = title

    // New Confirmed
    const e_newConfirmed = document.createElement("p")
        // Set Class
        e_newConfirmed.setAttribute("class","card-text text-white")
        // Set HTML
        e_newConfirmed.innerHTML = `New Confirmed : <span class="text-info font-weight-bold">${numberWithCommas(newConfirmed)}</span>` 

    // New Deaths
    const e_newDeaths = document.createElement("p")
        // Set Class
        e_newDeaths.setAttribute("class","card-text text-white")
        // Set HTML
        e_newDeaths.innerHTML = `New Deaths : <span class="text-info font-weight-bold">${numberWithCommas(newDeaths)}</span>` 

    // New Deaths
    const e_newRecovered = document.createElement("p")
        // Set Class
        e_newRecovered.setAttribute("class","card-text text-white")
        // Set HTML
        e_newRecovered.innerHTML = `New Recovered : <span class="text-info font-weight-bold">${numberWithCommas(newRecovered)}</span>` 

    // View Full Report
    const viewFullReport = document.createElement("div")
        // Set atrribute of div
        viewFullReport.setAttribute("class","text-right")
        viewFullReport.innerHTML = `
        <button onclick="embedData('${countryCode}')" type="button" class="btn btn-sm btn-outline-info waves-effect font-weight-bold" data-toggle="modal" data-target="#centralModalWarning">
            Full Report <i class="text-right fas fa-arrow-right animated rotateIn"></i>
        </button>
        `

    // Primary Appending
        // Append Card's Body
        cardBody.appendChild(e_title)
        cardBody.appendChild(e_newConfirmed)
        cardBody.appendChild(e_newDeaths)
        cardBody.appendChild(e_newRecovered)
        cardBody.appendChild(viewFullReport)

        // Append Card
        card.appendChild(img)
        card.appendChild(cardBody)

        // Append Grid
        grid.appendChild(card)

        // Append to Row
        row.appendChild(grid)


}
