import { Component, OnInit } from '@angular/core';
import { GestorService } from '../services/gestor.service';
import { Gestor } from '../models/gestor'
import { Router } from '@angular/router';
import { delay } from 'q';

@Component({
  selector: 'app-gestor',
  templateUrl: './gestor.component.html',
  styleUrls: ['./gestor.component.css']
})
export class GestorComponent implements OnInit {

  constructor(private service: GestorService, private router: Router) { }

  public gestores: Gestor[];
  

  ngOnInit() {

    this.getGestores();

    // var urlParams = [];
    // window.location.search.replace("?", "").split("&").forEach(function (e, i) {
    //     var p = e.split("=");
    //     urlParams[p[0]] = p[1];
    // });

    // // We have all the params now -> you can access it by name
    // console.log(urlParams["loaded"]);

    // if(urlParams["loaded"]) {}else{

    //     let win = (window as any);
    //     win.location.search = '?loaded=1';
    //     //win.location.reload('?loaded=1');
    // }
    
  }

  getGestores() {

    this.service.getGestores().subscribe(data => {
      this.gestores = data;
    });

  }

  criar(id?: string) {
    localStorage.removeItem("gestorId");
    this.router.navigate(['criar-gestor']);
  }

  editar(id: string) {
    localStorage.removeItem("gestorId");
    localStorage.setItem("gestorId", id.toString());
    this.router.navigate(['criar-gestor']);
  }

  excluir(id: string) {
    console.log(id)
    this.service.deleteGestor(id);

    (async () => { 
      // Do something before delay
      await delay(1000);

      // Do something after
      location.reload();
  })();
  }

}
