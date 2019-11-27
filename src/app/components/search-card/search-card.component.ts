import { Component, OnInit } from "@angular/core";
import { YoutubeSearchService } from "../../services/youtube-search.service";

@Component({
  selector: "app-search-card",
  templateUrl: "./search-card.component.html",
  styleUrls: ["./search-card.component.scss"]
})
export class SearchCardComponent implements OnInit {
  searchInput = "";
  loading = false;
  searchResult = [];
  color = "primary";
  mode = "determinate";
  constructor(private YOUTUBE: YoutubeSearchService) {}

  ngOnInit() {}

  async handleInputChange() {
    this.searchResult = [];
    this.loading = true;
    const result = await this.YOUTUBE.searchInYoutube(this.searchInput);
    this.loading = false;
    this.searchResult = result.items;
  }
}
