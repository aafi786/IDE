import React, { Component } from 'react'
import FlipperCard from './FlipperCard'
import FlipperCard2 from './FlipperCard2'
import { Card, Icon, Avatar } from 'antd';



import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Particles from 'react-particles-js';

import * as THREE from 'three'
import Threee from './Threee'
import ReactCountdownClock from 'react-countdown-clock'
import Countdown from 'react-countdown-now';
import CountUp from 'react-countup';

import CoolTabs from 'react-cool-tabs';
const { Meta } = Card;

class Content1 extends Component {
  render() {
    return <div >
      this is Content1
    </div>
  }
}
class Content2 extends Component {
  render() {
    return <div >
      this is Content2
    </div>
  }
}

export default class All2 extends Component {
render() {
    return (
      <div className="container">

        <div className="d-flex flex-row">
          <div className="d-flex flex-column">
          <FlipperCard  />
          </div>
          {/* <div className="d-flex flex-column">
          <FlipperCard2  />
          </div> */}
          </div>

          <br></br>
          <div className="col-6" style={{marginTop:"500px"}}>
          <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={5}
        totalSlides={3}
      >
        <Slider>
          <Slide index={1}  style={{height:"500px"}}>
          <div className="card shadow"  style={{height:"500px"}} >
          <img className="card-img-top"  style={{height:"300px"}} src="https://iosd.tech/img/svg/student.svg" alt="Card image cap"/>
          <div className="card-body"  style={{height:"200px"}}>
          <h5 className="card-title">Details</h5>
          <p className="card-text">wWOOWOWOWOWOWOWOW</p>
          <a href="#" class="btn btn-primary animated bounceInUp ">00000000000000000</a>
          </div>
            </div>
          </Slide>
          <Slide index={0}>
          <div className="card shadow"  style={{height:"500px"}} >
          <img className="card-img-top"  style={{height:"300px"}} src="https://iosd.tech/img/svg/student.svg" alt="Card image cap"/>
          <div className="card-body"  style={{height:"200px"}}>
          <h5 className="card-title">Details</h5>
          <p className="card-text">wWOOWOWOWOWOWOWOW</p>
          <a href="#" class="btn btn-primary animated infinite bounce delay-2s">11111111111111</a>
          </div>
            </div>
          </Slide>
          <Slide index={2}>
          <div className="card shadow"  style={{height:"500px"}} >
          <img className="card-img-top"  style={{height:"300px"}} src="https://iosd.tech/img/svg/student.svg" alt="Card image cap"/>
          <div className="card-body"  style={{height:"200px"}}>
          <h5 className="card-title">Details</h5>
          <p className="card-text">wWOOWOWOWOWOWOWOW</p>
          <a href="#" class="btn btn-primary animated infinite jello delay-2s">2222222222222</a>
          </div>
            </div>
          </Slide>
        </Slider>
        <div className="mt-4 text-center">
        <ButtonBack className="btn">Prev</ButtonBack>  
        <ButtonNext className="btn">Next</ButtonNext>
        </div>
      </CarouselProvider>
      </div>
   
{/* <Threee/> */}

<ReactCountdownClock seconds={20}
                     color="#000"
                     alpha={0.9}
                     size={300}
                      />

<Countdown date={Date.now() + 10000} />

<CountUp start={0} end={100}>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
</CountUp>

<CountUp
end={20}
duration={10} />

{/* <mesh
  visible
  userData={{ test: "hello" }}
  position={new THREE.Vector3(1, 2, 3)}
  rotation={new THREE.Euler(0, 0, 0)}
  geometry={new THREE.SphereGeometry(1, 16, 16)}
  material={new THREE.MeshBasicMaterial({ color: new THREE.Color('indianred')})} /> */}
 <CoolTabs
           tabKey={'1'}
           style={{ width:  550, height:  500, background:  'white' }}
           activeTabStyle={{ background:  'red', color:  'white' }}
           unActiveTabStyle={{ background:  'green', color:  'black' }}
           activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
           activeRightTabBorderBottomStyle={{ background:  'yellow', height:  4 }}
           tabsBorderBottomStyle={{ background:  'orange', height:  4 }}
           leftContentStyle={{ background:  'lightgreen' }}
           rightContentStyle={{ background:  'lightblue' }}
           leftTabTitle={'Left title'}
           rightTabTitle={'Right title'}
           leftContent={<Content1/>}
           rightContent={<Content2/>}
           contentTransitionStyle={'transform 0.6s ease-in'}
           borderTransitionStyle={'all 0.6s ease-in'}/>

      </div>
    )
  }
}
