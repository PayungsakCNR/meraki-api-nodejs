const fetch = require('node-fetch');
const url = "https://api.meraki.com/api/v0/organizations/<your-Organization-ID>/admins";
const apiSecret = '<Your-API-Key>';

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
	for(var i = 0; i < data.length; i++){
		if(data[i].name === 'My Name'){
			console.log('Name: ' + data[i].name);
			console.log('Email: ' + data[i].email);
			console.log('Last Active: ' + data[i].lastActive);
			console.log('Organizations Access: ' + data[i].orgAccess);
		}
    }
}


