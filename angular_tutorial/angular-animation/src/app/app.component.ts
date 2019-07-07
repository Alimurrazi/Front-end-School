import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import * as jQuery from 'jquery';
import 'slick-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    trigger('goals',[
      transition('* => *',[
        query(':enter', style({opacity:0}),{optional: true}),

        query(':enter', stagger('300ms',[
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),
          ]))
        ]),{optional: true})

      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'angular-animation';
  goals = ['My first life goal', 'I want to climb a mountain', 'Go ice skiing'];
  items = ["1", "2", "3", "4", "5", "6"];

  ngOnInit() {

    const slider = jQuery("#carousel");

    setTimeout(() => {
      jQuery('#carousel').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        vertical: true,
        infinite: true,
        focusOnSelect: true,
        speed: 1000,
        slidesToScroll : 5,
        arrows: false
      });
    });

    slider.on('wheel', (function(e: any) {
      e.preventDefault();

      if (e.originalEvent.deltaY < 0) {
        jQuery(this).slick('slickNext');
      } else {
        jQuery(this).slick('slickPrev');
      }

      console.log(e.originalEvent.deltaX+" "+e.originalEvent.deltaY);
      // if (e.originalEvent < 0) {
      //   $(this).slick('slickNext');
      // } else {
      //   $(this).slick('slickPrev');
      // }

    }));

}

}
