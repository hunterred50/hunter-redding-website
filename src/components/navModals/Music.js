import React, { Component } from 'react'
import Modal from '@react95/core/Modal'
import Tree from '@react95/core/Tree'
import { Route } from 'react-router-dom'

const data = [
  {
    id: 0,
    label: 'music',
    children: [
      {
        id: 0,
        label: 'blind tiger',
        iconName: 'media_cd',
        onClick: e=> { window.location.replace('https://blindtiger.rocks/') },
      },
      {
        id: 1,
        label: 'eye spy',
        iconName: 'media_cd',
        onClick: e=> { window.location.replace('https://www.instagram.com/eyespyaband/') },
      },
      {
        id: 2,
        label: 'scuttle',
        iconName: 'media_cd',
        onClick: e=> { window.location.replace('https://www.instagram.com/scuttleband/') },
      },
      {
        id: 3,
        label: 'later, dude',
        iconName: 'media_cd',
        onClick: e=> { window.location.replace('https://open.spotify.com/album/2O5iwu3bhuY425NzX232f7?si=RovFuO5YSo6BUtj_ZXmqPA') },
      },
    ],
  },
];

class Music extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      {!this.props.close && <Modal title="My music" closeModal={this.props.display} icon="media_cd" className="modal" 
        style={this.props.homeStyle ? {left: "30%", top: "15%", height: "20%", width: "45%",} : {left: "5%", top: "10%", height: "82%", width: "90%"}}>
          <div style={{width: "100%", height: "100%", overflowY: "scroll"}}>
            <div style={{display: "flex", justifyContent: "flex-start"}}>
              <Tree data={data} />
            </div>
          </div>
      </Modal>}
      </div>
    )
  }
}

export default Music