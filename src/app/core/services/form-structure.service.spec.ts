import { TestBed } from '@angular/core/testing';
// SERVICES
import { FormStructureService } from './form-structure.service';
// MOCKS
import { formDataMock } from '@mocks/data/form-data.mock';

describe('FormStructureService', () => {
  let service: FormStructureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormStructureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the inserted result from the data mock', (done) => {
    const resultMock = formDataMock[0].result;
    const getResult$ = service.getResult();

    service.setResults(resultMock);
        getResult$.subscribe(
          returnedResult => {
            expect(returnedResult).toEqual(resultMock);
            done();
          }
        )   
  })

  it('should return the inserted inputs from the data mock', (done) => {
    const inputsMock = formDataMock[0].inputs;
    const getInputs$ = service.getInputs();

    service.setInputs(inputsMock);
    getInputs$.subscribe(
      returnedInputs => {
        expect(returnedInputs).toBe(inputsMock);
        done();
      }
    )
  })
});
