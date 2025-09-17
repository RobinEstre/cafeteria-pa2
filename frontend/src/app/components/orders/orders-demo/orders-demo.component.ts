import { Component } from '@angular/core';
import { OrdenService, OrderPayload } from '../../../services/orden.service';

@Component({
  selector: 'app-orders-demo',
  templateUrl: './orders-demo.component.html',
  styleUrl: './orders-demo.component.css'
})
export class OrdersDemoComponent {
  okId?: number;

  constructor(private orders: OrdenService) {}

  crear() {
    const payload: OrderPayload = {
      customer: 'Cliente Demo',
      items: [{ product: 1, qty: 2 }]
    };
    this.orders.create(payload).subscribe(r => this.okId = r.id);
  }
}