import React, { Component } from 'react'
import styles  from './recharts.less';
import CSSModules from 'react-css-modules';
import { LineChart, Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend} from 'recharts';
/***
 * recharts使用参考：
 * http://recharts.org/#/zh-CN/guide
 */

const data = [{uv:20,pv:10,name:'Page A'},{uv:30,pv:45,name:'Page B'},{uv:55,pv:59,name:'Page B'},{uv:107,pv:90,name:'Page B'},{uv:128,pv:110,name:'Page B'}]
/**
 *video-react:使用参考：
 https://github.com/video-react/video-react
 https://video-react.js.org/  设计api的使用
 https://video-react.js.org/components/player/
 */
class Recharts extends Component {
    render() {
        return (
            <div>
              <p styleName = 'appText'>recharts演示</p>
              <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </div>
        )
    }
}

export default CSSModules(Recharts, styles);