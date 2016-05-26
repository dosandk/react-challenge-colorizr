const initialState = {
    theme: 'light',
    showRemoveAllBtn: false,
    showColorPicker: false,
    defaultColor: '#894B9D'
};

export default function mixedWith(state = initialState, action) {
    switch (action.type) {
    case 'CHANGE_MIX_COLOR':
        console.error('CHANGE_MIX_COLOR');
        return { ...state };
    case 'TOGGLE_MIX_COLOR_PICKER':
        console.error('TOGGLE_MIX_COLOR_PICKER');
        return { ...state };
    case 'mixedWith SELECT_COLOR':
        console.error('SELECT_COLOR');
        return { ...state  };
    case 'REMOVE_COLOR':
        console.error('REMOVE_COLOR');
        return { ...state  };
    case 'SELECT_ALL_COLORS':
        console.error('SELECT_ALL_COLORS');
        return { ...state };
    case 'REMOVE_ALL_COLORS':
        console.error('REMOVE_ALL_COLORS');
        return { ...state };
    case 'CHANGE_THEME':
        console.error('CHANGE_THEME');
        return { ...state  };
    default:
        return state;
    }
}