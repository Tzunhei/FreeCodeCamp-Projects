import React from 'react'
import {connect} from "react-redux";

const Display = (props) => {
  return (
    <div>
      <p>{props.currentSound}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentSound: state.sounds.lastSound
  }
}

export default connect(mapStateToProps)(Display);