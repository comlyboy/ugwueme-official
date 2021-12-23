import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fuuga-vote-cast',
  templateUrl: './fuuga-vote-cast.component.html',
  styleUrls: ['./fuuga-vote-cast.component.scss']
})
export class FuugaVoteCastComponent implements OnInit {

  constructor() { }

  onSubmit(form: NgForm) {

    const secret = form.value.inputSecret.toLowerCase()

    console.log(secret)
  }

  ngOnInit(): void {
  }

}
