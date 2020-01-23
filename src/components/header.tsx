import React from "react";
import '../styles/blocks/header.scss';
import FontAwesome from "react-fontawesome";
import {connect} from "react-redux";
import {ApplicationState} from "../redux";
import {User} from "../model/user";
import {Link} from "react-router-dom";

interface PropsFromState {
    authorized: boolean;
    user?: User | null;
}

export const _Header: React.FC<PropsFromState> = ({ authorized, user }) => {
    return <div className="header">
        <div className="header__left">
            <Link to="/">
                <h1>Page Tracker</h1>
            </Link>
        </div>
        <div className="header__right">
            { authorized &&
            <button>
                <FontAwesome className="header__profile" name="user" size="2x"/>
            </button> }
            { !authorized &&
            <>
                <Link to="/signin">
                    <button className="button">Sign in</button>
                </Link>
                <Link to="/signup">
                    <button className="button">Sign up</button>
                </Link>
            </> }
        </div>
    </div>;
};

const mapStateToProps = ({ user }: ApplicationState): PropsFromState => ({
    authorized: user !== null,
    user: user,
});

export const Header = connect(mapStateToProps)(_Header);
