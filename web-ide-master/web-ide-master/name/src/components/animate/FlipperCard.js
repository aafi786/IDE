import React, { Component } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { Card, Icon, Avatar } from 'antd';
import { Divider } from 'antd';
const { Meta } = Card;

const SmallSquare = ({ onClick, ...rest}) => (
  <div className="square mt-5" onClick={onClick} {...rest}  >
<div className="card shadow" style={{width:"300px",borderRadius:"50px 50px 50px 50px"}} >
  <img className="card-img-top"
  style={{width:"300px",borderRadius:"50px 50px 0px 0px"}}
   src="https://minio.codingblocks.com/amoeba/8d22fc34-2747-4a93-94cd-e3148b58840f.svg" alt="Card image cap"/>
  <div className="card-body">
  <img className="card-img-top thumbnail ml-4
   rounded-circle " 
  style={{
  marginTop:"-70px",
  border:"5px solid white"
  ,width:"100px"}}
  src="https://minio.codingblocks.com/amoeba/8d22fc34-2747-4a93-94cd-e3148b58840f.svg" alt="Card image cap"/>
    
  <div className="d-flex flex-row jusify-content-between">
    <div className="d-flex flex-column">
    <h5 className="card-title mt-4 ml-3" style={{color:"cornflowerblue",
    size:"10px",fontSize:"18px",
  fontWeight:"bolder"}}>$ 8499</h5> 
  </div>
  <div className="d-flex flex-column mt-4 ml-2 align-items-center">
  <h3 style={{textDecoration:"line-through",color:"grey",
  fontWeight:"normal",
  marginTop:"3px",
  fontSize:"12px"}}>$11999</h3>
    </div>
<div className="d-flex flex-column mt-3 ml-5">
<a href="#" className="btn " style={{backgroundImage:
   "linear-gradient(to right, #67b26f, #4ca2cd)",color:"white"}}>Details</a>
</div>
  </div>
   
  </div>
</div>
    </div>

);
   
const BigSquare = ({ onClick, ...rest }) => (
  <div className="full-screen-square "  onClick={onClick} {...rest}>
     <div className="card shadow" style={{borderRadius:"50px 50px 50px 50px"}}>
     <div className="card-body">
     <img className="rounded-circle ml-4 mt-4" style={{    size:"10px",fontSize:"18px",
  fontWeight:"bolder"}}
      src="https://minio.codingblocks.com/amoeba/8d22fc34-2747-4a93-94cd-e3148b58840f.svg" style={{
        border:"5px solid white"
        ,width:"100px"}} alt="Card image cap"/>
     
    <h5 className="card-title ml-4 mt-2" style={{}}>Python Master Course | Crux</h5>
    <p className="card-text ml-4 " style={{color:"grey",
  fontWeight:"normal",
  marginTop:"3px",
  fontSize:"12px"}}>Start from basics, become a java member.</p>

     <div className="d-flex flex-row jusify-content-between">
    <div className="d-flex flex-column">
    <h5 className="card-title mt-4 ml-4" style={{color:"cornflowerblue",
    size:"10px",fontSize:"18px",
  fontWeight:"bolder"}}>$ 8499</h5> 
  </div>
  <div className="d-flex flex-column mt-4 ml-2 align-items-center">
  <h3 style={{textDecoration:"line-through",color:"grey",
  fontWeight:"normal",
  marginTop:"3px",
  fontSize:"12px"}}>$11999</h3>
    </div>
<div className="d-flex flex-column mt-3 ml-5" >
<a href="#" className="btn ml-5" style={{backgroundImage:
   "linear-gradient(to right, #67b26f, #4ca2cd)",color:"white"}}>Explore</a>
</div>
  </div>

  <hr/>
  <p className=" ml-4 " style={{textAlign:"center",
  fontWeight:"normal",
  marginTop:"3px",
  fontSize:"12px"}}>Hurry Up! Enrollment ends Jul 15th 2019</p><br/>
    <p className=" ml-4 " style={{textAlign:"center",
  fontWeight:"normal",
  color:"cornflowerblue",
  marginTop:"-20px",
  fontSize:"12px"}}>Click here too get a free trial now.</p>
 


  </div>
     </div>
    </div>

);

export default class FlipperCard extends Component {
  state = { fullScreen: false };

  toggleFullScreen = () => {
    this.setState(prevState => ({
      fullScreen: !prevState.fullScreen
    }));
  };

  render() {
    return (
      <Flipper flipKey={this.state.fullScreen}>
        {this.state.fullScreen ? (
          <Flipped flipId="square">
            <BigSquare onClick={this.toggleFullScreen} />
          </Flipped>
        ) : (
          <Flipped flipId="square">
            <SmallSquare onClick={this.toggleFullScreen} />
          </Flipped>
        )}
      </Flipper>
    );
  }
}
