import React, { Component } from 'react'
import styles  from './reactresponse.less';
import CSSModules from 'react-css-modules'
import Desktop from '../../components/Desktop'
import Tablet from '../../components/Tablet'
import Mobile from '../../components/Mobile'
/**
 * https://github.com/contra/react-responsive
 * https://github.com/contra/react-responsive/blob/master/src/mediaQuery.js#L9
 * @param {*} props
 */

class ReactResponse extends Component {
    componentDidMount() {
        //动态计算字体的大小
        // window.onresize=function(){
        //     var html=document.getElementsByTagName("html")[0];
        //     var width=window.innerWidth;
        //     var font_Size=16/1920*width;
        //     html.style.fontSize=font_Size+"px";
        // };
    }
    render() {
        return (
            <div styleName = 'container'>
                <div styleName = 'container'>
                    <p styleName = 'appText'>react-response</p>
                    <Desktop>电脑或手提电脑</Desktop>
                    <Tablet>平板电脑</Tablet>
                    <Mobile>手机</Mobile>
                    <p styleName = 'gColor'>测试使用全局样式</p>
                    <div styleName = 'list'>
                        <img src="../../imgs/mm1.jpg" styleName='image' alt = '演示图'/>
                        <span styleName='content'>
                            由于Android4.4才开始支持vw单位，所以，基于视区宽度的排版和布局迟迟没有火起来，但是，显然，快了
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(ReactResponse, styles);