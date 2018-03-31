import { Component } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { AgmMarker } from '@agm/core/directives/marker'
import { AgmMap } from '@agm/core/directives/map';
import { AgmInfoWindow } from '@agm/core/directives/info-window';
import { NgForOf } from '@angular/common';


@Component({
	selector: 'map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class GoogleMapComponent {
	title: string = 'My first AGM project';

	zoom: number = 10;

	lat: number = 51.678418;
	lng: number = 7.809007;

	MarkerName: string;
	MarkerLat: string;
	MarkerLng: string;

	markers: marker[] = [



		{
			name: 'MarkerOne',
			lat: 51.678218,
			lng: 7.809007,
			//draggable: true

		}
		,
		{
			name: 'MarkerTwo',
			lat: 51.67118,
			lng: 7.809007,
			// draggable: true

		}
		,
		{
			name: 'MarkerThree',
			lat: 51.67118,
			lng: 7.900007,
			// draggable: true

		}




	];

	constructor() { }



	AddMe() {

		console.log(this.MarkerName);

		var NewMarker =
			{
				name: this.MarkerName,
				lat: parseFloat(this.MarkerLat),

				lng: parseFloat(this.MarkerLng),
				// draggable: true

			}
		this.markers.push(NewMarker);
	}





}

interface marker {
	name?: string;
	lat: number;
	lng: number;
	// draggable: boolean;

}



