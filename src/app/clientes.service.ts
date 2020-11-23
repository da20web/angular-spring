import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http : HttpClient ) { 

  }

  salvar( cliente: Cliente) : Observable<Cliente> {
    //return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
    return this.http.post<Cliente>('https://da20web-spring-boot.herokuapp.com/api/clientes', cliente);
  }

  atualizar( cliente: Cliente) : Observable<any> {
    //return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
    return this.http.put<Cliente>(`https://da20web-spring-boot.herokuapp.com/api/clientes/${cliente.id}`, cliente);
  }

  getClientes() : Observable<Cliente[]> {
    //return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
    return this.http.get<Cliente[]>('https://da20web-spring-boot.herokuapp.com/api/clientes');
  }

  getClienteById(id: number) : Observable<Cliente> {
    //return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
    return this.http.get<any>(`https://da20web-spring-boot.herokuapp.com/api/clientes/${id}`);
  }

  deletar( cliente: Cliente) : Observable<any> {
    //return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
    return this.http.delete<any>(`https://da20web-spring-boot.herokuapp.com/api/clientes/${cliente.id}`);
  }

  
}
