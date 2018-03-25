import { Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Home from './home'
import Map from './map'
import Vedio from './vedio'
import Less from './less'
import Recharts from './recharts'
import D3 from './d3'
import Echarts from './echarts'
import AntMobile from './antMobile'
import ReactBootstrap from './reactbootstrap'
import ReactReponse from './reactresponse'
import ReactSvg from './reactsvg'
import FlexLayout from './flexLayout'
import FlexedLayout from './fixedLayout'
import DraftWySiwyg from './draftWySiwyg'
export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/map' component={Map}/>
                <Route path='/vedio' component={Vedio}/>
                <Route path='/less' component={Less}/>
                <Route path='/recharts' component={Recharts}/>
                <Route path='/d3' component={D3}/>
                <Route path='/echarts' component={Echarts}/>
                <Route path='/antmobile' component={AntMobile}/>
                <Route path='/reactbootstrap' component={ReactBootstrap}/>
                <Route path='/reactresponse' component={ReactReponse}/>
                <Route path='/reactsvg' component={ReactSvg}/>
                <Route path='/flexlayout' component={FlexLayout}/>
                <Route path='/fixedlayout' component={FlexedLayout}/>
                <Route path='/draftWySiwyg' component={DraftWySiwyg}/>
            </Switch>
        )
    }
}