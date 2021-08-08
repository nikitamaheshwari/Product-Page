import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
	selector: 'app-form-payment',
	templateUrl: './form-payment.component.html',
	styleUrls: ['./form-payment.component.scss']
})
export class FormPaymentComponent implements OnInit {

	// validation
	paymentForm = this.fb.group({
		email: ['', Validators.required],
		// cardExpiry: ['', Validators.required],
		cvc: ['', Validators.required],
		name: ['', Validators.required],
		billingAddress: ['', Validators.required],
		state: ['', Validators.required],
		
		zipCode: ['', Validators.required],
	});

	// paymentForm = new FormGroup({
	// 	email: new FormControl(''),
	// 	cardExpiry : new FormControl(''),
	// 	cvc : new FormControl(''),
	// 	name: new FormControl(''),
	// 	billingAddress: new FormControl(''),
	// 	state: new FormControl(''),
	// 	zipCode  : new FormControl('') 
	// });
	constructor(private fb:FormBuilder) { }

	ngOnInit(): void {
	}

	onSubmit(){
		console.warn(this.paymentForm.value);
	}

}
