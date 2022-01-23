# Omegelocation

*Retrieve "stranger's" location on Omegle*

**NOTE:** Kindly use this for some education or fun gig and not for anything malicious!

## Inspiration

The whole idea of implementing something like this spawned from a YouTube video wherein the guy was shocking strangers by exposing their geo-locations. I thought this was a cool trick and thought of doing so while I stroll on Omegle myself. While at it, I didn't want to make something that would take time to load nor something which would burn a hole in my pocket while doing this. Hence I wrote a simple script which does both of these things with some help from StackOverflow.

## Recipe

This is a pure Javascript recipe for fetching location of "strangers" on Omegle. The below recipe does the bare minimum to get the job done, you can use dedicated WebRTC libraries for JS (for example: [PeerJS](https://peerjs.com/)) to enhance the inner workings of the recipe. The inner workings of the script is described in the code itself, `bootstrap.js`.

Before getting started, please ensure you create and account at [ipgeolocation](https://ipgeolocation.io/). This is a free IP Geolocation API service which provides you with the metadata with respect to the corresponding IP location. Also the service does't requires you to put in your credit card details plus the service provides your with 1000 API calls for free every month. You can use any IP geolocation tool for that matter, but this stood first in my Google search.

## Usage

- Hop on to [Omegle](https://www.omegle.com/)
- Open developer tools (depends on browser) OR Inspect element
- Navigate to the "Console" tab and paste the code from `bootstrap.js` in there (hit enter... *sigh*).
  You would need to keep the console window open for watching the stranger's location...*duh*

## Contribute

Feel free to contribute if you find this interesting... see you on [Omegle](https://www.omegle.com/).
