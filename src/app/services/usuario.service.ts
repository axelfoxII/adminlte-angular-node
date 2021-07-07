import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterForm } from '../interfaces/register-form.interface';
import {LoginForm} from '../interfaces/login-from.interface'
import { environment } from '../../environments/environment';
import {tap} from 'rxjs/operators';


//Contiene nuestra ruta del servidor http://localhost:3000
const URL = environment.urlServer;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  newUsuario(formData:RegisterForm){

    return this.http.post(`${URL}/usuarios`, formData, {responseType: 'text'});


  }

  login(formData:LoginForm){

    return this.http.post(`${URL}/auth/login`, formData).pipe(tap((res:any)=>{
      localStorage.setItem('token',res.token);
    }));


  }
}
