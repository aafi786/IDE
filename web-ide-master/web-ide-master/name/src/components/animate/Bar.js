import React, { Component } from 'react'

export default class Bar extends Component {
  render() {
    return (
      <div>
        
     <nav class="navbar mb-4 navbar-expand-lg navbar-light bg-white shadow">
            <img src="./img/iosd.PNG" style={{height: "40px",width: "140px"}}/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active ml-3 mr-3">
                  <a class="nav-link" href="#" style={{fontWeight: "bolder"}}>Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active dropdown ml-3 mr-3">
                  <a style={{fontWeight: "bolder"}}class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Courses
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li class="nav-item active dropdown ml-3 mr-3">
                        <a style={{fontWeight: "bolder"}}class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Career Tracks<sup style={{color: "lightseagreen"}}> New</sup>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                      <li class="nav-item active ml-3 mr-3">
                            <a style={{fontWeight: "bolder"}}class="nav-link" href="#">Register <span class="sr-only">(current)</span></a>
                          </li>
                          <li class="nav-item active ml-3 mr-3">
                                <a class="nav-link" href="#"style={{fontWeight: "bolder"}}>Events <span class="sr-only">(current)</span></a>
                              </li>
                              <li class="nav-item active ml-3 mr-3">
                                    <a class="nav-link" href="#" style={{fontWeight: "bolder"}}>Campus ---- <span class="sr-only">(current)</span></a>
                                  </li>
                              <li class="nav-item active ml-3 mr-3">
                                    <a class="nav-link" href="#" style={{fontWeight: "bolder"}}>Placement Cell <span class="sr-only">(current)</span></a>
                                  </li>
                                
              </ul>
              <form class="form-inline my-2 my-lg-0">
              
                        <div class="ml-3 mr-sm-2">
                          <button class=" btn bg-danger " style={{bordeRadius: "30px 0px 0px 30px", color: "white",height:"35px",textAlign: "center"}}>
                              <div class="align-middle">IOSD</div>
                              </button>
                              <button class=" btn bg-primary " style={{borderRadius: "0px 30px 30px 0px", color: "white",height:"35px",textAlign: "center"}}>
                                      <div class="align-middle">login</div>
                                      </button>
                          </div>
                        
              </form>
            </div>
          </nav>

      </div>
    )
  }
}
