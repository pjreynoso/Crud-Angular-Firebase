import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular CRUD';

  msg: string = ""

  employees = [
    { 'name': 'Pablo Reynoso', position: 'Ingeniero', email: 'p.reynoso.mena@gmail.com' },
    { 'name': 'Juan Rulfo', position: 'Escritor', email: 'juanrulfo@gmail.com' },
    { 'name': 'Ressendi', position: 'Pintor', email: 'ressendi@gmail.com' }
  ]

  model: any = {

  }

  model2: any = {

  }

  closeAlert(): void {
    this.msg = ""
  }

  addEmployee(): void {
    console.log("AGREGANDO")
    this.employees.push(this.model)
    this.msg = "Added Field"
    setTimeout(
      () => {
        this.msg = ""
      }
      , 3000)
  }

  deleteEmployee(i): void {
    var answer = confirm('Are you want delete?')
    if (answer) {
      this.employees.splice(i, 1)
      this.msg = "Deleted Field"
      setTimeout(
        () => {
          this.msg = ""
        }
        , 3000)
    }
  }

  myValue;
  editEmployee(i): void {
    this.model2.name = this.employees[i].name
    this.model2.position = this.employees[i].position
    this.model2.email = this.employees[i].email
    this.myValue = i;

  }

  updateEmployee(): void {
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j) {
        this.employees[i] = this.model2
        this.model2 = {}
        this.msg = "Updated Field"
        setTimeout(
          () => {
            this.msg = ""
          }
          , 3000)
      }
    }
  }
}
