import { UPDATE_PLACEHOLDER, TOGGLE_COMP_HEADER } from './types';

export const updatePlaceholder = text => {
  // Set markdown text to ls
  localStorage.setItem('markdown', text);

  return {
    type: UPDATE_PLACEHOLDER,
    payload: text
  }
}

export const toggleCompHeader = name => {
  return {
    type: TOGGLE_COMP_HEADER,
    payload: name
  }
}
