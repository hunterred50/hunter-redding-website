import React, { Component } from 'react'
import Modal from '@react95/core/Modal'
import Lightbox from 'react-image-lightbox';
import Tree from '@react95/core/Tree'
import { Route } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-image-lightbox/style.css';

const imgStyle = {  //display: "block", 
                    // marginTop: "1em", 
                    // marginLeft: "auto", 
                    // marginRight: "auto", 
                    width: "50%", 
                    // height: "10%", 
                    objectPosition: "100% 10%", 
                    objectFit: "cover", 
                    // boxShadow: "10px 10px" 
                  }

const imgStyle1 = {  //display: "block", 
                  // marginTop: "1em", 
                  // marginLeft: "auto", 
                  // marginRight: "auto", 
                  width: "25%", 
                  // height: "10%", 
                  objectPosition: "100% 10%", 
                  objectFit: "cover", 
                  // boxShadow: "10px 10px" 
                }

const data = [
  {
    id: 0,
    label: 'art',
    children: [
      {
        id: 0,
        label: 'pen + digital color',
        iconName: 'mspaint',
        onClick: e=> { window.location.replace('/art/pen') },
      },
      {
        id: 1,
        label: 'painting',
        iconName: 'mspaint',
        onClick: e=> { window.location.replace('/art/painting') },
      },
      {
        id: 2,
        label: 'graphic design & fliers',
        iconName: 'mspaint',
        onClick: e=> { window.location.replace('/art/graphic') },
      },
    ],
  },
];

class Art extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayPen: false,
      displayPaint: false,
      displayGraphic: false
    }
    this.togglePen = this.togglePen.bind(this);
    this.togglePaint = this.togglePaint.bind(this);
    this.toggleGraphic = this.toggleGraphic.bind(this);
  }
  togglePen() {
    this.setState(state => ({
      displayPen: !state.displayPen
    }));
  }
  togglePaint() {
    this.setState(state => ({
      displayPaint: !state.displayPaint
    }));
  }
  toggleGraphic() {
    this.setState(state => ({
      displayGraphic: !state.displayGraphic
    }));
  }

  render() {
    return (
      <div>
        <Modal title="My art" closeModal={this.props.display} icon="mspaint" className="modal" 
          style={this.props.homeStyle ? {left: "37.5%", top: "250px", height: "15em", width: "44em",} : {left: "5%", top: "10%", height: "82%", width: "90%"}}>
            <div style={{width: "100%", height: "100%", overflowY: "scroll"}}>
              <div style={{display: "flex", justifyContent: "flex-start"}}>
                <Tree data={data} />
              </div>
            </div>
        </Modal>

        <Route path='/art/pen'>
        {!this.state.displayPen && <Modal title="pen + digital color" closeModal={this.togglePen} icon="camera" className="modal" style={{left: "10%", top: "8%", height: "85%", width: "80%",}}>
          <div>
            <Carousel>
                <div>
                    <img alt="" src="https://gdurl.com/7gi4" style={{width: "30%"}}/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/u0MiS" style={imgStyle1}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/pmUb" style={{width: "60%"}}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/X1ko" style={imgStyle}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/iVCA" style={{width: "40%"}}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/9WXw" style={{width: "40%"}}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/fd2f" style={{width: "40%"}}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/tiSd" style={{transform: "rotate(90deg)", width: "50%"}}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/MwYc" style={{width: "30%"}}/>
                </div>
            </Carousel>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <p>interested in commissioning me? <a href="../contact">contact me for details</a></p>
            </div>
          </div>
        </Modal>}
        </Route>

        <Route path='/art/painting'>
        {!this.state.displayPaint && <Modal title="paintings" closeModal={this.togglePaint} icon="camera" className="modal" style={{left: "10%", top: "8%", height: "85%", width: "80%",}}>
          <div>
            <Carousel>
                <div>
                    <img alt="" src="https://gdurl.com/vGPt" style={imgStyle}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/zayw" style={imgStyle}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/ZqJb" style={imgStyle}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/H3n6" style={imgStyle}/>
                </div>
            </Carousel>
          </div>
        </Modal>}
        </Route>

        <Route path='/art/graphic'>
        {!this.state.displayGraphic && <Modal title="graphics & fliers" closeModal={this.toggleGraphic} icon="camera" className="modal" style={{left: "10%", top: "8%", height: "85%", width: "80%",}}>
          <div>
            <Carousel>
                <div>
                    <img alt="" src="https://gdurl.com/mY52" style={{width: "30%"}}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/RIrp" style={{width: "40%"}}/>
                </div>
                <div>
                    <img alt="" src="https://gdurl.com/ACOQ" style={{width: "30%"}}/>
                </div>
            </Carousel>
          </div>
        </Modal>}
        </Route>
      </div>
    )
  }
}

export default Art