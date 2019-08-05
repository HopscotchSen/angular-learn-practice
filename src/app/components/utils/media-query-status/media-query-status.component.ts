import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-query-status',
  templateUrl: './media-query-status.component.html',
  styleUrls: ['./media-query-status.component.css']
})
export class MediaQueryStatusComponent implements OnInit {
  // media$: Observable<MediaChange[]>;

  constructor(media: MediaObserver) {
    // this.media$ = media.asObservable();
  }

  ngOnInit() {
  }

}
