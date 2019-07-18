import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

// Create root reducer
import placeholderReducer from './components/Editor/reducer';
import titleHeaderReducer from './components/TitleHeader/reducer';

const rootReducer = combineReducers({
  text: placeholderReducer,
  toggle: titleHeaderReducer
})

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
       // Apply after updating redux-devtools extension package
      // applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
