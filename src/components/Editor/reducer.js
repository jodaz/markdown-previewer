import { UPDATE_PLACEHOLDER } from './types';
import placeholder from '../../utils/placeholder';

export default (state = { placeholder }, action) => {
  switch (action.type) {
    case UPDATE_PLACEHOLDER:
      return {
        ...state,
        placeholder: action.payload
      }
    default:
      return state;
  }
}
