import React, { Component } from 'react'
import Responsive from 'react-responsive';
/**
 * 电脑设备组件
 */
export default class Desktop extends Component {
    render() {
        return (
          <Responsive {...this.props} minWidth={992} />
        )
    }
}