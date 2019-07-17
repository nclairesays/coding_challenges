const { getDataID, getDealerInfo, getVehicleIDs, getVehicleInfo } = require('./requests-get')
const  { postAnswers } = require('./requests-post')

const render = async () => {
    try {
        let dealers = {}
        const datasetId = await getDataID()
        console.log("DATASETID: ", datasetId)
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

        console.log(error)
    }
}

// const renderOnPage = (datasetId, data) => {
// 	document.querySelector('#answer').innerHTML = `DatasetId:${datasetId} <br><br>` + JSON.stringify({ dealers: data });
// };

const vehicleObject = ({ vehicleId, year, make, model }) => ({
	vehicleId: vehicleId,
	year: year,
	make: make,
	model: model,
});


render()