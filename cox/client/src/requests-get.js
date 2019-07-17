const fetch = require('node-fetch');

const { api } = require('./constants')

const getDataID = async () => {
	return await fetch(`${api}/datasetId`)
		.then(res => res.json())
		.then(res => res.datasetId);
};

const getVehicleIDs = async datasetId => {
	return await fetch(`${api}/${datasetId}/vehicles`)
		.then(res => res.json())
		.then(res => res.vehicleIds);
};

const getVehicleInfo = async (datasetId, vehicleIds) => {
	return await fetch(`${api}/${datasetId}/vehicles/${vehicleIds}`).then(res => res.json());
};

const getDealerInfo = async (datasetId, dealerId) => {
	return await fetch(`${api}/${datasetId}/dealers/${dealerId}`)
		.then(res => res.json())
		.then(res => res.name);
};

module.exports = {
	api, getDataID, getDealerInfo, getVehicleIDs, getVehicleInfo
}