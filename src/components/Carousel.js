import React, { Component } from 'react'
import { Carousel} from 'antd-mobile';

export default class MyCarousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            imgHeight:669,
        }
    }
    render() {
        return (
            <Carousel
                autoplay={true}
                infinite
                selectedIndex={0}
                dots = {false}
            >
                {this.props.data.map((val,index) => (
                    <div
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: '100%' }}
                    >
                        <img
                            src={this.props.data[index]}
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
        )
    }
}