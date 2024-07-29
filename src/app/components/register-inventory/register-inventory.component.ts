import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';


@Component({
  selector: 'app-register-inventory',
  templateUrl: './register-inventory.component.html',
  styleUrls: ['./register-inventory.component.css']
})

export class RegisterInventoryComponent implements OnInit {

  products: any[] = [];
  users: any[] = [];
  inventory: any = {};
  notificationMessage: string | null = null;
  notificationType: 'success' | 'error' = 'success';

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
      this.inventoryService.getProducts().subscribe(data => {
        this.products = data;
      });
  
      this.inventoryService.getUsers().subscribe(data => {
        this.users = data;
      });
    }
  
    registerInventory(): void {
      this.inventory.date = new Date(this.inventory.date).toISOString();
      this.inventoryService.registerInventory(this.inventory).subscribe(
        response => {
          this.notificationMessage = 'Inventario registrado exitosamente!';
          this.notificationType = 'success';
        },
        error => {
          this.notificationMessage = 'Hubo un problema al registrar el inventario.';
          this.notificationType = 'error';
      });
    }
}
