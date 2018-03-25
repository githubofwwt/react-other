import React, { Component } from 'react'
import styles  from './reactbootstrap.less';
import CSSModules from 'react-css-modules';
import { Button,ButtonToolbar,Carousel,Table } from 'react-bootstrap';
/**
 * 官网地址：https://react-bootstrap.github.io/getting-started/introduction/
 */
class ReactBootstrap extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  //模拟表格的点击事件
  tableClik=(e)=>{
    alert('选择了条目 ');
  }

    render() {
      const { index, direction } = this.state;
        return (
            <div styleName = 'reactboot-div'>
              <p styleName = 'appText'>react-bootstrap</p>
              <ButtonToolbar>
                  {/* Standard button */}
                  <Button>Default</Button>

                  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
                  <Button bsStyle="primary">Primary</Button>

                  {/* Indicates a successful or positive action */}
                  <Button bsStyle="success">Success</Button>

                  {/* Contextual button for informational alert messages */}
                  <Button bsStyle="info">Info</Button>

                  {/* Indicates caution should be taken with this action */}
                  <Button bsStyle="warning">Warning</Button>

                  {/* Indicates a dangerous or potentially negative action */}
                  <Button bsStyle="danger">Danger</Button>

                  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
                  <Button bsStyle="link">Link</Button>
                </ButtonToolbar>

                <div styleName = 'carousel-div'>
                    <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                    >
                        <Carousel.Item>
                          <img styleName = 'image-size' alt="900x500" src="../../imgs/apple.jpg" />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img styleName = 'image-size' alt="900x500" src="../../imgs/apple.jpg" />
                          <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img styleName = 'image-size' alt="900x500" src="../../imgs/apple.jpg" />
                          <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                 </div>
                 <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>分栏标题</th>
                    <th>分栏标题</th>
                    <th>分栏标题</th>
                    <th>分栏标题</th>
                    <th>分栏标题</th>
                    <th>分栏标题</th>
                  </tr>
                </thead>
                <tbody>
                  <tr styleName = 'trBack' onClick = {this.tableClik}>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
            </div>
        )
    }
}

export default CSSModules(ReactBootstrap, styles);