import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { House } from '../models/house.model';
import { HouseService } from '../service/house.service';
import { NavController, ToastController } from '@ionic/angular'; 

@Component({
  selector: 'house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.scss']
})
export class HouseFormComponent {
  house: House = {
    address: '',
    description: '',
    geolocation: '',
    damageImages: [],
  };

  constructor(
    private houseService: HouseService, 
    private navCtrl: NavController, 
    private toastController: ToastController
  ) {}

  addImage(): void {
    this.house.damageImages.push({ url: '', description: '' });
  }

  goBack() {
    this.navCtrl.back();
  }

  onFileSelected(event: any, index: number): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.house.damageImages[index].url = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(index: number): void {
    this.house.damageImages.splice(index, 1);
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  saveHouse(form: NgForm): void {
    if (form.valid) {
      const formData = new FormData();
      console.log('Submitting House object:', this.house);

  
      this.house.damageImages.forEach((image, index) => {
        if (image.url) {
          const fileBlob = this.dataURItoBlob(image.url);
          formData.append('image[]', fileBlob, `image_${index}.jpg`);
          formData.append('description[]', image.description);
        }
      });
  
      this.houseService.addHouse(this.house).subscribe({
        next: () => {
          this.presentToast('House saved successfully!', 'success');
          form.resetForm();
          this.navCtrl.back();
        },
        error: (error) => {
          console.error('Error saving house:', error);
          this.presentToast('Error saving house. Please try again.', 'danger');
        },
      });
    }
    
    else {
      this.presentToast('Please fill in all required fields.', 'danger');
    }
  }
  
  // Convert base64 image to blob
  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  }
  
}
