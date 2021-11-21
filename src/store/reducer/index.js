const ADD_COORD = "ADD_COORD";
const UNDO_DRAW = "UNDO_DRAW";

export function addCoordAction(image) {
    return {
        type: ADD_COORD,
        drawCoords: image
    };
}

export function undoAction() {
    return {
        type: UNDO_DRAW
    };
}

const initialState = {images: []};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COORD:
            const newState = {...state, images: [...state.images, action.drawCoords]};
            return newState;
        case UNDO_DRAW:
            state.images.pop();
            return {...state, images: [...state.images]};
        default:
            return state;
    }
}
