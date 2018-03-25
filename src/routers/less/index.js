import React, { Component } from 'react'
import styles  from './less.less';
import CSSModules from 'react-css-modules'
import { Button,message } from 'antd';
import $ from 'jquery';
class Less extends Component {
  selectElement=()=> {
      //console.log('text对象：',$('.text'));
      //console.log('text中的值：',$('.text')[0].textContent);
      message.info($('.text')[0].textContent)
    }
    render() {
        return (
            <div>
               <p className="text" styleName = 'textColor'>less的颜色</p>
               <Button onClick={this.selectElement}>点击一下</Button>
            </div>
        )
    }
}

export default CSSModules(Less, styles);