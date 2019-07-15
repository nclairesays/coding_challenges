const api = 'http://api.coxauto-interview.com/api'

const getDataID = async () => {
    return await fetch(`${api}/datasetId`)
    .then(res => res.json())
    .then(res => res.datasetId)
}

const getVehicleIDs = async (datasetId) => {
    return await fetch(`${api}/${datasetId}/vehicles`)
    .then(res => res.json())
    .then(res => res.vehicleIds)
}

const getVehicleInfo = async (datasetId, vehicleIds) => {
    return await fetch(`${api}/${datasetId}/vehicles/${vehicleIds}`)
    .then(res => res.json())
}

const getDealerInfo = async (datasetId, dealerId) => {
    return await fetch(`${api}/${datasetId}/dealers/${dealerId}`)
    .then(res => res.json())
    .then(res => res.name)
}

const postAnswers = async (datasetId, dealers) => {
    const data = []
    for (let dealer in dealers) {
        data.push(dealers[dealer])
    }

    console.log("ANSWER/PAYLOAD:", JSON.stringify({"dealers": data }))
    renderOnPage(datasetId, data)

    return await fetch(`${api}/${datasetId}/answer`, {
        method: "POST",
        // I'm currently getting CORS errors; error suggested that I add mode: no-cors. When I do, it then gives me a Media Type error. Commenting out mode for now...
        // mode: "no-cors", 
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
        },
        body: JSON.stringify({ "dealers": data })
    })
    .then(res => res.json())    
    // POST RESPONSE LOGGED: 
    .then(res => console.log("POST RESPONSE: ", res))
}

const renderOnPage = (datasetId, data) => { document.querySelector('#answer').innerHTML = `DatasetId:${datasetId} <br><br>` + JSON.stringify({"dealers": data}) }

const vehicleObject = ({vehicleId, year, make, model}) => ({
    "vehicleId": vehicleId,
    "year": year,
    "make": make,
    "model": model
})

const render = async () => {
    try {
        let dealers = {}
        const datasetId = await getDataID()
        console.log("datasetId", datasetId)
        const vehicleIds = await getVehicleIDs(datasetId)
        await Promise.all(
            vehicleIds.map( async vehicleID => {
                await getVehicleInfo(datasetId, vehicleID)
                .then( async res => {
                    const { dealerId } = res
                    const dealerName = await getDealerInfo(datasetId, dealerId)
                    if (dealers[dealerId]) {
                        dealers[dealerId].vehicles.push(vehicleObject(res))
                    } else {
                        dealers[dealerId] = {
                            dealerId: dealerId,
                            name: dealerName,
                            vehicles: [vehicleObject(res)]
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

render()