import { createStore } from 'redux';

const defaultState = {
    elements: [],
    selectedElement: 0,
    selected: false
}

const elementReducer = (state = defaultState, action) => {
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
        case 'editDetail':
            let modElements = state.elements;
            switch(action.detail){
                case 'address':
                    modElements[action.selectedElement][action.detail]['street_address'] = action.newInfo;
                    break;
                case 'city':
                    modElements[action.selectedElement]['address']['city'] = action.newInfo;
                    break;
                case 'state':
                    modElements[action.selectedElement]['address']['state'] = action.newInfo;
                    break;
                case 'employment':
                    modElements[action.selectedElement]['employment']['title'] = action.newInfo;
                    break;
                default: 
                 modElements[action.selectedElement][action.detail] = action.newInfo;
            }
            return {
                ...state,
                elements: [...modElements]
            }
        default: 
            return state;
    }
}

const store = createStore(elementReducer);

export default store; 