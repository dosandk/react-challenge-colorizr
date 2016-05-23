const initialState = {
    riba: 'riba'
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
    case 'STATE-1':
        return { ...state, field: 'state-1'};
    case 'STATE-2':
        return { ...state, field: 'state-2'};
    default:
        return state;
    }
};