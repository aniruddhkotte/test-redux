const reducer = (state = {}, action) => {
    switch(action.type) {
        case 'getPatients':
            state = action.payload;
            console.log(state);
            return state;
        default:
            return state;
    }
}

export default reducer;