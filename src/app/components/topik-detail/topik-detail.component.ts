import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { NewsListService } from 'src/app/services/news-list.service';

import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export interface TopikData {
  by:string;
  descendants:number;
  id:number;
  kids:[];
  score:number;
  time:number;
  title:string;
  type:string;
  url:string;
}

@Component({
  selector: 'app-topik-detail',
  templateUrl: './topik-detail.component.html',
  styleUrls: ['./topik-detail.component.scss']
})
export class TopikDetailComponent implements OnInit {
  public comments:any;
  public isLoading=false;

  constructor(
    private newsService: NewsListService,
    public dialogRef: MatDialogRef<TopikDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TopikData,
  ) { }

  async ngOnInit() {

    if(this.data){
      const newsIdListSlice= this.data.kids.slice(0, 3);
      this.isLoading = true;
      await this.newsService.getStories((newsIdListSlice?newsIdListSlice:[])).then((value)=> {
        this.comments = value;
        this.isLoading = false;
      });
      console.log(this.comments);
      this.isLoading = false;
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public toDate(ms:any){
    const dateTime = new Date(ms*1000);
    return timeAgo.format(dateTime);
  }



 truncateString(str:string, num:number){
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}


}
