import {action, createAsyncAction} from 'typesafe-actions';
import {Tracker} from "../../model/tracker";

export enum TrackingActions {
    ADD, REMOVE, UPDATE,
    FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILED
}

export const actions = {
    create: (tracker: Tracker) => action(TrackingActions[TrackingActions.ADD], tracker),
    remove: (id: number) => action(TrackingActions[TrackingActions.ADD], id),
    update: (id: number, tracker: Tracker) => action(TrackingActions[TrackingActions.ADD], id, tracker),
    fetch: createAsyncAction(
        TrackingActions[TrackingActions.FETCH_USERS],
        TrackingActions[TrackingActions.FETCH_USERS_SUCCESS],
        TrackingActions[TrackingActions.FETCH_USERS_FAILED])<string, Tracker[], Error>()
};
