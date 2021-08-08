import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
	providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class AppCarouselComponent implements OnInit {
	showNavigationArrows = true;
	showNavigationIndicators = false;
	 images = [
		'../../assets/iphone.jpeg',
		'../../assets/iphone1.jpeg',
		'../../assets/iphone1.jpeg',
	];
	constructor(config: NgbCarouselConfig) {
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}

	ngOnInit(): void {
	}

}
