const ADD_COORD = "ADD_COORD";

export function addCoordAction(image) {
    return {
        type: ADD_COORD,
        x: image.x,
        y: image.y
    };
}

const initialState = {images: []};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COORD:
            const newState = {...state, images: [...state.images, action.image]};
            return newState;
        default:
            return state;
    }
}
