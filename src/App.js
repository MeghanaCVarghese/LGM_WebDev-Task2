import './App.css';
import Users from "./components/Cards";
import React,{Component} from "react";


    class App extends Component {
      constructor(props) {
        super(props);
    
        // Set initial state
        this.state = { users_data: [], loading: false };
    
        this.updateState = this.updateState.bind(this);
      }
    
      updateState() {
        this.setState({ loading: true });
    
        setTimeout(
          async function () {
            const response = await fetch("https://reqres.in/api/users?page=1");
            const jsonresponse = await response.json();
            console.log(jsonresponse);
            this.setState({ users_data: jsonresponse["data"], loading: false });
          }.bind(this),
          2000
        );
      }
    
      render() {
        return (
          <>
            <nav className="navbar">
              <div className="navitems">
                <h2><span>Lets Grow More</span></h2>
                <button className="fetchbtn" onClick={this.updateState}>
                  Get Users
                </button>
              </div>
            </nav>
            <div className="userdatacontainer">
              <Users loading={this.state.loading} users={this.state.users_data} />
            </div>
            <footer className="footer">
              <h1>Created By <a href="https://www.linkedin.com/in/meghana-c-varghese-13a364199/" target="_blank">Meghana C Varghese</a></h1>
            </footer>
          </>
        );
      }
    }


export default App;