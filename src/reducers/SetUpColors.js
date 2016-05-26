const initialState = {
    mainColor: '#3B97D3'
};

export default function SetUpColors(state=initialState, action) {
    switch (action.type) {
    // case 'REMOVE_COLOR':
    //     console.error('REMOVE_COLOR');
    //     return { ...state };
    default:
        return state;
    }
}