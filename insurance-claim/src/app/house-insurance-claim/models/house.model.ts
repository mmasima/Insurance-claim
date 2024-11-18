export interface House {
  id?: string;  
  address: string;
  description: string;
  geolocation: string;
  damageImages: { url: string; description: string }[];
}
