import { UPDATE_PLACEHOLDER, TOGGLE_EDITOR } from './types';

export const updatePlaceholder = (text) => {
  return {
    type: UPDATE_PLACEHOLDER,
    payload: text
  }
}

export const toggleEditor = () => {
  return {
    type: TOGGLE_EDITOR
  }
}
