import { Pipe, PipeTransform } from '@angular/core';
import { typeOf, typeOfAvailableType } from '@misc/helpers/typeof.function';

@Pipe({
  name: 'typeof'
})
export class TypeofPipe implements PipeTransform {
  transform(item: any, type: typeOfAvailableType): boolean {
    return typeOf(item, type);
  }
}
