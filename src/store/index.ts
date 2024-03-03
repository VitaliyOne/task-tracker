import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import tasksReducer from './reducers/tasks';

const rootReducer = combineReducers({
  tasks: tasksReducer
});

const persistConfig = {
  key: 'root',
  storage: storageSession
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const storePersistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
