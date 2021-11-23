import React, { Component } from "react";

export class ReactStateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      email: "",
      password: "",
      firstnameEmptyError: false,
      firstnameLenError: false,
      emailEmptyError: false,
      emailValidError: false,
      passwordEmptyError: false,
      passwordInvalideError: false,
    };

    this.firstnameVal = this.firstnameVal.bind(this);
    this.EmailVal = this.EmailVal.bind(this);
    this.passwordVal = this.passwordVal.bind(this);
    this.Validate = this.Validate.bind(this);
  }

  firstnameVal(event) {
    const fieldValue = event.target.value;
    const fieldId = event.target.id;
    if (fieldId === "firstname") {
      this.setState({ firstname: fieldValue });
      const firstname = this.state.firstname;
      if (firstname) {
        if (firstname.length <= 2) {
          this.setState({
            firstnameLenError: true,
            firstnameEmptyError: false,
          });
        } else {
          this.setState({ firstnameLenError: false });
        }
      } else {
        this.setState({ firstnameEmptyError: true, firstnameLenError: false });
      }
    }
  }

  EmailVal(event) {
    const fieldValue = event.target.value;
    const fieldId = event.target.id;
    if (fieldId === "email") {
      this.setState({ email: fieldValue });
      const email = this.state.email;
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email) {
        this.setState({ emailEmptyError: false, emailValidError: true });
        var crtEmail = mailformat.test(email);
        if (crtEmail) {
          this.setState({ emailValidError: false, emailEmptyError: false });
        } else {
          this.setState({ emailValidError: true });
        }
      } else {
        this.setState({ emailEmptyError: true, emailValidError: false });
      }
    }
  }

  passwordVal(event) {
    const fieldValue = event.target.value;
    const fieldId = event.target.id;
    if (fieldId === "password") {
      this.setState({ password: fieldValue });
      const password = this.state.password;
      var strongRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if (password) {
        this.setState({
          passwordEmptyError: false,
          passwordInvalideError: true,
        });
        if (strongRegex.test(password)) {
          this.setState({
            passwordEmptyError: false,
            passwordInvalideError: false,
          });
        } else {
          this.setState({
            passwordEmptyError: false,
            passwordInvalideError: true,
          });
        }
      } else {
        this.setState({
          passwordEmptyError: true,
          passwordInvalideError: false,
        });
      }
    }
  }

  Validate() {
    const firstname = this.state.firstname;
    const email = this.state.email;
    const password = this.state.password;
    if (!firstname || !email || !password) {
      this.firstnameVal();
      this.EmailVal();
      this.passwordVal();
    }
  }

  render() {
    return (
      <div className="container itemCenter">
        <h2>Enter Your Details</h2>
        <div>
          <input
            type="text"
            value={this.state.firstname}
            id="firstname"
            placeholder="Your Name"
            onChange={this.firstnameVal}
          />
        </div>
        {this.state.firstnameEmptyError ? (
          <label>* This Field is Required</label>
        ) : (
          " "
        )}
        {this.state.firstnameLenError ? (
          <label>* Enter More then 3 Characters</label>
        ) : (
          " "
        )}
        <div>
          <input
            type="email"
            value={this.state.email}
            id="email"
            placeholder="Your Email"
            onChange={this.EmailVal}
          />
        </div>
        {this.state.emailEmptyError ? (
          <label>* This Field is Required</label>
        ) : (
          " "
        )}
        {this.state.emailValidError ? (
          <label>* Enter the Valide EmailId</label>
        ) : (
          " "
        )}
        <div>
          <input
            type="Password"
            value={this.state.password}
            id="password"
            placeholder="Your Password"
            onChange={this.passwordVal}
          />
        </div>
        {this.state.passwordEmptyError ? (
          <label>* This Field is Required</label>
        ) : (
          " "
        )}
        {this.state.passwordInvalideError ? (
          <label>
            * Enter the Password with the combination of Number, Special
            Character, Uppercase and Lowercase Letter
          </label>
        ) : (
          " "
        )}
        <div>
          <button
            type="button"
            class="btn btn-primary newButton"
            onClick={this.Validate}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default ReactStateTask;
