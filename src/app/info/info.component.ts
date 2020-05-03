import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../services/data.services';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  users: User[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => this.users = data);
  }
}
