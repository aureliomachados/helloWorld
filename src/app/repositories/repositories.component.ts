import { Component, OnInit } from '@angular/core';
import { RepositoryService} from '../repository.service';
import { Repository } from '../repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories: Repository[];

  constructor(private repositoryService: RepositoryService ) {
    this.repositoryService.loadRepositories()
        .subscribe(repositories => { this.repositories = repositories});
  }

  ngOnInit() {
  }



}
