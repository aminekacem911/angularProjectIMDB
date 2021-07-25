import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public setting: any= [];
  title = 'miniproject';
  key = "";
  Apiurl = "";
  movie = {
    title: "",
    length: "",
    description: "",
    image: "",
    year: "",
    trailer: "",
    rating: "",
    actors: [],
    movielink:""
  };

  constructor(

    private http: HttpClient,


  ) {}


  readAPI(URL: string) {
    return this.http.get(URL);
  }

  searchMovie() {

    const search = encodeURIComponent(this.key).trim();
    //console.log('search',this.key)
    this.Apiurl = 'http://127.0.0.1:8000/api/search?key=' + search;
    //console.log('search',this.key)
    this.readAPI(this.Apiurl)
      .subscribe((data:any) => {
      console.log(data);
      this.movie.title = data['result']['title'];
      this.movie.length = data['result']['length'];
      this.movie.year = data['result']['year'];
      this.movie.description = data['result']['plot'];
      this.movie.image = data['result']['poster'];
      this.movie.trailer = data['result']['trailer']['link'];
      this.movie.rating =data['result']['rating'];
      this.movie.actors =data['result']['cast'];
      this.movie.movielink =data['movies'];
      console.log('actors',this.movie.actors);


    });

  }
  ngOnInit(): void {
    // this.setting = this.SettingService.getSetting();
    // console.log(this.setting);


  }
}
