import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myobj: any;
  id: any;
  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  ngOnInit() {
    this.getData();
    this.myobj = { title: '', description: '', completed: false };
  }
  getTask(id) {
      let observable2 = this.http.findOne(id);
      observable2.subscribe(data => {
        this.myobj = data;
        console.log(this.myobj);
      })
  }
getData() {
  let observable = this.route.params.subscribe(data => {
    this.id = data['id'];
    this.getTask(this.id);
  })
}

submitForm() {
      let observable = this.http.edit(this.myobj);
      observable.subscribe(data => {
        console.log(data);
        this.router.navigate(['/'])
      })
    }
}
