import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInputService {
  public appFormInputs = {
    first: {
      placeholder: 'If someone charges X amount of money'
    },
    second: {
      placeholder: 'For Y amount of words'
    },
    third: {
      placeholder: 'If I have a project with Z words'
    },
    fourth: {
      placeholder: 'Then the project will cost...',
      isReadonly: true
    }
  };
}
