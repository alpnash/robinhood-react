// @flow

import React, { Component } from 'react';
import Router, { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from './common/Header';

export default class App extends Component {
  render() {
    const {children} = this.props;

    return (
      <div>
        <Header />
          <div className='container'>
            <h1>Robinhood</h1>
          </div>
      </div>
    );
  }
}
