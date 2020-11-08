var lat, long;
function geolocate() {
  if (window.navigator && window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      onGeolocateSuccess,
      onGeolocateError
    );
  }
}
function onGeolocateSuccess(coordinates) {
  const { latitude, longitude } = coordinates.coords;
  lat = latitude;
  long = longitude;
  console.log("Found coordinates: ", latitude, longitude);
}

function onGeolocateError(error) {
  console.warn(error.code, error.message);

  if (error.code === 1) {
    // they said no
  } else if (error.code === 2) {
    // position unavailable
  } else if (error.code === 3) {
    // timeout
  }
}
geolocate();
var token
function Auth_token_generate() {
	$.ajax({
		data: {
			"grant_type": 'client_credentials',
			"client_id": '33OkryzDZsIY9AtT3ZDF2kAHpz2KvOrM4Izyu5gMBWn2pGQ9OSQdY-OCSoQ31Cs5bcXan1UBE3r5ZLmZIHQc2Q9x2LmmjNl3ZuMLCguLN99RSdjSazthYA==',
			"client_secret": 'lrFxI-iSEg_x7GDnSoGMTAoUK7p3y_BtWnkGZctyHQhpAFPvVxAq-iG9i8eEmuYQJy-TsgsKKpESn98QWw9B0NuCYYC2t2CdtbRuqMrQHI-LuuCCgjiQDpEVuaLQe6AT'
		},
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		}, method: 'POST',
		crossDomain: true,
		async: true,
		url: 'https://cors-anywhere.herokuapp.com/https://outpost.mapmyindia.com/api/security/oauth/token',
		error: function (data) {
			console.log(data);
			alert('An error has occurred');
		},
		success: function (data) {
			console.log(data)
			token = data.access_token;
		}
	}
	)
}
// Auth_token_generate()
function getHospital() {
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://atlas.mapmyindia.com/api/places/nearby/json?keywords=Police$station&refLocation=29.1393,76.6945`,
      {
        headers: {
          Authorization: `bearer f0141516-563d-47e6-b01c-156c830a4867`,
        },
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err.response));
}
setTimeout(() => {
  getHospital();
}, 2000);
// axios.post('https://cors-anywhere.herokuapp.com/https://outpost.mapmyindia.com/api/security/oauth/token', {
// 	"grant_type" : 'client_credentials',
// 	"client_id": '33OkryzDZsIY9AtT3ZDF2kAHpz2KvOrM4Izyu5gMBWn2pGQ9OSQdY-OCSoQ31Cs5bcXan1UBE3r5ZLmZIHQc2Q9x2LmmjNl3ZuMLCguLN99RSdjSazthYA==',
// 	"client_secret": 'lrFxI-iSEg_x7GDnSoGMTAoUK7p3y_BtWnkGZctyHQhpAFPvVxAq-iG9i8eEmuYQJy-TsgsKKpESn98QWw9B0NuCYYC2t2CdtbRuqMrQHI-LuuCCgjiQDpEVuaLQe6AT'
// }, {
// 	headers: {
// 		'Content-type': 'application/x-www-form-urlencoded'

// 	}
// })
// 	.then((res) => {
// 		console.log(res.data)
// 	})
// 	.catch(((err) => console.log(err.response)))
