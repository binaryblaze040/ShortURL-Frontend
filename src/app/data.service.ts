import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient, public router:Router) { }

  shortUrl(longUrl : any)
  {
    let api = "https://binaryblaze-shorturl.herokuapp.com/generateurl";
    let postData = {
      "longurl" : longUrl
    };
    return this.http.post(api, postData);
  }

  registerUser(formData : any)
  {
    let api = "https://binaryblaze-shorturl.herokuapp.com/register";
    return this.http.post(api, formData);
  }

  login(formData : any)
  {
    let api = "http://binaryblaze-shorturl.herokuapp.com/login";
    return this.http.post(api, formData);
  }

}
