import React from 'react';

const initialState = {
    items: []
}

 const CartReducer = (state = initialState, action) => {

    switch(action.type){
        case 'ADD_TO_CART':
        return {...state,
                items: [...state.items, action.name] 
            };
        case 'REMOVE_FROM_CART':
            return {...state.items.map(item => item.title !== action.payload)};
        // case 'CHANGE_QUANTITY':
        //     // return {...state.items.map(item => {
        //     //         item.title !== action.payload.title ? {...item,quantity: action.payload.quantity} : {item}
        //     // })
        //     //     };
    }
    return state
};

export default CartReducer;