/**
 * Created by dhiraj on 13/11/2016.
 */
import { Pipe, PipeTransform, Input } from '@angular/core'

@Pipe({ name: 'filterperson' })
export class FilterPersonPipe implements PipeTransform {

  transform(personList: String[], searchstring : string) {
    return personList.filter( (person) => searchstring ? person === searchstring : true//{
    //   if(searchstring == ''){
    //     return true}
    // else{
    //     return(person === searchstring) ;
       //}}
    );
  }
}
