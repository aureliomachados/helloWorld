import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  title = "Lista de cursos"
  cursos: any;

  constructor(cursoService: CursoService) {
    this.cursos = cursoService.getCursos();
  }

  ngOnInit() {
  }

}
