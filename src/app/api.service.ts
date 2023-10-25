import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from './app.types';

@Injectable({providedIn: 'root'})
export class ApiService {
    constructor(private http: HttpClient) { }
    
    getAuthors() {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          });
        return this.http.get<Author[]>('http://localhost:3000/authors', {
          headers
        });
    }

    getAuthorWithBooks(nombre: string, apellido: string) {
        const headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          });
        return this.http.get<Author[]>('http://localhost:3000/authors/books?nombre=' + nombre +'&apellido=' + apellido, {
          headers
        });
    }
}