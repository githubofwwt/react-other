import React, { Component } from 'react'
import { Player,ControlBar,BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import styles  from './vedio.css';
import CSSModules from 'react-css-modules'
/**
 *video-react:使用参考：
 https://github.com/video-react/video-react
 https://video-react.js.org/  设计api的使用
 https://video-react.js.org/components/player/
 */
class Vedio extends Component {
    render() {
        return (
            <div>
              <p styleName = 'appText'>vedio界面</p>
              <div styleName = 'player-size'>
                  <Player
                    autoPlay = {true}
                  >
                    <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    {/* 可以将播放按钮隐藏掉 */}
                    <BigPlayButton position="center" className='big-play-button-hide' />
                    <ControlBar autoHide={false} disableDefaultControls={true}>
                      <div styleName = 'barStyle'>说明控制条是可以自定义的</div>
                    </ControlBar>
                  </Player>
              </div>

            </div>
        )
    }
}

export default CSSModules(Vedio, styles);