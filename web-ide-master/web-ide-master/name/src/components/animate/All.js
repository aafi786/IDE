import React, { Component } from 'react'
import AnimatedSquare from './Expanddiv'
import Carouseel from './Carouseel'

import Flippers from './Flipper'
import Flipper2 from './Flipper2'
export default class All extends Component {
  render() {
    return (
      <div>

<Carouseel/>

<Flippers />

<Flipper2 />
        {/* <AnimatedSquare /> */}
      </div>
    )
  }
}
  