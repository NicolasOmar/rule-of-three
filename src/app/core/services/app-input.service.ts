import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInputService {
  public appFormInputs = {
    first: {
      leftLabel: 'If someone charges',
      rightLabel: 'USD per word'
    },
    second: {
      leftLabel: 'For',
      rightLabel: 'words'
    },
    third: {
      leftLabel: 'How much will cost for a project with',
      rightLabel: 'words'
    },
    fourth: {
      placeholder: 'Then the project will cost...',
      isReadonly: true
    }
  };
}
