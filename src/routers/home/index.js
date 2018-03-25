import React, { Component } from 'react'
import { Button } from 'antd';
import CSSModules from 'react-css-modules'
import logo from '../../logo.svg';
import styles from './home.css';

//设置默认透明度
const enterOpacity = {'opacity':'0.5'}
const downOpacity = {'opacity':'0.8'}
const outOpacity = {'opacity':'1.0'}
class Home extends Component {
    constructor(props) {
        super(props)
        this.changeRouter = this.changeRouter.bind(this)
    }

    //跳转到地图界面
    changeRouter() {
        this.props.history.push('/map')
    }
    state = {
        mouseState:0,//0，默认状态；1，鼠标进来状态；2，鼠标按下状态
      }
      //阴影按钮的点击事件
      btnClick=(e)=>{
         this.setState({mouseState:1})
      }

      //视频播放点击事件
      vedioClick=(e)=>{
          console.log(e)
        this.props.history.push('/vedio')
      }

      //echarts使用点击事件
      echartsClick=(e)=>{
        this.props.history.push('/echarts')
      }

      //测试Less的使用
      lessUseClick=(e)=>{
        this.props.history.push('/less')
      }

      //Recharts使用
      rechartsClick=(e)=>{
        this.props.history.push('/recharts')
      }

      //D3使用
      D3Click=(e)=>{
        this.props.history.push('/d3')
      }

      //easy-UI
      easyUiClick=(e)=>{
        //this.props.history.push('/d3')
      }

      //LayerUI
      layerUiClick=(e)=>{
         //this.props.history.push('/d3')
      }

      //antMobileClick
      antMobileClick=(e)=>{
        this.props.history.push('/antmobile')
      }

      //reactBootstrapClick
      reactBootstrapClick=(e)=>{
        this.props.history.push('/reactbootstrap')
      }

      //reactsvgClick
      reactsvgClick=(e)=>{
        this.props.history.push('/reactsvg')
      }

      //鼠标进入的时候
      onMouseEnter=(e)=>{
        //message.info('鼠标进来了')
        this.setState({mouseState:1})
      }

      //鼠标按下事件
      onMouseDown = (e)=>{
        this.setState({mouseState:2})
      }
    
      //鼠标离开事件
      onMouseLease = (e)=>{
        this.setState({mouseState:0})
      }

      //reactreponseClick
      reactreponseClick=(e)=>{
        this.props.history.push('/reactresponse')
      }
    
      //获取鼠标的状态
      getMouseState(){
        let state = this.state.mouseState;
          if(state === 0){
              return outOpacity;
          }else if(state === 1){
              return downOpacity;
          }else if(state === 2){
            return enterOpacity;
          }else{
            return outOpacity;
          }
      }

    //上下固定，中间滚动
    flexlayout=(e)=>{
      this.props.history.push('/flexlayout')
    }

    //固定上下，中间滚动，可以穿透头部
    fixedlayout=(e)=>{
      this.props.history.push('/fixedlayout')
    }

    //富文本编辑器
    reactUmEditorClick=(e)=>{
      this.props.history.push('/draftWySiwyg')
    }

    //react-lzc-editor富文本编辑器
    reactlzcEditorClick=(e)=>{

    }

    //h5开发小游戏
    h5GameClick=(e)=>{

    }

    //cavas绘图
    canvasDrawClick=(e)=>{

    }
    //loadsh使用
    loadshClick=(e)=>{

    }

    render() {
        let opacityState = this.getMouseState()
        return (
            <div>
                <header styleName="App-header">
                    <img src={logo} styleName="App-logo" alt="logo" />
                    <h1 styleName="App-title">Welcome to React</h1>
                </header>
                <p styleName="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div styleName = 'Home-btn-row'>
                    {/* 模拟带阴影的按钮 */}
                    <div onMouseLeave = {this.onMouseLease}  onMouseDown = {this.onMouseDown} onClick = {this.btnClick}  onMouseEnter = {this.onMouseEnter}  style = {{marginRight:'20px',marginBottom:'20px','cursor':'pointer','borderRadius': '15px',backgroundColor:'red',width:'100px',paddingTop:'10px',paddingBottom:'10px','boxShadow': '10px 10px 5px #888888',...opacityState}}>
                      <span style = {{color:'#333',fontSize:'15px'}}>customBtn</span>
                    </div>

                    {/* ant button */}
                    <Button type="primary" style = {{'boxShadow': '10px 10px 5px #888888',marginRight:'20px',marginBottom:'20px'}}>ant-button</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.antMobileClick}>ant-mobile</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.changeRouter}>web-map</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.vedioClick}>vedio-react</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.lessUseClick}>Less及jquery</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.rechartsClick}>recharts</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.D3Click}>d3</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.echartsClick}>echarts</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.easyUiClick}>easyUI</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.layerUiClick}>LayerUI</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.reactBootstrapClick}>react-bootstrap</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.reactreponseClick}>react-reponse</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.reactsvgClick}>react-svg</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.flexlayout}>上下固定中间滚动</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.fixedlayout}>上下固定中间滚动上面穿透</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.reactUmEditorClick}>react-draft-wysiwyg</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.reactlzcEditorClick}>react-lz-editor</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.h5GameClick}>h5开发小游戏</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.canvasDrawClick}>carvas绘图</Button>
                    <Button type="primary" styleName = 'marginRight' onClick={this.loadshClick}>loadsh使用</Button>
                </div>
            </div>
        )
    }
}
export default CSSModules(Home, styles);