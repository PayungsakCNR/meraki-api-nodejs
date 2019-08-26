/* Show All Device */

const fetch = require('node-fetch');
const url = "https://api.meraki.com/api/v0/organizations/<Your-Organization-ID>/devices";
const apiSecret = '<Your-API-Secret>';

fetch(url, {
        method: 'GET',
        headers: { 
        	'Content-Type': 'application/json',
        	'X-Cisco-Meraki-API-Key' : apiSecret 
        },
    })
    .then(res => res.json())
    .then(json => printData(json))
    .catch(err => console.log(err));

printData = (data) => {
	console.log("ALL DEVICES:" + '\n');
	for(var i = 0; i < data.length; i++){
		console.log("Device" + (i + 1)  + ": ");
		console.log("Name: " + data[i].name);
		console.log("Model: " + data[i].model);
		console.log("Lan IP: " + data[i].lanIp);
		console.log("**************************");
	}
}


