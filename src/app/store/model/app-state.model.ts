import { ShoppingItem } from "./shoping-items.model";

export interface AppState {
    readonly shopping:Array<ShoppingItem>;
    //readonly znaci da se svojsto ne sme menjati direktno vec samo putem akcija se salju reduceru
    //
};
//idi u AppMoudel pogledaj imports