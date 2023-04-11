import { ShoppingItem } from "../model/shoping-items.model";
import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";

const initialState: Array<ShoppingItem> = [
    {
        id: '1775935f',
        name: 'Diec Coke'
    },
];
//pocetno stanje

//uzima pocetno stanje i dodaje action sledece stanje itd...
//state je Array<ShopingItem koji ima id i name u ovom slucaju> koji je jedna intialState
//action uzima shopingActions iz shoppActions.ts
export function ShoppingReducer(
    state: Array<ShoppingItem> = initialState,
    action: ShoppingAction,
) {
    switch (action.type) {
        //swhitch vrsta akcije je ako se poklopi sa ShoppingActionTypes.ADD_ITEM a hoce jer je type iz actionts.ts zapravo ShoppingActionTypes.ADD_ITEM
        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        //...state (vraca sve stavke), action.payload(plus vraca nove koja je prosledjena)
        default:
            return state;
        //ako se ne ispuni prvi uslov vraca state tj intialState ono sto ima
    }
}