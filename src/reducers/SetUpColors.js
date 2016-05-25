const initialState = {
    mainColor: '#3B97D3'
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, mainColor: action.data };
        case 'SELECT_COLOR':
            console.error('SELECT_COLOR');
            return { ...state  };
        case 'SELECT_ALL_COLORS':
            return { ...state, mainColor: action.data };
        case 'REMOVE_ALL_COLORS':
            return { ...state, mainColor: action.data };
        case 'CHANGE_THEME':
            return { ...state, mainColor: action.data };
        default:
            return state;
    }
};