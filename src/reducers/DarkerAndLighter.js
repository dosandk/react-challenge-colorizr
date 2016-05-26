const initialState = {
    theme: 'light',
    showRemoveAllBtn: false
};

export default function DarkerAndLighter(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_THEME':
            console.error('CHANGE_THEME');
            return { ...state  };
        default:
            return state;
    }
}