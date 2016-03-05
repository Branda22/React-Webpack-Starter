import { combineReducers } from 'redux';
import NamesReducer from './reducer_names'


const rootReducer = combineReducers({
	names: NamesReducer
});

export default rootReducer;