import { 
	Component,
	trigger,
	state,
	style,
	transition,
	animate,
	keyframes
} from '@angular/core';

@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
  	styleUrls: ['app.component.css'],
  	animations: [
  		trigger('focusPanel', [
  				state('inactive', style({
  					transform: 'scale(1)',
  					backgroundColor: '#ff0000'
  				})),
  				state('active', style({
  					transform: 'scale(1.5)',
  					backgroundColor: '#aa3322'
  				})),
  				transition('inactive => active', animate('100ms ease-in')),
  				transition('active => inactive', animate('100ms ease-out'))
  			]),
  		trigger('movePanel', [
  			transition('void => *', [
  						animate(600,keyframes([
  								style({opacity: 0, transform: 'translateY(-200px)', offset: 0}),
  								style({opacity: 1, transform: 'translateY(25px)', offset: .75}),
  								style({opacity: 1, transform: 'translateY(0)', offset: 1})
  	
  							]))
  					])
  			])
  	]
})
export class AppComponent  { 

	state: string = 'inactive';

	toggleMove() {
		this.state = (this.state === 'inactive' ? 'active' : 'inactive');
	}
 }
