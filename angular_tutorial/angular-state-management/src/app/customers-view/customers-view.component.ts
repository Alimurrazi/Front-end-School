import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customers';
import { select, Store } from '@ngrx/store';
import { CustomerRemove } from '../customer.actions';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers = store.pipe(select('customers'));
    console.log(store);
  }

  removeCustomer(customerIndex){
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

  ngOnInit() {
  }

}
