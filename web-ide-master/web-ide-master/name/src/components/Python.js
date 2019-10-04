import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOutputPython, giveOutput } from "../actions/codeActions";
import axios from "axios";
import AceEditor from "react-ace";
import "brace/mode/python";
import "brace/theme/github";
import Navbar from "./Navbar";
import windowSize from "react-window-size";

const request = require("request");

class Python extends Component {
  constructor() {
    super();
    this.state = {
      language: "python",
      code: "",
      output: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onCHange = this.onCHange.bind(this);
    this.getOutput = this.getOutput.bind(this);
  }

  componentDidMount() {
    //this.refs.reactAceComponent.editor.resize('700px')
  }
  onCHange(newValue) {
    console.log("change", newValue);
    this.setState({
      code: newValue
    });
    // this.refs.reactAceComponent.editor.resize()
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  getOutput() {
    const CodeData = {
      script: this.state.code
    };
    axios
      .post("/users/" + this.state.language, CodeData)
      .then(res => {
        this.state.output = res.data.result;
        console.log(res.data.result);
        this.props.giveOutput(res.data.result);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="ml-3  mr-5">
        <Navbar />
        <div className="row">
          <div className="">
            <div>
              <AceEditor
                mode="python"
                height={window.innerHeight - window.innerHeight / 3}
                width={window.innerWidth - 50}
                ref="reactAceComponent"
                onChange={this.onCHange}
                name="code"
                value={this.state.code}
                editorProps={{ $blockScrolling: true }}
                placeholder="Write Python code."
              />
            </div>
            {/* <textarea
                id="code" name="code"
                style={{backgroundColor:"black",color:"white",width:"700px",height:"450px"}}
                value={this.state.code}
                onChange={this.onChange}
                placeholder="Write Python code."></textarea><br/><br/> */}
            <button
              onClick={this.getOutput}
              type="submit"
              class="btn "
              style={{ borderRadius: "50px" }}
            >
              Run
            </button>
          </div>
          <div className="">
            <textarea
              className="fixed-bottom"
              id="output"
              name="output"
              style={{
                backgroundColor: "black",
                color: "white",
                height: "100px",
                width: "1500px"
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
  { getOutputPython, giveOutput }
)(Python);
