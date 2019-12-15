import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';
import { Gestor } from '../models/gestor';
import { GestorService } from '../services/gestor.service';
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-criar-gestor',
  templateUrl: './criar-gestor.component.html',
  styleUrls: ['./criar-gestor.component.css']
})
export class CriarGestorComponent implements OnInit {

  gestorId: String;
  gestor: Gestor = new Gestor("","","","","");
  editar: boolean;

  constructor(private service: GestorService, private router: Router) {

    if (localStorage.getItem('gestorId')) {
      this.gestor.id = localStorage.getItem('gestorId');
      this.getGestor(this.gestor.id);
      this.editar = true;
    } else {
      this.gestor.id = null;
      this.editar = false;
    }

  }

  ngOnInit() {
  }

  getGestor(id: string){
    this.service.getGestor(id).subscribe(data => {
      this.gestor= data;
    });
  }

  cadastrar(){
    alert("Cadastro realizado!!!!");
    this.service.postGestor(this.gestor);
    this.router.navigate(['gestor']);
  }

  atualizar(){
    alert("Cadastro atualizado!!!!");
    this.service.putGestor(this.gestor);
    this.router.navigate(['gestor']);
    (async () => { 
      // Do something before delay
      await delay(1000);

      // Do something after
      location.reload();
  })();
  }

}
