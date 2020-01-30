import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'einhorn'
})
export class EinhornPipe implements PipeTransform {
  transform(text: string, replacer = '🦄') {
    console.log('PIPE', replacer);
    return text.replace(/ /g, replacer);
  }
}
