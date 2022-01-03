import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroListItemComponent } from './cadastro-list-item.component';

describe('CadastroListItemComponent', () => {
  let component: CadastroListItemComponent;
  let fixture: ComponentFixture<CadastroListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
