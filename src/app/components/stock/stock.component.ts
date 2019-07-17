import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public stockId: number;
  public limit: number;
  private sub: any;
  private sub2: any;

  constructor(private data: ActivatedRoute) {
    console.log('initialize stock');
   }

  ngOnInit() {
    // 利用快照的方式读取路由参数（有bug，不推荐使用）
    // this.stockId = this.data.snapshot.params['id'];

    // 利用订阅的方式读取参数（推荐使用）
    this.sub = this.data.params.subscribe((params: Params) => {
      this.stockId = params['id'];
    });

    this.sub2 = this.data.queryParams.subscribe((params: Params) => {
      this.limit = parseInt(params['limit']);
      if (this.limit >= 100) {
        console.log('已达到上线值');
      }
      console.log(this.limit);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
