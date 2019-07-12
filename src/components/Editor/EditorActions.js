import { UPDATE_PLACEHOLDER } from '../../actions/types';

export const updatePlaceholder = text => {
  // Set markdown text to ls
  localStorage.setItem('markdown', text);

  return {
    type: UPDATE_PLACEHOLDER,
    payload: text
  }
}
