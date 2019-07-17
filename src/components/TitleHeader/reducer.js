import chnToggler from '../../utils/chnToggler';
import { TOGGLE_COMP_HEADER } from './types';

const titleHeader = {
  'editor': false,
  'previewer': false
}

const initialState = {
  titleHeader
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COMP_HEADER:
      // Trigger a toggler update
      
      return {
        ...state,
        titleHeader: chnToggler(titleHeader, action.payload)
      }
    default:
      return state;
  }
};
