import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor() { }

  get currentUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  signIn(email: string, password: string): Observable<User> {
    // TODO: Replace with actual server call
    const user: User = {
      email,
      name: 'Peter Parker',
      avatarUrl: 'assets/profile_picture.png'
    } 
    this.userSubject.next(user);
    return of(user);
  }

  signUp(email: string, password: string, name: string): Observable<User> {
    // TODO: Replace with actual server call
    const user: User = {
      email,
      name,
      avatarUrl: 'assets/profile_picture.png'
    }
    return of(user);
  }

  signOut(): void {
    this.saveUser(null);
    this.userSubject.next(null);
  }

  private saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private getUser(): User {
    const saved = localStorage.getItem('user');
    return JSON.parse(saved);
  }
}