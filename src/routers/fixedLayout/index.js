import React, { Component } from 'react'
import styles  from './fixed.less';
import CSSModules from 'react-css-modules';
/**
 * 主要是演示使用flex布局演示上下固定，中间滚动的效果
 */
class FixedLayout extends Component {
    render() {
        return (
            <div styleName = 'flex-root'>
               <div styleName = 'flex-header'>
                  <p>标题</p>
               </div>
               <div styleName = 'flex-main'>
                  <div>第一行内容</div>
                  <div>第二行内容</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>呃呃呃呃呃呃呃呃</div>
                  <div>这是底部</div>
               </div>
               <div styleName = 'flex-footer'>
                  <p>底部</p>
               </div>
            </div>
        )
    }
}

export default CSSModules(FixedLayout, styles);