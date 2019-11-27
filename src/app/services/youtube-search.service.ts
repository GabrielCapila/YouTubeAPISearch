import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class YoutubeSearchService {
  API_KEY = "AIzaSyCVebTF2OUsTu2TExlus85nED4SSXzfAAI";
  constructor(private HTTP: HttpClient) {}

  searchInYoutube(search: string): Promise<any> {
    return this.HTTP.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&key=${this.API_KEY}`
    ).toPromise();
  }
}
