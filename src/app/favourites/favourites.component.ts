import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  Favourites=[]
  constructor() {this.Favourites=JSON.parse(localStorage.getItem("Favourites")) }

  ngOnInit(): void {
  }

}
