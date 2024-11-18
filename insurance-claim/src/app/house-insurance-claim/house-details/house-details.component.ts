import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from '../service/house.service';
import { House } from '../models/house.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent implements OnInit {
  selectedHouse: House | undefined;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit(): void {
    const houseId = this.route.snapshot.paramMap.get('id');
    if (houseId) {
      this.loadHouseDetails(Number(houseId));
    }
  }

  loadHouseDetails(houseId: number): void {
    this.houseService.getHouses().subscribe({
      next: (response: any) => {
        this.selectedHouse = response.houses.find((house: House) => String(house.id) === String(houseId)) || undefined;
      },
      error: (error: any) => {
        console.error('Error fetching house details', error);
      },
    });
  }

  async deleteHouse(): Promise<void> {
    if (this.selectedHouse) {
      this.houseService.deleteHouse(this.selectedHouse).subscribe({
        next: async (response: any) => {
          const toast = await this.toastController.create({
            message: 'House deleted successfully.',
            duration: 2000,
            color: 'success',
          });
          toast.present();
          this.router.navigate(['/house-list']);
        },
        error: async (error: any) => {
          const toast = await this.toastController.create({
            message: 'Error deleting house. Please try again.',
            duration: 2000,
            color: 'danger',
          });
          toast.present();
        },
      });
    }
  }
}
