import React, { Component } from "react";
import { GreetingContainer } from "../../function_based/conditional_rendering/GreetingContainer";
import { LoginButton } from "../../function_based/conditional_rendering/LoginButton";
import { LogoutButton } from "../../function_based/conditional_rendering/LogoutButton";

export class LoginController extends Component {
  // now we'll access buttons from different compoennts and show messages from different components and all will be lined up in here for container to show it on DOM
  //  we use this stateful component, and render either Login button or Logout Button depending on its value

  constructor(props) {
    super(props);
    this.state = {
      loggedUser: false,
    };

    this.handleLoginButtonClicked = this.handleLoginButtonClicked.bind(this);
    this.handleLogoutButtonClicked = this.handleLogoutButtonClicked.bind(this);
  }

  handleLoginButtonClicked() {
    this.setState({ loggedUser: true });
  }

  handleLogoutButtonClicked() {
    this.setState({ loggedUser: false });
  }

  render() {
    let isLogged = this.state.loggedUser;
    let button;
    if (isLogged) {
      button = <LogoutButton onClicked={this.handleLogoutButtonClicked} />;
    } else {
      button = <LoginButton onClicked={this.handleLoginButtonClicked} />;
    }
    // while declating a variable and using an if statement a fine way to conditionally render is a fine but there is a shorter syntrax for that
    // console.log(button);
    return (
      <div>
        {/* based on which satte it is and which button will show next, we will generate Greetings accordingly  */}
        <GreetingContainer isLogged={isLogged} />
        {button}
        <br />
        {/* using inline if else with conditional operator */}
        <p>
          user is <b>{isLogged ? "currently" : "not"}</b> logged in
        </p>
        {/* can also be used for more complex expressions */}
        <div>
          {isLogged ? (
            <LogoutButton onClicked={this.handleLogoutButtonClicked} />
          ) : (
            <LoginButton onClicked={this.handleLoginButtonClicked} />
          )}
        </div>
        {/* also a reminder whenever conditions become too complex, it might be a good idea to extract a component */}
        <br />
      </div>
    );
  }
}
