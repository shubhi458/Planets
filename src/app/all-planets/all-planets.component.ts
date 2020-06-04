import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-all-planets',
  templateUrl: './all-planets.component.html',
  styleUrls: ['./all-planets.component.css']
})
export class AllPlanetsComponent implements OnInit {
  planetModel;
  planetData;
  //Favourites=[];

  constructor() { 
    this.planetData=JSON.parse(localStorage.getItem("planetData"))
  for (let pdata in this.planetData){
      //this.planetModel=new Planet(this.planetData[pdata]['value'])
  
}
console.log("dcds")
}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
}

// The function onSelectFavourite created to add planet to favourites by checking the checkbox and remove them by unchecking.
onSelectFavourite(e:any,pName:string,pId:string){
  let Favourites=JSON.parse(localStorage.getItem("Favourites"))
  if(e.target.checked){
    Favourites.push(pName);
    console.log("checked")
    
    localStorage.setItem("Favourites",JSON.stringify(Favourites))
  }
  else{
    if(Favourites.find(ans=>pName==ans)){
      Favourites.splice(Favourites.findIndex(ans=>pName==ans),1)
    }
    localStorage.setItem("Favourites",JSON.stringify(Favourites))
  }
  let storeddata=JSON.parse(localStorage.getItem("planetData"))
    for(let pdata in storeddata)
    {
      if(storeddata[pdata].id==pId){
        storeddata[pdata].isFavourite=e.target.checked;
      }
    }
    localStorage.setItem("planetData",JSON.stringify(storeddata));
}

}
