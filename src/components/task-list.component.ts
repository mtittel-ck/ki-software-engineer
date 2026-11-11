import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: `
    <h2>Tasks ({{ tasks.length }})</h2>
    <button (click)="addTask()">Add task</button>
    <button (click)="removeTask('Finished task')">Remove finished task</button>
  `,
})
export class TaskListComponent {
  tasks = ['Prepare workshop', 'Review changes'];

  addTask(): void {
    const title = prompt('Task title');
    if (title !== null) {
      this.tasks.push(title);
    }
  }

  removeTask(title: string): void {
    const index = this.tasks.indexOf(title);
    this.tasks.splice(index, 1);
  }
}
