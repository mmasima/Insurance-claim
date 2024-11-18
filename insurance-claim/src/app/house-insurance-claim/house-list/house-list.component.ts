import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from '../service/house.service';
import { AuthService } from '../../services/auth/auth.service';
import { House } from '../models/house.model';

@Component({
  standalone: false,
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {
  houses: House[] = [];

  constructor(
    private houseService: HouseService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadHouses();
  }

  loadHouses(): void {
    this.houseService.getHouses().subscribe({
      next: (response: any) => {
        console.log("houses is here", response.houses);
        this.houses = response.houses;
      },
      error: (error: any) => {
        console.error('Error fetching houses', error);
      },
    });
  }

  viewHouseDetails(house: House): void {
    if (house && house.id) {
      this.router.navigate(['/house-details', house.id]);
    } else {
      console.error('House ID is missing:', house);
    }
  }
  

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
