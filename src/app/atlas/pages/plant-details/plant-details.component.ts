import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import plantsJson from '../../../../assets/plants.json';
import { Platform } from '@ionic/angular';
import {
  SLIDEOUT_ANIMATION,
  SLIDEIN_ANIMATION,
} from '../../core/animations/slide.animation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss'],
  animations: [...SLIDEOUT_ANIMATION, ...SLIDEIN_ANIMATION],
})
export class PlantDetailsComponent {
  plant!: any;
  plantName!: string;
  title1!: string;
  title2!: string;
  icons: any = {
    luz: 'lightbulb-o',
    altura: 'measure',
    crecimiento: 'line-chart',
    co2: 'fire-extinguisher',
  };
  description!: string;
  constructor(private route: ActivatedRoute) {
    this.plantName = this.route.snapshot.params['plantName'];
    this.plant = (plantsJson as any)[this.route.snapshot.params['plantName']];
    this.description = this.plant.desc.description.replace(
      /\. /gm,
      '.<br><br>'
    );
    const title = this.plantName.split(' ');

    this.title1 = title.pop() || this.plantName;
    this.title2 = title.join(' ');
  }
  close() {
    history.back();
  }
}
