const ADD_COORD = "ADD_COORD";

export function addCoordAction(image) {
    return {
        type: ADD_COORD,
        drawCoords: image
    };
}

const initialState = {images: []};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COORD:
            const newState = {...state, images: [...state.images, action.drawCoords]};
            return newState;
        default:
            return state;
    }
}
