import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
movieName:string
imagePath:string
  constructor(private tvService:TvService) { }
movieObject:any={};
  ngOnInit() {

  }
getMovie(){
  this.tvService.getMovie(this.movieName).subscribe((movieArray)=>{
if(movieArray["results"].length!=0){
    this.movieObject=movieArray["results"][0];
this.imagePath=this.movieObject.poster_path;
document.getElementById("image").innerHTML=`
<h2>${this.movieObject.title}</h2>
<img src=http://image.tmdb.org/t/p/w154${this.imagePath}>

<h2>${this.movieObject.overview}</h2>


`}
else{
  document.getElementById("image").innerHTML=`
  <h2>Please enter correct name</h2>
  `
}

})
}
}
