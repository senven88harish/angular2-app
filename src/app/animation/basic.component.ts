import { Component } from '@angular/core';
import { trigger,state,style,animate,transition,keyframes} from '@angular/animations';

@Component({
  selector: 'basic-anim',
  template: `<div class="row">
        <div class="columns">
            <button (click)="toggleMove()">Press me for animation</button>
        </div>
        <div class="columns">
            <div id="content" [@focusPanel]='state' [@movePanel]='state'>Look at me animate</div>
        </div>
    </div>`,
  styleUrls: ['./basic.component.css'],

  animations: [
    trigger('focusPanel', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),

    trigger('movePanel', [

      transition('void => *', [
        animate(600, keyframes([
          style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
          style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
      ])
    ])
  ]
})

export class BasicAnimComponent {
  state: string = 'inactive';

  toggleMove() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}
