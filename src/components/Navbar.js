import React from 'react'
import { useHistory } from "react-router-dom";

import Button from '@react95/core/Button'
import Icon from '@react95/core/Icon'
import List from '@react95/core/List'

import Bio from './navModals/Bio'
import Music from './navModals/Music'
import Photo from './navModals/Photo'
import Vid from './navModals/Vid'
import Art from './navModals/Art'
import Code from './navModals/Code'
import Contact from './navModals/Contact'
import { Breakpoint } from 'react-socks'
import { Link } from 'react-router-dom'

function Navbar (props) {

  let history = useHistory();
  function handleClick(where) {
    history.push("/" + where);
  }

  return (
    <div>
      <Breakpoint medium up>
        <div className="nav">
          {/* <div className="nav-item" onClick={props.clearState}> option could be to reset to initial state, which would be startup */}
            <Link className="nav-item" to="/" onClick={props.clearState}>
              <Icon name="computer_5"/>
              <p>home</p>
            </Link>
          {/* </div> */}

          <div className="nav-item" onClick={props.toggleBio}>
            <Icon name="notepad"/>
            <p>about me</p>
          </div>
          {props.displayBio && <Bio display={props.toggleBio} />}

          <div className="nav-item" onClick={props.toggleMusic}> {/* maybe close other sectional modals */}
            <Icon name="media_cd"/>
            <p>music</p> {/* click to play a random song from a playlist of songs I've been a part of */}
          </div>
          {props.displayMusic && <Music display={props.toggleMusic} />}

          <div className="nav-item" onClick={props.togglePhoto}>
            <Icon name="camera"/>
            <p>photography</p>
          </div>
          {props.displayPhoto && <Photo display={props.togglePhoto} />}

          <div className="nav-item" onClick={props.toggleVid}>
            <Icon name="media_video"/>
            <p>video</p>
          </div>
          {props.displayVid && <Vid display={props.toggleVid} />}

          <div className="nav-item" onClick={props.toggleArt}>
            <Icon name="mspaint"/>
            <p>visual art</p>
          </div>
          {props.displayArt && <Art display={props.toggleArt} />}

          <div className="nav-item" onClick={props.toggleCode}>
            <Icon name="defrag"/>
            <p>coding</p>
          </div>
          {props.displayCode && <Code display={props.toggleCode} />}

          <div className="nav-item" onClick={props.toggleContact}>
            <Icon name="phone_2"/>
            <p>contact me</p>
          </div>
          {!props.displayContact && <Contact display={props.toggleContact} />}

          {/* <Button onClick={props.changeBkgd}>click me!</Button> */}
        </div>
      </Breakpoint>
      
      <Breakpoint small down>
        <List className="dropdown" style={{width: "40%"}}>
          <List.Item icon="logo" title="START">
            START
            <List className="dropdown" onClick={props.clearState}>
              <List.Item className="drop-item" onClick={() => handleClick("")}>
                <Icon name="computer_5"/>
                <p>home</p>
              </List.Item>

              <List.Item className="drop-item" onClick={() => handleClick("")}>
                <Icon name="notepad"/>
                <p>about me</p>
              </List.Item>

              <List.Item className="drop-item" onClick={() => handleClick("music")}>
                <Icon name="media_cd"/>
                <p>music</p> {/* click to play a random song from a playlist of songs I've been a part of */}
              </List.Item>

              <List.Item className="drop-item" onClick={() => handleClick("photo")}>
                <Icon name="camera"/>
                <p>photography</p>
              </List.Item>

              <List.Item className="drop-item" onClick={() => handleClick("vid")}>
                <Icon name="media_video"/>
                <p>video</p>
              </List.Item>

              <List.Item className="drop-item" onClick={() => handleClick("art")}>
                <Icon name="mspaint"/>
                <p>visual art</p>
              </List.Item>

              <List.Item className="drop-item" onClick={() => handleClick("code")}>
                <Icon name="defrag"/>
                <p>coding</p>
              </List.Item>

              <List.Item className="drop-item" onClick={() => handleClick("contact")}>
                <Icon name="phone_2"/>
                <p>contact me</p>
              </List.Item>

              {/* <Button onClick={props.changeBkgd}>click me!</Button> */}
            </List>
          </List.Item>
        </List>
      </Breakpoint>
    </div>
  )
}

export default Navbar