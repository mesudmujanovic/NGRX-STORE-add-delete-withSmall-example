import { Action } from "@ngrx/store";
import { ShoppingItem } from "../model/shoping-items.model";

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add item',
};

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    //odredjuje vrstu akcije
    constructor(public payload: ShoppingItem) { }
    //payload je nova stavka koja se dodaje
}

export type ShoppingAction = AddItemAction;