import React, { Component } from 'react'
import styles  from './reactsvg.less';
import CSSModules from 'react-css-modules';
import ReactSVG from 'react-svg';
import {message} from 'antd';
/**
 * https://www.npmjs.com/package/react-svg
 *http://www.runoob.com/svg/svg-reference.html
className="example"
wrapperClassName="example-wrapper-classname"
 */
class ReactSvg extends Component {
    svgClick = (e)=>{
        message.info('点中了svg');
    }
    render() {
        return (
            <div>
              <p styleName = 'appText'>react-svg</p>
              <div styleName = 'svgDiv' onClick = {this.svgClick}>
                <ReactSVG
                    path="../../svg/rect.svg"
                    callback={svg => console.log(svg)}
                    evalScript="always"
                    style={{width: 160,height:60,backgroundColor:'red'}}
                />
              </div>
            </div>
        )
    }
}

export default CSSModules(ReactSvg, styles);