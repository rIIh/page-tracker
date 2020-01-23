import {Tracker} from "./tracker";

export interface User {
    username: string;
    trackers: Tracker[]
}

export interface Unauthorized {}

export interface AuthenticationData {
    username: string;
    password: string;
}

export interface SignUpData {
    username: string;
    email: string;
    password: string;
}
