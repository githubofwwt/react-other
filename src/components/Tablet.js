import React, { Component } from 'react'
import Responsive from 'react-responsive';
/**
 * 手提电脑设备组件
 */
export default class Tablet extends Component {
    render() {
        return (
          <Responsive {...this.props} minWidth={768} maxWidth={991} />
        )
    }
}