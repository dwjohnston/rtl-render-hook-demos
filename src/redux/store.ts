import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'
import { counterSlice, dataSlice } from './slice';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(sagaMiddleware),
  reducer: {
    data: dataSlice.reducer,
    counter: counterSlice.reducer,

  },
})
sagaMiddleware.run(mySaga)

export default store; 