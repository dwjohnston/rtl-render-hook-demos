import { call, put, takeEvery } from 'redux-saga/effects'
import { createAction } from '@reduxjs/toolkit';

import { dataSlice } from './slice';


export async function getData() : Promise<{data: string}>{

    return new Promise(res => setTimeout(() => res({
        data: "foo"
    }), 1000));
}

function* fetchDataSaga(action) {
    try {
        
      const result = yield call(getData); 
      yield put(dataSlice.actions.success(result.data))
    } catch (e) {
      console.error(e);
    }
  }
  

  function* mySaga() {
    yield takeEvery(requestDataAction, fetchDataSaga)
  }

  export const requestDataAction = createAction("REQUEST_DATA");  
  
  export default mySaga; 
