const initialState = {
    selectedColors: []
};

export default function common(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_COLOR':
            console.error('common SELECT_COLOR');
            const selectedColors = state.selectedColors.concat([action.data]);
            return { ...state, selectedColors };
        case 'REMOVE_COLOR':
            console.error('REMOVE_COLOR');
            return { ...state  };
        case 'SELECT_ALL_COLORS':
            console.error('SELECT_ALL_COLORS');
            return { ...state };
        case 'REMOVE_ALL_COLORS':
            console.error('REMOVE_ALL_COLORS');
            return { ...state };
        default:
            return state;
    }
}