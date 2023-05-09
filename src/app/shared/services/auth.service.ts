import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  concatMap,
  from,
} from 'rxjs';
import { AppwriteApi } from './appwrite';

@Injectable({
 providedIn: 'root',
})
export class AuthService {
  private appwriteAPI = inject(AppwriteApi);
  router: Router = inject(Router);

    private _user = new BehaviorSubject<any | null>(
    null
  );
  private _role = new BehaviorSubject<string>(
    ""
  );
  readonly role$ = this._role.asObservable();

  private _isAdmin = new BehaviorSubject<boolean>(
    false
  );
  readonly isAdmin$ = this._isAdmin.asObservable();

  readonly user$ = this._user.asObservable();

  private _error = new BehaviorSubject<any | null>(
    null
  );
  readonly error$ = this._error.asObservable();

  login(email: string, password: string) {
    const authReq = this.appwriteAPI.account.createEmailSession(email, password)

    return from(authReq).pipe(
        concatMap(() => this.appwriteAPI.account.get()),
      ).subscribe(user => {
        this._user.next(user)
      },error => {
        this._error.next(error);
      });
  }

  async isLoggedIn() {
    try {
      const user = await this.appwriteAPI.account.get();
      this._user.next(user);
      return true;
    } catch (e) {
      return false;
    }
  }

  async logout() {
    try {
      await this.appwriteAPI.account.deleteSession('current');
    } catch (e) {
      console.log(`${e}`);
    } finally {
      this.router.navigate(['/login']);
      this._user.next(null);
    }
  }

  IsLogged(): boolean {
    const userData = localStorage.getItem('cookieFallback');
    if(userData && userData !== "[]"){
      return true;
    }
    return false;
  }

  async getRole() {
    const roleReq = this.appwriteAPI.account.get()
    return from(roleReq).subscribe((user: any) => {
      console.log(user.prefs['role']);
      this._role.next(user.prefs['role'])
    },error => {
      this._error.next(error);
    });
  }

  async isAdmin() {
    const roleReq = this.appwriteAPI.account.get()
    return from(roleReq).subscribe((user: any) => {
      this._isAdmin.next(user.prefs['role'] === "admin")
    },error => {
      this._error.next(error);
    });
  }

}
