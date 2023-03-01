import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {

  // @Input est un décorateur qui indique que la valeur de cette propriété
  // product viendra du composant parent Product
  @Input() produit!: Product | undefined;

  // @Output est un décorateur qui indique que la valeur de cette propriété
  // notify ira au composant parent ProductListComponent en déclenchant un évènement
  @Output() notify = new EventEmitter();
}
