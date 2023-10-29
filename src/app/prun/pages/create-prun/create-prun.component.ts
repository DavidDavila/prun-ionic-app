import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/shared/modules/login/login.service';

@Component({
  selector: 'app-create-prun',
  templateUrl: './create-prun.component.html',
  styleUrls: ['./create-prun.component.scss'],
})
export class CreatePrunComponent implements OnInit {
  constructor(public loginService: LoginService) {}

  ngOnInit() {}
}
