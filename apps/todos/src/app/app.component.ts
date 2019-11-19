import { Component } from '@angular/core'

interface Todo {
  title: string
}

@Component({
  selector: 'bambu-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }]
}
