import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
@Component({
  selector: 'app-deliver-inventory',
  templateUrl: './deliver-inventory.component.html',
  styleUrls: ['./deliver-inventory.component.css']
})
export class DeliverInventoryComponent implements OnInit{

  inventory: any[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(data => {
      this.inventory = data;
    });
  }

  deliverInventory(id: number): void {
    this.inventoryService.deliverInventory(id).subscribe(response => {
      console.log('Inventory delivered successfully:', response);
      this.ngOnInit();
    });
  }
}
