import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersListComponent} from './users-list.component';
import {User} from '../../models/user.model';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let users = [new User('Emile', 'Cyimena'), new User('Amaury', 'Cyemezo')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return list of users', () => {
    const usersToTest = [new User('Emile', 'Cyimena'), new User('Amaury', 'Cyemezo')];
    expect(usersToTest).toEqual(users);
  });


});
