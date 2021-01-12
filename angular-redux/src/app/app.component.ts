import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { CounterActions } from './app.actions';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'angular-redux';
  count: number;
  subscription;

  constructor(private ngRedux: NgRedux<IAppState>,
              private actions: CounterActions) {
    this.subscription = ngRedux.select<number>('count')
          .subscribe(newCount => this.count = newCount);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }

  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
