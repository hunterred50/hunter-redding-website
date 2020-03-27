import React from 'react'
import { useHistory, useLocation } from "react-router-dom";

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

  let location = useLocation();
  let home = false; // variable is set true on home page for separate navbar
  if (location.pathname === '/')
    home = true;
  else
    home = false;

  return (
    <div>
      <Breakpoint medium up>
        {/* navbar on home screen */}
        {home && <div className="nav">
          <Link className="nav-item" to="/" onClick={props.clearState}>
            <Icon name="computer_5"/>
            <p>home</p>
          </Link>

          <div className="nav-item" onClick={props.toggleBio}>
            <Icon name="notepad"/>
            <p>about me</p>
          </div>

          <div className="nav-item" onClick={props.toggleMusic}>
            <Icon name="media_cd"/>
            <p>music</p> {/* click to play a random song from a playlist of songs I've been a part of */}
          </div>

          <div className="nav-item" onClick={props.togglePhoto}>
            <Icon name="camera"/>
            <p>photography</p>
          </div>

          <div className="nav-item" onClick={props.toggleVid}>
            <Icon name="media_video"/>
            <p>video</p>
          </div>

          <div className="nav-item" onClick={props.toggleArt}>
            <Icon name="mspaint"/>
            <p>visual art</p>
          </div>

          <div className="nav-item" onClick={props.toggleCode}>
            <Icon name="defrag"/>
            <p>coding</p>
          </div>

          <div className="nav-item" onClick={props.toggleContact}>
            <Icon name="phone_2"/>
            <p>contact me</p>
          </div>

          {!props.displayBio && <Bio display={props.toggleBio} />}
          {!props.displayContact && <Contact display={props.toggleContact} homeStyle={true}/>}
          {props.displayMusic && <Music display={props.toggleMusic} homeStyle={true}/>}
          {props.displayPhoto && <Photo display={props.togglePhoto} homeStyle={true}/>}
          {props.displayVid && <Vid display={props.toggleVid} homeStyle={true}/>}
          {props.displayArt && <Art display={props.toggleArt} homeStyle={true}/>}
          {props.displayCode && <Code display={props.toggleCode} homeStyle={true}/>}

          {/* <Button onClick={props.changeBkgd}>click me!</Button> */}
        </div>}

        {/* navbar on component screens */}
        {!home && <div className="nav">
          <Link className="nav-item" to="/" onClick={() => handleClick("")}>
            <Icon name="computer_5"/>
            <p>home</p>
          </Link>

          <div className="nav-item" onClick={() => handleClick("")}>
            <Icon name="notepad"/>
            <p>about me</p>
          </div>

          <div className="nav-item" onClick={() => handleClick("music")}>
            <Icon name="media_cd"/>
            <p>music</p> {/* click to play a random song from a playlist of songs I've been a part of */}
          </div>

          <div className="nav-item" onClick={() => handleClick("photo")}>
            <Icon name="camera"/>
            <p>photography</p>
          </div>

          <div className="nav-item" onClick={() => handleClick("vid")}>
            <Icon name="media_video"/>
            <p>video</p>
          </div>

          <div className="nav-item" onClick={() => handleClick("art")}>
            <Icon name="mspaint"/>
            <p>visual art</p>
          </div>

          <div className="nav-item" onClick={() => handleClick("code")}>
            <Icon name="defrag"/>
            <p>coding</p>
          </div>

          <div className="nav-item" onClick={() => handleClick("contact")}>
            <Icon name="phone_2"/>
            <p>contact me</p>
          </div>

          {/* <Button onClick={props.changeBkgd}>click me!</Button> */}
        </div>}
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