import { action } from 'typesafe-actions';
import {AuthenticationData, SignUpData} from "../../model/user";

export enum UserActions {
    SIGNIN, SIGNUP, LOGOUT
}

export const actions = {
    signIn: (authenticationData: AuthenticationData) => action(UserActions[UserActions.SIGNIN], authenticationData),
    signUp: (signUpData: SignUpData) => action(UserActions[UserActions.SIGNUP], signUpData),
    logOut: () => action(UserActions[UserActions.LOGOUT]),
};

