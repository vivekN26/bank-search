import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSnippetComponent } from './bank-snippet.component';

describe('BankSnippetComponent', () => {
  let component: BankSnippetComponent;
  let fixture: ComponentFixture<BankSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
