import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
	selector: 'app-form-payment',
	templateUrl: './form-payment.component.html',
	styleUrls: ['./form-payment.component.scss']
})
export class FormPaymentComponent implements OnInit {
	paymentForm: FormGroup;
	submitted =false;
	stateList: Array<any> = [
		{ name: 'Rajasthan' },
		{ name: 'MadhyaPradesh' },
		{ name: 'Goa' },
		{ name: 'Maharashra' },
		{ name: 'Gujarat' },
	];
	// validation
	
	// this.paymentForm = this.fb.group({
	// 	email: ['', Validators.required],
	// 	dateExpiry: [''],
	// 	cvc: ['', Validators.required],
	// 	name: ['', Validators.required],
	// 	billingAddress: ['', Validators.required],
	// 	state: ['', Validators.required],

	// 	zipCode: ['', Validators.required],
	// });
	// paymentForm = new FormGroup({
	// 	email: new FormControl(''),
	// 	cardExpiry : new FormControl(''),
	// 	cvc : new FormControl(''),
	// 	name: new FormControl(''),
	// 	billingAddress: new FormControl(''),
	// 	state: new FormControl(''),
	// 	zipCode  : new FormControl('') 
	// });
	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.paymentForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			dateExpiry: [''],
			cvc: ['', Validators.required],
			name: ['', Validators.required],
			billingAddress: ['', Validators.required],
			state: ['', Validators.required],
	
			zipCode: ['', Validators.required],
		});
	}

	onSubmit() {
		this.submitted = true;
		console.warn(this.paymentForm.value);
		 // stop here if form is invalid
		 if (this.paymentForm.invalid) {
            return;
        }
	}
	// convenience getter for easy access to form fields
	get f() {return this.paymentForm.controls; }
}
