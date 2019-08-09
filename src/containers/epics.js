import { combineEpics } from 'redux-observable';
import mainEpic from './Main/epic';

export default combineEpics(mainEpic);
