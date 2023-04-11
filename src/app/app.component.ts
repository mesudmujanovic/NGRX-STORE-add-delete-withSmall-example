import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/model/app-state.model';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/model/shoping-items.model';
import { AddItemAction, DeleteItemAction } from './store/actions/shopping.actions'; import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  shoppingItems$: Observable<Array<ShoppingItem>>;
  newShoppingItem: ShoppingItem = { id: '', name: '' };

  constructor(private store: Store<AppState>,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping);
    this.myForm = this.fb.group({
      name: ["", Validators.required],
      id: ["", Validators.required]
    });
  };

  addItem() {
    const newShoppingItem: ShoppingItem = { id: this.myForm.value.id, name: this.myForm.value.name };
    this.store.dispatch(new AddItemAction(newShoppingItem));
    this.myForm.reset();
  }

  deleteItem(id:string){
    this.store.dispatch(new DeleteItemAction(id))
  };
}