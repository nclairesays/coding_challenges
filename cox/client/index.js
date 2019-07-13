const api = 'http://api.coxauto-interview.com/api'

const fetchDataID = async () => {
    return await fetch(`${api}/datasetId`)
    .then(res => res.json())
    .then(res => res.datasetId)
}


// GET /api/{datasetId}/vehicles  |  Get a list of all vehicleids in datbase
const fetchVehicleIDs = async (datasetId) => {
    // await fetchDataID()
    return await fetch(`${api}/${datasetId}/vehicles`)
    .then(res => res.json())
    .then(res => res.vehicleIds)
}

const fetchVehicleInfo = async (datasetId, vehicleIds) => {
    return await fetch(`${api}/${datasetId}/vehicles/${vehicleIds}`)
    .then(res => res.json())
}

// GET /api/{datasetId}/dealers/{dealerid} Get information about a dealer
const fetchDealerInfo = async (datasetId, dealerId) => {
    return await fetch(`${api}/${datasetId}/dealers/${dealerId}`)
    .then(res => res.json())
    .then(res => res.name)
}

const postAnswers = async (datasetId, dealers) => {
    // const data = dealers.
    console.log(dealers)
    return await fetch(`${api}/${datasetId}/answer`, {
        method: 'POST',
        mode: 'no-cors', // no-cors, cors, *same-origin
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dealers)
    })
}
const allTheFetches = async () => {
    try {
        let dealers = {}
        const datasetId = await fetchDataID()
        const vehicleIds = await fetchVehicleIDs(datasetId)
        await Promise.all(
            vehicleIds.map( async vehicleID => {
                await fetchVehicleInfo(datasetId, vehicleID)
                .then( async res => {
                    const { vehicleId, year, make, model, dealerId} = res
                    const dealerName = await fetchDealerInfo(datasetId, dealerId)
                    if (dealers[dealerId]) {
                        dealers[dealerId].vehicles.push({
                        "vehicleId": vehicleId,
                        "year": year,
                        "make": make,
                        "model": model
                        })
                    } else {
                        dealers[dealerId] = {
                            dealerId: dealerId,
                            name: dealerName,
                            vehicles: [{
                                "vehicleId": vehicleId,
                                "year": year,
                                "make": make,
                                "model": model
                            }]
                        }
                    }
                })
            }
        ))
        await postAnswers(datasetId, dealers)
    }
    catch (error) {
        console.log(error.message)
    }
}
allTheFetches()





  // .then(res => {   
        //     return dealers[res.dealerId] = res
        // })
        // .then( res => console.log(dealers))
        // .then(res => {
        //     console.log(res)
        //     return dealersSet.add(res.dealerId)
        // })
        // .then( res => console.log(dealers))
        // .then(res => fetchDealerInfo(datasetId, res.dealerId))
        // .then(res => console.log("FETCHED DEALER, Dataset: ", datasetId, "DEALER", res) )


        
        // const getDealers

        // const check = () => {
        //     if(dealers.datasetId)
        // }

        // fetch('http://api.coxauto-interview.com/api/4-h8emQH1wg/dealers/1577899834')
        // .then(res => res.json()).then(res => console.log(res))

        // "dealers": [
            //       {
            //         "dealerId": 1279401307,
            //         "name": "Bob's Cars",
            //   dealers": [
            //           {
            //             "vehicleId": 72059268,
            //             "year": 2016,
            //             "make": "Honda",
            //             "model": "Accord"
            //           },


        // await console.log("INFO", vehicleInfo)

        // return await vehicleIds 




// "vehicleId": 0,
//     "year": 0,
//     "make": "string",
//     "model": "string",
//     "dealerId": 0



// {
//     "dealers": [
//       {
//         "dealerId": 1279401307,
//         "name": "Bob's Cars",
//   dealers": [
//           {
//             "vehicleId": 72059268,
//             "year": 2016,
//             "make": "Honda",
//             "model": "Accord"
//           },
//           {
//             "vehicleId": 841872961,
//             "year": 2014,
//             "make": "Ford",
//             "model": "F150"
//           },
//           {
//             "vehicleId": 722905753,
//             "year": 2004,
//             "make": "MINI",
//             "model": "Cooper"
//           }
//         ]
//       },
//       {
//         "dealerId": 608903662,
//         "name": "House of Wheels",
//         "vehicles": [
//           {
//             "vehicleId": 1911234494,
//             "year": 2013,
//             "make": "Mitsubishi",
//             "model": "Gallant"
//           },
//           {
//             "vehicleId": 386858413,
//             "year": 2009,
//             "make": "Ford",
//             "model": "F150"
//           },
//           {
//             "vehicleId": 60320518,
//             "year": 2016,
//             "make": "Kia",
//             "model": "Soul"
//           }
//         ]
//       },
//       {
//         "dealerId": 575943453,
//         "name": "Doug's Doozies",
//         "vehicles": [
//           {
//             "vehicleId": 1182728774,
//             "year": 2016,
//             "make": "Bentley",
//             "model": "Mulsanne"
//           },
//           {
//             "vehicleId": 1676468526,
//             "year": 2012,
//             "make": "Nissan",
//             "model": "Altima"
//           },
//           {
//             "vehicleId": 105937686,
//             "year": 1979,
//             "make": "Cheverolet",
//             "model": "Corvette"
//           }
//         ]
//       }
//     ]
//   }
//   Response Code
//   200
//   Response Headers