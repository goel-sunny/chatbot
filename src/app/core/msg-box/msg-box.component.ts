import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


export interface ChipColor {
  name: string;
  color: ThemePalette;
}


@Component({
  selector: 'app-msg-box',
  templateUrl: './msg-box.component.html',
  styleUrls: ['./msg-box.component.scss']
})
export class MsgBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
