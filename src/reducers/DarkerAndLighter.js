const initialState = {
    theme: 'light',
    showRemoveAllBtn: false
};

export default function DarkerAndLighter(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_SHADE_THEME':
            console.error('DarkerAndLighter CHANGE_SHADE_THEME');
            return { ...state, theme: action.data };
        case 'SELECT_ALL_COLORS':
            console.error('DarkerAndLighter SELECT_ALL_COLORS');
            return { ...state, showRemoveAllBtn: true };
        case 'REMOVE_ALL_COLORS':
            console.error('DarkerAndLighter REMOVE_ALL_COLORS');
            return { ...state, showRemoveAllBtn: false };
        default:
            return state;
    }
}