import React from 'react';


const loadState = () => {
    try {
        const sessionState = sessionStorage.getItem('state')

        if(sessionState != null){
            return JSON.parse(sessionState);
        }

        return {
            items: []
        }
        
    } catch (error) {
        return {
            items: []
        };
    }

    return {
        items: []
    };

};

const initialState = loadState()



export const saveToSession = (state) => {
    console.log(state)
    try {
        sessionStorage.setItem('state', JSON.stringify(state))
        
    } catch (error) {
        console.log(error)
    }
}

 export const CartReducer = (state = initialState, action) => {

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

