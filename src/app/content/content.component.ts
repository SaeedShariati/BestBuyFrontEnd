import { Component, OnInit,HostBinding } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'main-content';
  constructor() { }

  ngOnInit(): void {
  }

}
