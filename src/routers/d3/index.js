import React, { Component } from 'react'
import styles  from './d3.less';
import CSSModules from 'react-css-modules';
//const d3 = require('../../public/lib/d3.min.js');
import {BarChart} from 'react-d3-components'
//var BarChart = ReactD3.BarChart;
 /**
  * https://www.npmjs.com/package/react-d3-components
  */
var data = [{
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
}];
/***
 *
 *
 */
class D3 extends Component {

    render() {
        return (
            <div>
              <p styleName = 'appText'>d3演示</p>
              <BarChart
                data={data}
                width={400}
                height={400}
                margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
            </div>
        )
    }
}

export default CSSModules(D3, styles);