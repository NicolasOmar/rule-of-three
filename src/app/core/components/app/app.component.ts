import { Component, OnInit } from '@angular/core';
// SERVICES
import { FormDataService } from '@core/services/form-data.service';
import { FormService } from '@core/services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public contentWide = 10;
  public mainTitle = 'Rule of Three';

  constructor(private formService: FormService, private formDataService: FormDataService) {}

  ngOnInit(): void {
    this.setFormData();
  }

  private setFormData(): void {
    const { result, inputs } = this.formDataService.mainFormData;
    this.formService.setResults(result);
    this.formService.setInputs(inputs);
  }
}
