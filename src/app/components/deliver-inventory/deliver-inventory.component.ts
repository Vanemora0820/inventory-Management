import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
@Component({
  selector: 'app-deliver-inventory',
  templateUrl: './deliver-inventory.component.html',
  styleUrls: ['./deliver-inventory.component.css']
})
export class DeliverInventoryComponent implements OnInit{

  inventoryList: any[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.loadInventory();
   
  }

  loadInventory(): void {
    this.inventoryService.getInventory().subscribe(data => {
      this.inventoryList = data;
      console.log(this.inventoryList);
    });
  }

  deliverInventory(id: number): void {

    this.inventoryService.deliverInventory(id).subscribe({
      next: (response) => {
        const index = this.inventoryList.findIndex(item => item.id === id);
        if (index !== -1) {
          this.inventoryList[index].status = 'Delivered';
        }
        alert('Inventario entregado exitosamente');
      },
      error: (error) => {
        alert('Error al entregar el inventario');
      }
    });
    
    }
  }
