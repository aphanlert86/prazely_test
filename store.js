import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const exampleInitialState = {
  userImageUrl: "/static/images/Ben_man-512.png"
};

export const actionTypes = {
  CHANGE_USER_IMAGE: "CHANGE_USER_IMAGE"
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER_IMAGE:
      return Object.assign({}, state, {
        userImageUrl: action.imageUrl
      });
    default:
      return state;
  }
};

// ACTIONS
export const changeImageUrl = url => dispatch => {
  return dispatch({ type: actionTypes.CHANGE_USER_IMAGE, imageUrl: url });
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
