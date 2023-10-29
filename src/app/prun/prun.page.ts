import { Component, OnInit } from '@angular/core';
import { FooterT } from '../shared/components/footer/interfaces/footer.interface';

@Component({
  selector: 'app-prun',
  templateUrl: './prun.page.html',
  styleUrls: ['./prun.page.scss'],
})
export class PrunPage implements OnInit {
  footerData: FooterT[] = [
    {
      link: 'list',
      icon: 'pagelines',
      text: 'Podas',
    },
    {
      link: 'favs',
      icon: 'heart-o',
      text: 'Favoritos',
    },
    {
      link: 'create',
      icon: 'scissors',
      text: 'Añadir',
    },
    {
      link: 'msg',
      icon: 'stack',
      text: 'Buzón',
    },
    {
      link: 'mine',
      icon: 'user-1',
      text: 'Subidas',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
