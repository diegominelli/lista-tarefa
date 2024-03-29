import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from '../../component/input-add-item/input-add-item.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public addItem = signal(true);
}
