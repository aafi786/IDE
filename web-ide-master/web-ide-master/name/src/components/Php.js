import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOutputPhp, giveOutput } from "../actions/codeActions";
import axios from "axios";

import AceEditor from "react-ace";
import "brace/mode/php";
import "brace/theme/github";
import Navbar from "./Navbar";

const request = require("request");
class Php extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
      output: ""
    };
    this.onChange = this.onChange.bind(this);
    this.getOutput = this.getOutput.bind(this);
    this.onCHange = this.onCHange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCHange(newValue) {
    console.log("change", newValue);
    this.setState({
      code: newValue
    });
  }

  getOutput() {
    const CodeData = {
      script: this.state.code
    };
    axios
      .post("/users/php", CodeData)
      .then(
        res => {
          this.state.output = res.data.result;
          console.log(res.data.result);
          this.props.giveOutput(res.data.result);
        }
        //history.push('/login')
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="ml-3 mt-5">
        <Navbar />
        <div className="row">
          <div className="col-6">
            <AceEditor
              mode="php"
              onChange={this.onCHange}
              name="code"
              value={this.state.code}
              editorProps={{ $blockScrolling: true }}
              placeholder="Write Php code."
            />

            {/* <textarea
                id="code" name="code"
                style={{backgroundColor:"black",color:"white",width:"700px",height:"450px"}}
                value={this.state.code}
                onChange={this.onChange}
                placeholder="Write Php code."></textarea><br/><br/> */}
            <button
              onClick={this.getOutput}
              type="submit"
              class="btn "
              style={{ borderRadius: "50px" }}
            >
              Run
            </button>
          </div>
          <div className="col-6">
            <textarea
              id="output"
              name="output"
              style={{
                backgroundColor: "black",
                color: "white",
                width: "700px",
                height: "450px"
              }}
              value={this.state.output}
              onChange={this.onChange}
              placeholder={this.props.code.output}
            />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  code: state.code
});

export default connect(
  mapStateToProps,
  { getOutputPhp, giveOutput }
)(Php);
