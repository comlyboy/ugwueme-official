import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fuuga-voter-register',
  templateUrl: './fuuga-voter-register.component.html',
  styleUrls: ['./fuuga-voter-register.component.scss']
})
export class FuugaVoterRegisterComponent implements OnInit {

  constructor() { }



  onRegisterVoter(form: NgForm) {

    const registrationData: any = {
      firstName: form.value.inputFirstName,
      surName: form.value.inputSurName,
      schoolName: form.value.inputSchool,
      schLevel: form.value.inputSchLevel,
      password: form.value.inputPassword1
    }
  }

  ngOnInit(): void {
  }

}
