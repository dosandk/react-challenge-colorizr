const initialState = {
    mainColor: '#3B97D3'
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_COLOR':
        return { ...state, mainColor: action.data };
    case 'SELECT_COLOR':
        return { ...state, mainColor: action.data };
    default:
        return state;
    }
};