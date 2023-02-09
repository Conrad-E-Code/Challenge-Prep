//
//
// iterate through populations and find highest amount
//assign that obj to a variable
//take that variable and get the .city_id
//search for a 



// iterate through countries
// get id forom country






//iterate through cities to get country and make a list of country/ citys

// make array of cities for each country.

// iterate through populations and assign to cities.concat

// sum up the cities population for each country_id

// then find the biggest sum and return country and pop


const populations = [
      { id: 1, city_id: 3, amount: 3960000 },
      { id: 2, city_id: 8, amount: 11920000 },
      { id: 3, city_id: 2, amount: 8240000 }
    ];
const cities = [
  { id: 3, country_id: 1, name: 'Los Angeles' },
  { id: 8, country_id: 3, name: 'Moscow' },
  { id: 2, country_id: 1, name: 'Seattle' }
];
const countries = [
  { id: 3, name: 'Russia' },
  { id: 1, name: 'USA' },
];

function largestCountry()  {
    let outputCountry = {
        name: "",
        population: 0
}
countries.forEach((country) => {
    let countryPop = 0
    cities.forEach((city) => {
        if (city.country_id === country.id)
        {
            populations.forEach((pop)=>{
                if (pop.city_id === city.id)
                {
                    countryPop += pop.amount
                }

            })
        }
    })
    if (countryPop > outputCountry.population)
    {
        outputCountry = {
            "name": country.name,
            "population": countryPop
        }
    }
})
console.log(outputCountry)
return outputCountry
}
largestCountry()
// let citiesWithCountry = []
    // cities.forEach((city) => {
// let citiesWithCountry = []
//     // })
//     countries.forEach((country) => {
//     cities.forEach((city) => {
//         if (city.country_id === country.id) {
//             citiesWithCountry.push({"city":city,
//             "country": country})
//         }

//     }) 
// })
// console.log(citiesWithCountry)
// testArr = []
// populations.forEach((pop)=> {
//     let city = cities.find((city)=>{
//         city.id === pop.city_id
//     })
//     console.log(city)
//     let country = countries.find((country) => {
        
//         // country.id === city.country_id
//     })
//     // testArr.push({
//     //     "country_id":country.id,
//     //     "population_amount": pop.amount
//     // })
// })

