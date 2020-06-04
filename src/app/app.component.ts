import { Component } from '@angular/core';
import { PlanetService } from './planet.service';
import { Planet } from './planet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private planetservice:PlanetService){
    //The data we get from API will be one time that's why commented the below code.

    // let planets$;
    // this.planetservice.fetchPlanets().subscribe(Response=>{
    //   planets$=Response;
    //     localStorage.setItem("planetData",JSON.stringify(planets$));
    // });
   
  }
  
  // onSelectFavourite(e:any,pName:string,pId:string){
  //   if(e.target.checked){
  //     this.Favourites.push(pName);
  //     console.log("checked")
      
  //     localStorage.setItem("Favourites",JSON.stringify(this.Favourites))
  //   }
  //   else{
  //     this.Favourites=JSON.parse(localStorage.getItem("Favourites"))
  //     if(this.Favourites.find(ans=>pName==ans)){
  //       this.Favourites.splice(this.Favourites.findIndex(ans=>pName==ans),1)
  //     }
  //     localStorage.setItem("Favourites",JSON.stringify(this.Favourites))
  //   }
  //   let storeddata=JSON.parse(localStorage.getItem("planetData"))
  //     for(let pdata in storeddata)
  //     {
  //       if(storeddata[pdata].id==pId){
  //         storeddata[pdata].isFavourite=e.target.checked;
  //       }
  //     }
  //     localStorage.setItem("planetData",JSON.stringify(storeddata));
  // }
}
