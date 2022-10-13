import { Component, OnInit, OnDestroy,Input } from '@angular/core';
import * as anime from 'src/assets/js/lib/anime.min.js';
@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit,OnDestroy {
  @Input() tileLength:Number = 50;
  div:HTMLDivElement=document.querySelector('.tiles')!
  columns:Number=0
  rows:Number=0
  colors:string[] = ['#000000','#150050','#3F0071','#FB2576']
  counter:Number = 0;
  constructor() {}

  ngOnInit(): void {
    this.createGrid();
    window.addEventListener('resize',(ev)=>this.createGrid());
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize',(ev)=>this.createGrid());
  }

  handleOnClick(index:Number){
    this.counter = (this.counter.valueOf()+1)%this.colors.length;
    anime({
      targets: '.tile',
      backgroundColor: this.colors[this.counter.valueOf()],
      scale: [
        {value: .5, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(50, {grid: [this.columns, this.rows], from: index})
    });
  }
  createTile(index:Number):HTMLDivElement{
    let tile:HTMLDivElement = document.createElement('div');
    tile.style.setProperty('--index',index.toString());
    tile.classList.add('tile');
    tile.addEventListener ('click',(ev) => this.handleOnClick(index));
    return tile;
  }

  createGrid(){
    this.div = document.querySelector('.tiles')!;
    this.div.innerHTML = "";

    this.rows = Math.floor(this.div.clientHeight / this.tileLength.valueOf());
    this.columns =  Math.floor(this.div.clientWidth / this.tileLength.valueOf());
    this.div.style.setProperty('--columns',this.columns.toString());
    this.div.style.setProperty('--rows',this.rows.toString());

    let total:Number = this.rows.valueOf()*this.columns.valueOf();
    Array.from(Array(total)).map((tile,index) => this.div.appendChild(this.createTile(index)));
  }

}
