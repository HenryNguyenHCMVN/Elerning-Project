import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform {

  transform(value: string, litmit = 20): string {

    if(value.length > litmit){
      return value.substr(0, litmit) + "...";
    }

return value;
  }

}
