export const editDetail = (selectedElement, detail, newInfo) => {
    return {
      type: 'editDetail',
      selectedElement: selectedElement,
      detail: detail,
      newInfo: newInfo
    }
  }