import { Injectable, Input } from '@angular/core';
import { InputConfig, LabelConfig } from '@shared/interfaces/inputs.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private result$ = new BehaviorSubject<LabelConfig>(null);
  private inputs$ = new BehaviorSubject<Array<InputConfig>>([]);

  public setResults(config: LabelConfig) {
    this.result$.next(config);
  }

  public setInputs(config: Array<InputConfig>) {
    this.inputs$.next(config);
  }

  public getResult(): Observable<LabelConfig> {
    return this.result$.asObservable();
  }

  public getInputs(): Observable<Array<InputConfig>> {
    return this.inputs$.asObservable();
  }
}
