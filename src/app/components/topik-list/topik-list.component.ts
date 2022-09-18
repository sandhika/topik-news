import { Component, OnInit } from '@angular/core';
import { NewsListService } from 'src/app/services/news-list.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {TopikDetailComponent} from '../topik-detail/topik-detail.component';

import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

@Component({
  selector: 'app-topik-list',
  templateUrl: './topik-list.component.html',
  styleUrls: ['./topik-list.component.scss']
})
export class TopikListComponent implements OnInit {

  news: any;


  constructor(
      private newsService: NewsListService,
      public dialog: MatDialog,
  ) { }

  async ngOnInit() {
    const newsIdList = await this.newsService.getStoryIds();
    if(newsIdList){
      const newsIdListSlice= newsIdList.slice(0, 20);
      this.news = await this.newsService.getStories((newsIdListSlice?newsIdListSlice:[]));
    }

  }

  public toDate(ms:any){
    const dateTime = new Date(ms*1000);
    return timeAgo.format(dateTime);
  }


  openDetail(dta:any): void {
    //console.log(dta);
    const dialogRef = this.dialog.open(TopikDetailComponent, {
      width: '550px',
      data: dta,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

}
