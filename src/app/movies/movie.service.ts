import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
getMovie(movieName){
return  this.http.get(this.getUrl(movieName));
}
getUrl(movieName):string{
  const apiKey="6b887e397490d385fcf599514f820e0c"
return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieName}&page=1&include_adult=false`
}


}
