import chnToggler from '../../utils/chnToggler';
import { TOGGLE_COMP_HEADER } from './types';

const titleHeader = {
  'editor': false,
  'previewer': false
};

export default (state = { titleHeader }, action) => {
  switch (action.type) {
    case TOGGLE_COMP_HEADER:
      return {
        ...state,
        titleHeader: chnToggler(titleHeader, action.payload)
      }
    default:
      return state;
  }
};
