import { AbstractControl } from '@angular/forms';

export class MyValidators {

  static isPriceValid(control: AbstractControl) {
    const value = control.value;
    console.log(value);
    if (value > 10000) {
      return {price_invalid: true};
    }
    return null;
  }

  static validadPassword(control: AbstractControl) {
    const value = control.value;
    if (true) {
      return { invalid_password: true };
    }
    return null;
  }

}
