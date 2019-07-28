import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { CounterActions } from './app.actions';
import { IAppState } from './store';
import { Observable } from 'rxjs';
//import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'state-course';
  readonly count$: Observable<number>;
  subscription;

  constructor(private ngRedux: NgRedux<IAppState>,
  private actions: CounterActions){
    this.count$ = ngRedux.select<number>('count');
    // this.subscription = ngRedux.select<number>('count')
    //   .subscribe(newCount => this.count = newCount);
  }

  increment(){
    this.ngRedux.dispatch(this.actions.increment());
  };

  decrement(){
    this.ngRedux.dispatch(this.actions.decrement());
  };

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
