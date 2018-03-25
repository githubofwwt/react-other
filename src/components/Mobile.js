import React, { Component } from 'react'
import Responsive from 'react-responsive';
/**
 * 手机组件
 */
export default class Mobile extends Component {
    render() {
        return (
          <Responsive {...this.props} maxWidth={767} />
        )
    }
}