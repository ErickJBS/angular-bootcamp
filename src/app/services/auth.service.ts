import { Injectable } from '@angular/core';
import { User } from '@models/user.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User>(null);

  constructor(private router: Router) {
    const user = this.getUser();
    this.userSubject.next(user);
  }

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
    this.saveUser(user);
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
    this.router.navigate(['/signIn']);
  }

  isLoggedIn(): boolean {
    const user = this.userSubject.getValue();
    return !!user;
  }

  private saveUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  private getUser(): User {
    const saved = localStorage.getItem('user');
    return JSON.parse(saved);
  }

}
