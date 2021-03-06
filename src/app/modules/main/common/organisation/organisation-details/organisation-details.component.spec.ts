import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationDetailsComponent } from './organisation-details.component';

describe('OrganizationDetailsComponent', () => {
  let component: OrganisationDetailsComponent;
  let fixture: ComponentFixture<OrganisationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
