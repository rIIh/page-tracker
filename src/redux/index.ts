import {combineReducers} from "redux";
import {UserReducer} from "./user/reducer";
import {TrackingReducer} from "./tracking/reducer";
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from "history";
import {User} from "../model/user";
import {Tracker} from "../model/tracker";

export interface ApplicationState {
    user: User | null,
    trackers: Tracker[],
    router: RouterState,
}

export const createRootReducer = (history: History) => combineReducers({
        user: UserReducer,
        trackers: TrackingReducer,
        router: connectRouter(history),
    }
);
