import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/modules/login/login.service';

@Component({
  selector: 'app-fav-pruns',
  templateUrl: './fav-pruns.component.html',
  styleUrls: ['./fav-pruns.component.scss'],
})
export class FavPrunsComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit() {}
}
