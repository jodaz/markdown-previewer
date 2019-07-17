import { TOGGLE_COMP_HEADER } from './types';

export const toggleCompHeader = name => {
  return {
    type: TOGGLE_COMP_HEADER,
    payload: name
  }
}
