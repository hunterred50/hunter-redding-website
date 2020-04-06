import React, { Component } from 'react'
import Modal from '@react95/core/Modal'
import Tree from '@react95/core/Tree'
// import { Route } from 'react-router-dom'

const data = [
  {
    id: 0,
    label: 'music',
    onClick: e=> { window.location.replace('/music') },
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
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
      {!this.props.close && <Modal title="My music" closeModal={this.props.display} icon="media_cd" className="modal" 
        style={this.props.homeStyle ? {left: "30%", top: "100px", height: "15em", width: "44em", position: "absolute"} : {left: "5%", top: "10px", height: "37em", width: "90%", position: "relative"}}>
          <div style={this.props.homeStyle ? {width: "100%", maxHeight: "200px", overflowY: "scroll"} : {width: "100%", maxHeight: "560px", overflowY: "scroll"}}>
            <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column", lineHeight: "10px"}}>
              <Tree data={data} />
              <br/>
              <div style={{marginLeft: "35px", lineHeight: "35px", maxWidth: "90%"}}>
                Later, Dude is a three piece emo band that I played bass for, but is on an indefinite hiatus. Here is our debut LP:
                <iframe src="https://open.spotify.com/embed/album/2O5iwu3bhuY425NzX232f7" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
                <br/>Blind Tiger is an active four piece, mathcore, hard rock band that I joined in March 2018.
                I've played bass for Blind Tiger on our tours throughout the Southeast ever since. We are in the process
                of recording our second EP and second LP, the first official releases that I've been a part of recording.
                Here's the most recent release from Blind Tiger:
                <iframe src="https://open.spotify.com/embed/album/2K8GFA0sQhnHFAZQxvgDeF" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
                <br/>Bulk. is a four piece hardcore band that began in early 2018 and is now on an indefinite hiatus.
                I also played bass for Bulk. for most of its life as a band.
                <iframe src="https://open.spotify.com/embed/album/7504vT4OcVemDqHqJ8mYfw" width="80%" height="200" frameborder="0" allowtransparency="true" allow="encrypted-media"/>
              </div>
            </div>
          </div>
      </Modal>}
      </div>
    )
  }
}

export default Music