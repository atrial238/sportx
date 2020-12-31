function initMap(){

	const location = {lat: 55.184986, lng:13.850078},
			options =  {
				center: location,
				zoom: 3,
				title: "Click to zoom",
				styles: [
					{
						 "featureType": "all",
						 "stylers": [
							  {
									"saturation": 0
							  },
							  {
									"hue": "#9fcfeb"
							  }
						 ]
					},
					{
						 "featureType": "road",
						 "stylers": [
							  {
									"saturation": -70
							  }
						 ]
					},
					{
						 "featureType": "transit",
						 "stylers": [
							  {
									"visibility": "off"
							  }
						 ]
					},
					{
						 "featureType": "poi",
						 "stylers": [
							  {
									"visibility": "off"
							  }
						 ]
					},
					{
						 "featureType": "water",
						 "stylers": [
							  {
									"visibility": "simplified"
							  },
							  {
									"saturation": -60
							  }
						 ]
					}
			  ]
			},
			locationMarks = [
				[67.13315829831872, 20.651644170040505],
				[59.90963724895858, 10.759728777773935],
				[52.52514143848111, 13.369403348567861],
				[41.901193885970194, 12.50115127436904],
				[40.40675956935116, -3.6895582819890094]
			],
			urlMarks = 'img/icons/mapMark.svg',
			map = new google.maps.Map(document.getElementById('map'), options);

	

	locationMarks.forEach(locationMark => {
	
		const marker = new google.maps.Marker(
			{
				position: new google.maps.LatLng(locationMark[0], locationMark[1]),
				map: map,
				title: "Click to zoom",
				icon: {
					url: urlMarks
				}
			}
		);

		marker.addListener("click", () => {
			let currentZoom = map.getZoom(),
				targetZoom = 12;
				
			let idIntervalZoom = setInterval( () => {

				if(currentZoom < targetZoom){
					map.setZoom(++currentZoom);
				}else{
					clearInterval(idIntervalZoom);
				}

			}, 80);
		
			// let targetPosition = marker.getPosition(),
			// 	targetPositionLat = targetPosition.lat(),
			// 	positionLat = '',
			// 	positionLng = '',

			// 	idIntervalMove = setInterval( () => {

			// 		positionLat = targetPosition.lat() + 0.1;
			// 		positionLng = targetPosition.lng() + 0.1;

			// 		if(positionLat >= targetPositionLat ){
			// 			map.setCenter({lat: positionLat, lng: positionLng} );
			// 		}else{
			// 			clearInterval(idIntervalMove);
			// 			map.setCenter(marker.getPosition());
			// 		}
					

			// 	}, 300);

			map.setCenter(marker.getPosition());
		 });
	});
// 	console.log(targetPos.lng())
// console.log(targetPos.lat())
		
}
	
export default initMap;



