import React, { Component } from 'react'
import Modal from '@react95/core/Modal'
import Tree from '@react95/core/Tree'
// import { Route } from 'react-router-dom'

const data = [
  {
    id: 0,
    label: 'videography',
    children: [
      {
        id: 0,
        label: 'stills',
        iconName: 'media_video',
        // onClick: e=> { window.location.replace('/photo/portrait') },
      },
      {
        id: 1,
        label: 'music events',
        iconName: 'media_video',
        // iconName: 'name',
      },
      {
        id: 2,
        label: 'creative',
        iconName: 'media_video',
      },
    ],
  },
];

class Vid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayStills: false,
      displayMusicEvent: false,
      displayCreative: false
    }
    this.toggleStills = this.toggleStills.bind(this);
    this.toggleMusicEvent = this.toggleMusicEvent.bind(this);
    this.toggleCreative = this.toggleCreative.bind(this);
  }
  toggleStills() {
    this.setState(state => ({
      displayStills: !state.displayStills
    }));
  }
  toggleMusicEvent() {
    this.setState(state => ({
      displayMusicEvent: !state.displayMusicEvent
    }));
  }
  toggleCreative() {
    this.setState(state => ({
      displayCreative: !state.displayCreative
    }));
  }

  render() {
    return (
      <Modal title="My videography" closeModal={this.props.display} icon="media_video" className="modal" 
        style={this.props.homeStyle ? {left: "35%", top: "200px", height: "15em", width: "44em", position: "absolute"} : {left: "5%", top: "10px", height: "37em", width: "90%", position: "relative"}}>
          <div style={this.props.homeStyle ? {width: "100%", maxHeight: "200px", overflowY: "scroll"} : {width: "100%", maxHeight: "560px", overflowY: "scroll"}}>
            <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column", lineHeight: "10px"}}>
              <Tree data={data} />
              <br/>
              <div style={{marginLeft: "35px", lineHeight: "35px"}}>
                <iframe width="90%" height="315" src="https://www.youtube.com/embed/nt7eAgEZgZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                <br/>
                <iframe width="90%" height="315" src="https://www.youtube.com/embed/fDlYsprVIWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
              </div>
            </div>
          </div>
      </Modal>
    )
  }
}

export default Vid