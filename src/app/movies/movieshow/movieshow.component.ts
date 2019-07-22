import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movieshow',
  templateUrl: './movieshow.component.html',
  styleUrls: ['./movieshow.component.css']
})
export class MovieshowComponent implements OnInit {
movieName:string
imagePath:string
  constructor(private movieService:MovieService) { }
movieObject:any={};
  ngOnInit() {

  }
getMovie(){
  this.movieService.getMovie(this.movieName).subscribe((movieArray)=>{
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
