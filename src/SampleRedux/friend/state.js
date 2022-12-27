import createReducer from "../common/createReducer";
import {MAX_SHOW_LIMIT, MAX_AGE_LIMIT} from "./common";

const ADD = "friend/ADD";
const REMOVE = "friend/REMOVE";
const EDIT = "friend/EDIT";
const SET_AGE_LIMIT = 'friend/SET_AGE_LIMIT';
const SET_SHOW_LIMIT = 'friend/SET_SHOW_LIMIT';

export const addFriend = (friend) => ({ type: ADD, friend });
export const removeFriend = (friend) => ({ type: REMOVE, friend });
export const editFriend = (friend) => ({ type: EDIT, friend });
export const setAgeLimit = (ageLimit) => ({ type: SET_AGE_LIMIT, ageLimit });
export const setShowLimit = (showLimit) => ({ type: SET_SHOW_LIMIT, showLimit });

const INITIAL_STATE = {
  friends: [],
  ageLimit: MAX_AGE_LIMIT,
  showLimit: MAX_SHOW_LIMIT
};

const reducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.friends.push(action.friend),
  [REMOVE]: (state, action) =>
    (state.friends = state.friends.filter(
      (friend) => friend.id !== action.friend.id
    )),
  [EDIT]: (state, action) => {
    const index = state.friends.findIndex(
      (friend) => friend.id === action.friend.id
    );
    if (index >= 0) {
      state.friends[index] = action.friend;
    }
  },
  [SET_AGE_LIMIT] : (state, action) => (state.ageLimit = action.ageLimit),
  [SET_SHOW_LIMIT] : (state, action) => (state.showLimit = action.showLimit),
});

export default reducer;


/*
*  reducer에는 3개의 액션 코드가 있음. ADD, REMOVE, EDIT
*  REMOVE일때는 해당 ID 값에 해당하는 ID값을 제거.
*  EDIT 일때는 해당하는 친구 정보를 수정.
* */