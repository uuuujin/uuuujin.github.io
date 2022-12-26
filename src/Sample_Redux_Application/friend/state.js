import createReducer from "../common/createReducer";

const ADD = 'friend/ADD';
const REMOVE = 'friend/REMOVE';
const EDIT = 'friend/EDIT';

export const addFriend = friend => ({type : ADD, friend});
export const removeFriend = friend => ({type : REMOVE, friend});
export const editFriend = friend => ({type : EDIT, friend});

const INITIAL_STATE = { friends : []};

const reducer = createReducer(INITIAL_STATE, {
    [ADD] : (state, action) => state.friend.push(action.friend),
    [REMOVE] : (state, action) =>
        (state.friend = state.friend.filter(
            friend => friend.id !== action.friend.id,
        )),
    [EDIT] : (state, action) => {
        const index = state.friend.findIndex(
            friend => friend.id === action.friend.id,
        );
        if (index >= 0) {
            state.friend[index] = action.friend;
        }
    }
});

export default reducer;

/*
*  reducer에는 3개의 액션 코드가 있음. ADD, REMOVE, EDIT
*  REMOVE일때는 해당 ID 값에 해당하는 ID값을 제거.
*  EDIT 일때는 해당하는 친구 정보를 수정.
* */