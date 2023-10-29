import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class FavButtonService {
  private favs: string[] = [];
  favs$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor(private storage: Storage) {
    this.getFavs();
  }
  isFav(plantName: string): boolean {
    return this.favs.includes(plantName);
  }
  getFavs() {
    this.storage.get('prun-favs').then((favs: string[]) => {
      this.favs = favs || [];
      this.favs$.next(this.favs);
    });
  }
  saveFavs(favs: string[]) {
    console.log({ favs });
    this.storage.set('prun-favs', favs).then(() => {
      this.favs$.next(this.favs);
    });
  }
  removeFav(plantName: string) {
    this.favs = this.favs?.filter((fav: string) => fav !== plantName);
    this.saveFavs(this.favs);
  }
  setFav(plantName: string) {
    this.favs?.push(plantName);

    this.saveFavs(this.favs);
  }
  toggleFav(plantName: string) {
    if (this.isFav(plantName)) {
      this.removeFav(plantName);
    } else {
      this.setFav(plantName);
    }
  }
}
