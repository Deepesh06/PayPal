import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
  static   dontGiveSpaceInBetweenTwoWords(control:AbstractControl): ValidationErrors | null {
if ((control.value).indexOf(" ") >=0) {
  return { dontGiveSpaceInBetweenTwoWords : true}
} else {
return null;
}
    }

static  shouldBeUnique(control :AbstractControl): ValidationErrors | null {
   if(control.value==="shashi") {
    return { shouldBeUnique :true }
   } else {
     return null;
   }
}
}