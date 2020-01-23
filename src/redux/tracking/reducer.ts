import {Tracker} from "../../model/tracker";
import {TrackingActions} from "./actions";
import {Reducer} from "redux";

export const initialState: Tracker[] = [];

export const TrackingReducer: Reducer<Tracker[]> = (state: Tracker[] = initialState, action) => {
    switch (action.type) {
        case TrackingActions.ADD: {
            return state;
        }
        case TrackingActions.REMOVE: {
            return state
        }
        case TrackingActions.UPDATE: {
            return state;
        }
        default: return state;
    }
};
