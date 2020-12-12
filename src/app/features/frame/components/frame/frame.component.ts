import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faClipboardList, faStar, faSignInAlt, faAppleAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {

  allFoodIcon: IconDefinition = faUtensils;
  categoriesIcon: IconDefinition = faClipboardList;
  favoritesIcon: IconDefinition = faStar;
  signInIcon: IconDefinition = faSignInAlt;
  ingredientsIcon: IconDefinition = faAppleAlt;

  constructor() { }

}
