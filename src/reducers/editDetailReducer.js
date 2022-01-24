const defaultState = {
    elements: [],
    selectedElement: 0,
    selected: false
}

export const editDetailReducer = (state=defaultState, action) => {
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
}
