import { Component, OnInit, Input } from '@angular/core'
import { Todo } from '@bambu-workspace/data'

@Component({
  selector: 'bambu-workspace-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[]

  constructor() {}

  ngOnInit() {}
}