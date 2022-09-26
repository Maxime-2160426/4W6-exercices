import { LibraryService } from './library.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

constructor(public library:LibraryService){}

  transform(value?: string, args?: string): any {
    if (value == null)
      if(args?.toLowerCase() == "chat")
        return this.library.CHAT;
      else
        return this.library.OISEAU;
      
    return value;
  }

}
