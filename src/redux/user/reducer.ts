import {UserActions} from "./actions";
import {User} from "../../model/user";
import {Reducer} from "redux";
import {Firebase} from "../../firebase/firebase.config";

export const UserReducer: Reducer<User | null> = (state = null, action) => {
    switch (action.type) {
        case UserActions.SIGNUP: {
            return action.payload;
        }
        case UserActions.LOGOUT: {
            return null;
        }
        case UserActions.SIGNIN: {
            return action.payload;
        }
        default: return state;
    }
};
