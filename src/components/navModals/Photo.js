import React, { Component } from 'react'
import Modal from '@react95/core/Modal'
import Tree from '@react95/core/Tree'
import { Route } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imgStyle = {  //display: "block", 
                    // marginTop: "1em", 
                    // marginLeft: "auto", 
                    // marginRight: "auto", 
                    width: "60%", 
                    // height: "10%", 
                    objectPosition: "100% 10%", 
                    objectFit: "cover", 
                    // boxShadow: "10px 10px" 
                  }

// const realEstate = ["https://gdurl.com/hzNd", "https://gdurl.com/ov9e"];

const data = [
  {
    id: 0,
    label: 'photography',
    children: [
      {
        id: 0,
        label: 'portrait',
        iconName: 'camera',
        onClick: e=> { window.location.replace('/photo/portrait') },
      },
      {
        id: 1,
        label: 'real estate',
        iconName: 'camera',
        onClick: e=> { window.location.replace('/photo/realestate') },
      },
      {
        id: 2,
        iconName: 'camera',
        label: 'events',
        onClick: e=> { window.location.replace('/photo/events') },
      },
      {
        id: 3,
        iconName: 'camera',
        label: 'weddings',
        onClick: e=> { window.location.replace('/photo/wedding') },
      },
    ],
  },
];
class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPortrait: false,
      displayRealEstate: false,
      displayEvent: false,
      displayWedding: false
    }
    this.togglePortrait = this.togglePortrait.bind(this);
    this.toggleRealEstate = this.toggleRealEstate.bind(this);
    this.toggleEvent = this.toggleEvent.bind(this);
    this.toggleWedding = this.toggleWedding.bind(this);
  }
  togglePortrait() {
    this.setState(state => ({
      displayPortrait: !state.displayPortrait
    }));
  }
  toggleRealEstate() {
    this.setState(state => ({
      displayRealEstate: !state.displayRealEstate
    }));
  }
  toggleEvent() {
    this.setState(state => ({
      displayEvent: !state.displayEvent
    }));
  }
  toggleWedding() {
    this.setState(state => ({
      displayWedding: !state.displayWedding
    }));
  }

  render() {
    return (
      <div>
        <Route path='/photo/portrait'>
          {!this.state.displayPortrait && <Modal title="portraits" closeModal={this.togglePortrait} icon="camera" className="modal" style={{left: "10%", top: "8%", height: "85%", width: "80%",}}>
            <div>
              <Carousel>
                  <div>
                      <img src="https://gdurl.com/zgt3" style={imgStyle}/>
                      {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                      <img src="https://gdurl.com/KNnW" style={imgStyle}/>
                  </div>
                  <div>
                      <img src="https://gdurl.com/FDqD" style={imgStyle}/>
                  </div>
              </Carousel>
            </div>
          </Modal>}
        </Route>

        <Route path='/photo/realestate'>
          {!this.state.displayRealEstate && <Modal title="real estate photography" closeModal={this.toggleRealEstate} icon="camera" className="modal" style={{left: "10%", top: "8%", height: "85%", width: "80%",}}>
            <div>
              <Carousel>
                {/* <div>
                    <img src={realEstate.map()} style={imgStyle}/>
                </div> */}
                <div>
                    <img src="https://gdurl.com/hzNd" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/ov9e" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/hsOK" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/wKHe" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/Vba0" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/m3Tv" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/LJuF" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/0Ufw" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/AECy" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/BvfK" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/ctwk" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/H0jl" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/A2XU" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/KxfL" style={imgStyle}/>
                </div>
                <div>
                    <img src="https://gdurl.com/9M6pX" style={imgStyle}/>
                </div>
              </Carousel>
            </div>
          </Modal>}
        </Route>

        <Route path='/photo/event'>
          {!this.state.displayEvent && <Modal title="music events" closeModal={this.toggleEvent} icon="camera" className="modal" style={{left: "10%", top: "8%", height: "85%", width: "80%",}}>
            <div>
              <Carousel>
                  <div>
                      <img src="" style={imgStyle}/>
                  </div>
                  <div>
                      <img src="" style={imgStyle}/>
                  </div>
                  <div>
                      <img src="" style={imgStyle}/>
                  </div>
              </Carousel>
            </div>
          </Modal>}
        </Route>

        <Route path='/photo/wedding'>
          {!this.state.displayWedding && <Modal title="wedding photos" closeModal={this.toggleWedding} icon="camera" className="modal" style={{left: "10%", top: "8%", height: "85%", width: "80%",}}>
            <div>
              <Carousel>
                  <div>
                      <img src="https://gdurl.com/Vb_I" style={imgStyle}/>
                  </div>
                  <div>
                      <img src="https://gdurl.com/Lw5n" style={imgStyle}/>
                  </div>
                  <div>
                      <img src="https://gdurl.com/VCIA" style={imgStyle}/>
                  </div>
                  <div>
                      <img src="https://gdurl.com/GWmt" style={imgStyle}/>
                  </div>
                  <div>
                      <img src="https://gdurl.com/EtLl" style={imgStyle}/>
                  </div>
              </Carousel>
            </div>
          </Modal>}
        </Route>

        {!this.props.close && <Modal title="My photography" closeModal={this.props.display} icon="camera" className="modal" 
          style={{left: "32.5%", top: "15%", height: "20%", width: "45%",}}>
          <div style={{display: "flex", justifyContent: "flex-start"}}>
            <Tree data={data} />
          </div>
        </Modal>}
      </div>
    )
  }
}

export default Photo