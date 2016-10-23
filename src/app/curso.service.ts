import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  constructor() { }

  getCursos(){
    return ['Java', 'Ext JS', 'AngularJS 2', 'PHP', 'Laravel', 'Python', 'Groovy', 'Ruby'];
  }
}
