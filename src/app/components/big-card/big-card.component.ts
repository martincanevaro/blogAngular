import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover : string = "https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/01/16095118/Depositphotos_3667865_m-2015-compressor.jpg"
  @Input()
  cardTitle : string ="Mi título"
  @Input()
  cardDescription: string="Texto"
  @Input()
  Id:string="0"
  constructor (){}
  ngOnInit(): void {

}
}
