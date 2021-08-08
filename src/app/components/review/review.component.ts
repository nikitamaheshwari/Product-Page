import { Component, OnInit } from '@angular/core';
// import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.scss'],
	// providers: [NgbRatingConfig]
})
export class ReviewComponent implements OnInit {

	currentRate = 0;

	ngOnInit(): void {
	}

}
