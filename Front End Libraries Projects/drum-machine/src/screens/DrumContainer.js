import React from 'react'
import Display from './Display';
import PadContainer from './PadsContainer';
import VolumeSlider from '../components/VolumeSlider';

export default function DrumContainer() {

  return (
    <div>
      <Display id="display" />
      <VolumeSlider />
      <PadContainer />
    </div>
  )
}
