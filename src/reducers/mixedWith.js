const initialState = {
    showColorPicker: false,
    defaultColor: ''
};

export default function mixedWith(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_MIX_COLOR':
            return { ...state, mainColor: action.data };
        case 'TOGGLE_MIX_COLOR_PICKER':
            return { ...state, mainColor: action.data };
        default:
            return state;
    }
};