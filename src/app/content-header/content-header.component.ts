import { Component, OnInit, OnDestroy,Input, ViewEncapsulation } from '@angular/core';
import * as anime from 'src/assets/js/lib/anime.min.js';
@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class ContentHeaderComponent implements OnInit,OnDestroy {
  @Input() tileLength:Number = 50
  @Input() colors:string[] = ['#333333','#150050','#3F0071','#FB2576']
  @Input() staggerDelay:Number = 50
  toggled:boolean = false;
  div:HTMLDivElement=document.querySelector('.tiles')!
  headerContent:any = null
  columns:Number = 0
  rows:Number = 0
  counter:Number = 0
  constructor() {}

  ngOnInit(): void {
    this.createGrid();
    window.addEventListener('resize',(ev)=>this.createGrid());
    this.headerContent = document.querySelector('.header-content');
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize',(ev)=>this.createGrid());
  }

  handleOnClick(index:Number){
    this.counter = (this.counter.valueOf()+1)%this.colors.length;
    this.toggled = !this.toggled;
    this.headerContent.style.opacity=this.toggled?'0':'1';
    anime({
      targets: '.tile',
      opacity: this.toggled?0:1 ,
      //backgroundColor: this.colors[this.counter.valueOf()],
      //scale: [
      //  {value: .5, easing: 'easeOutSine', duration: 500},
      //  {value: 1, easing: 'easeInOutQuad', duration: 1200}
      //],
      delay: anime.stagger(this.staggerDelay, {grid: [this.columns, this.rows], from: index})
    });
  }
  createTile(index:Number):HTMLDivElement{
    //creates a tile with a particular event handler
    let tile:HTMLDivElement = document.createElement('div');
    tile.classList.add('tile');
    tile.style.opacity = this.toggled?'0':'1';
    tile.addEventListener ('click',(ev) => this.handleOnClick(index));
    return tile;
  }
  createTiles(){
    //creates <total> number of tiles and appends them to div
    let total:Number = this.rows.valueOf()*this.columns.valueOf();
    Array.from(Array(total)).map((tile,index) => this.div.appendChild(this.createTile(index)));
  }
  createGrid(){
    this.div = document.querySelector('.tiles')!;
    this.div.innerHTML = "";
    this.rows = Math.floor(this.div.clientHeight / this.tileLength.valueOf());
    this.columns =  Math.floor(this.div.clientWidth / this.tileLength.valueOf());
    this.div.style.setProperty('--columns',this.columns.toString());
    this.div.style.setProperty('--rows',this.rows.toString());
    this.createTiles();
  }

}
