import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { fetchMessages } from './message/messageSlice';
// import messageSlice from './message/messageSlice';
import messageReducer from './store/message';

const rootreducer = combineReducers({ messageReducer });

const store = configureStore({
  reducer: rootreducer,
});

export default store;
