import { TOGGLE_COMP_HEADER } from '../../actions/types';

export const toggleCompHeader = name => {
  return {
    type: TOGGLE_COMP_HEADER,
    payload: name
  }
}
