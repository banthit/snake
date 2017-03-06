import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {
  GetList(): any[] {
    let items : any[] = [
      {
        id:1,
        name:"nguyen van teo"
      },
      {
        id:2,
        name:"nguyen thi ti"
      },
      {
        id:3,
        name:"abc"
      },
    ];
    return items;
  }
}
