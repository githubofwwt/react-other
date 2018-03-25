import React, { Component } from 'react'
import styles  from './ant.less';
import CSSModules from 'react-css-modules';
import { Button,Carousel,Menu} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import oneImage from '../../imgs/net-one-one.jpg';
import twoImage from '../../imgs/net-one-two.jpg';
import threeImage from '../../imgs/net-one-three.jpg';
import fourImage from '../../imgs/net-one-four.jpg';
const iconData = [oneImage,twoImage,threeImage,fourImage];

const data = [
  {
    value: '1',
    label: 'Food',
  }, {
    value: '2',
    label: 'Supermarket',
  },
  {
    value: '3',
    label: 'Extra',
    // isLeaf: true,
  },
];
class AntMobile extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      curSelIndex:['1'],
      show: false,
      imgHeight: 375,
      slideIndex: 0,
    };
  }

  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
  }

  onChange = (value) => {
    //console.log(value);
    this.setState({curSelIndex:value});
    this.setState({
      show: !this.state.show,
    });
  }

  onMaskClick = () => {
    this.setState({
      show: false,
    });
  }

  //轮播图播放之后
  afterChange=(index)=>{
   
   }

    render() {
        return (
          <div>
                <div styleName = 'div-row'>
                  <Button styleName = 'btn-width'>default</Button>
                  <Button styleName = 'btn-width' disabled>default disabled</Button>
                  <Button styleName = 'btn-width' type="primary">primary</Button>
                  <Button styleName = 'btn-width' type="primary" disabled>primary disabled</Button>
                </div>
                <div className = 'main-carousel-div'>
                    <Carousel className="space-carousel"
                              frameOverflow="visible"
                              cellSpacing={10}
                              slideWidth={0.8}
                              autoplay = {true}
                              infinite
                              dots = {false}
                              afterChange={this.afterChange}
                    >
                        {iconData.map((val, index) => (
                            <div
                                key={val}
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: 0,
                                    height: this.state.imgHeight,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <img
                                    src={iconData[index]}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                {/* 测试菜单 */}
                <div styleName="menue-div" onClick = {this.handleClick}>
                     菜单
                </div>
                {
                  this.state.show?
                <Menu
                    styleName="single-foo-menu"
                    data={data}
                    value={this.state.curSelIndex}
                    level={1}
                    onChange={this.onChange}
                    height={document.documentElement.clientHeight * 0.4}
                  />:null}
                  {/* 遮罩 */}
                  {this.state.show ? <div styleName="menu-mask" onClick={this.onMaskClick} /> : null}
          </div>
        )
    }
}

export default CSSModules(AntMobile, styles);