import React from 'react';
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div>
            <h2>{counter}</h2>
            <button
                className="btn btn-outline-primary btn-large"
                onClick={dec}
                >
                DEC</button>
            <button
                className="btn btn-primary btn-large"
                onClick={inc}
                >
                INC</button>
            <button
                className="btn btn-outline-warning"
                onClick={rnd}
                >
                RND</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        counter: state
    }
};

export default connect(mapStateToProps, actions)(Counter);