import { Pipe, PipeTransform } from '@angular/core';
import { uniqBy, filter, includes } from "lodash";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filterdata: string): any[] {
        if(!items) return [];
        if(!filterdata) return items;
        else {
            return items.filter( it => {
                console.log(it);
              return it.creatorsOfWork.includes(filterdata);
               });
            //return list.filter(i => i[key] === value);
        }
    }
}