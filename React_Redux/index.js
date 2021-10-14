console.log("From index.js")

// Redux has one store for entire application
// Responsiblity of Redux
// 1. Holds application state i.e. initial state
// 2. Allows access to state via getState() method
// 3. Allows state to be updated via dispatch(action)
// 4. Registers listners via    subscribe(listner)
// 5. Handles unregistering of listners via the function returned by subscribe(listner)

// Since we are using node we need to initilize redux 
const redux = require('redux')
// redux library gives method to create store.
const reduxStore=redux.createStore
// This defines the type
const BUY_CAKE = 'BUY_CAKE'
// 1. Holds application state i.e. initial state
const initialState = {
    numOfCakes: 10
}
//  Action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
// Reducer (It accepts state and action as argument and returns the next state of application)
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // since it is simple application it will work finr but if it is a complex application then it is required to make copy of initial state first before performing any action on it 
        case BUY_CAKE: return {
            ...state, // therefore we use spread operator to make copy of state object
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store= reduxStore(reducer)
// 2. Allows access to state via getState() method
console.log('Initial State== ', store.getState())
// 4. Registers listners via    subscribe(listner)
const unsubscribe= store.subscribe(()=> console.log('Updated state', store.getState()))
// 3. Allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()