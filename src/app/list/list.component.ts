import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users! : FormBuilder;



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.formBuilder.getAll()
            //.pipe(first())
            //.subscribe(((data: any) =>{ this.users = data}));

    }

  }

function first(): any {
  throw new Error('Function not implemented.');
}

