import { Pipe, PipeTransform } from '@angular/core';
import { uniqBy, filter, includes } from "lodash";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(list: any[], key: string, value: string): any {
        console.log(value, "from PIPE")
        if(value == "") return list;
        else {
            return list.filter(i => i[key] === value);
        }
    }
}