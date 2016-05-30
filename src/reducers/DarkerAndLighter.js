import * as Constants from '../constants'

const initialState = {
    theme: 'light',
    showRemoveAllBtn: false
};

export default function DarkerAndLighter(state = initialState, action) {
    switch (action.type) {
        case Constants.CHANGE_SHADE_THEME:
            return { ...state, theme: action.data };
        case Constants.SELECT_ALL_COLORS:
            console.error('DarkerAndLighter SELECT_ALL_COLORS');

            if (action.data.name === 'DarkerAndLighter') {
                return { ...state, showRemoveAllBtn: true };
            }
            else {
                return { ...state, showRemoveAllBtn: false  };
            }

        case Constants.REMOVE_ALL_COLORS:
            console.error('DarkerAndLighter REMOVE_ALL_COLORS');
            
            return { ...state, showRemoveAllBtn: false };
        case 'SET_SHADED_COLORS':
            return { ...state, shadedColors: action.data };
        default:
            return state;
    }
}