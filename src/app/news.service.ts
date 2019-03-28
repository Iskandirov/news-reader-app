import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
apiKey = '7eec6af8ceb646e6bac16d0363584303';
apiURL = 'https://newsapi.org/v2/';
  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get( this.apiURL + 'sources?language=en&apiKey=' + this.apiKey);
  }

  initArticles() {
    return this.http.get( this.apiURL + 'top-headlines?sources=techcrunch&apiKey=' + this.apiKey);
  }

  getArticlesById(source: string) {
    return this.http.get( this.apiURL + 'top-headlines?sources=' + source + '&apiKey=' + this.apiKey);
  }

}
