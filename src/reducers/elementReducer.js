const defaultState = {
    elements: [],
    selectedElement: 0,
    selected: false
}

export const elementReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'elements':
            return {
                ...state,
                elements: action.elements
            }
        case 'selectedElement' : 
            return {
                ...state,
                selectedElement: action.selectedElement
            }
        case 'setSelected': 
            return {
                ...state,
                selected: action.selected
            }
        default: 
            return state;
    }
}