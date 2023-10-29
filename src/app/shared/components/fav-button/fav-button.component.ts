import {
  AfterContentInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FavButtonService } from './fav-button.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.scss'],
  standalone: true,
  providers: [FavButtonService],
})
export class FavButtonComponent implements OnDestroy, AfterContentInit {
  @Input('plantName') plantName!: string;
  isFav: boolean = false;
  sub!: Subscription;
  constructor(private favButtonService: FavButtonService) {}
  ngAfterContentInit(): void {
    this.sub = this.favButtonService.favs$.subscribe((favs) => {
      this.isFav = this.favButtonService.isFav(this.plantName);
      console.log({ fav: this.isFav, favs, plantName: this.plantName });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  toggleFav() {
    console.log(this.plantName);
    this.favButtonService.toggleFav(this.plantName);
  }
}
