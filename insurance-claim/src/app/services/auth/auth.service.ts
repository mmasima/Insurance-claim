import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private readonly baseUrl = 'http://localhost:8080/api/auth';

    constructor(private http: HttpClient) {}

    signUp(userData: { username: string; email: string; password: string }): Observable<any> {
        return this.http.post(`${this.baseUrl}/register.php`, userData);
    }

    login(credentials: { email: string; password: string }): Observable<any> {
        return this.http.post(`${this.baseUrl}/login.php`, credentials).pipe(
            tap((response: any) => {
                if (response && response.user) {
                    localStorage.setItem('user_id', response.user[0].id);
                    localStorage.setItem('username', response.user[0].username);
                    localStorage.setItem('email', response.user[0].email);
                }
            })
        );
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('user_id');
    }

    logout(): void {
        localStorage.removeItem('user_id');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
    }
}
