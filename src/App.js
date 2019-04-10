    
import React from 'react'
import './css/application.css';
import MapContainer from './components/mapContainer';
import TopBar from './components/TopBar';
import CommentBar from './components/CommentBar';
import BottomBar from './components/BottomBar';
import MultiStepForm from './components/MultiStepForm';
import TrailFullInfo from './components/TrailFullInfo';
import TrailFixRequests from './components/TrailFixRequests';
import TrailFixRequestDisplay from './components/TrailFixRequestDisplay'
import TrailComments from './components/TrailComments';
import IndividualTrailFull from './components/IndividualTrailFull';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';

import { BrowserRouter as Router, Route} from "react-router-dom";

class Index extends React.Component {
  
    render() {
      
      return (
        <div className="primary">
            
          <TopBar />
    
          <main className="primary__main reset">

            <div className="container">
              <img src={require("./images/trail-blazer-home.jpg")} alt="Biking home" style ={{width: '100%', height: '100%'}}></img>
              <img src={require("./images/custom-font.png")} alt = "logo" style ={{position: 'relative', bottom: '500px', right: '100px'}}></img>
            </div>
            <div className="font-container">
              <h4 style={{paddingRight: "6em"}}> - Trail Blazers is an app that assits communities in maintaining and creating new trail systems.</h4> 
              <h4 style={{paddingLeft: "6em"}}>Let the community know you would like a trail fixed and donate to fix your favorite trails -</h4>
            </div>

            <div className="iframe-rwd">
    
              <MapContainer />
    
            </div>
          
          </main>
          
          {/* <BottomBar /> */}
          
        </div>
    );  
  }
}

function Landing() {
  return (
  
    <div className="primary">

      <main className="primary__main">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-3">
              &nbsp;
            </div> 
              
            <div className="col-sm-6">
              
              <LandingPage />

            </div>

            <div className="col-sm-3">
              &nbsp;
            </div>
            
          </div>
        </div>
      </main>

    </div>
  );
}

function Login() {
  return (
  
    <div className="primary">

      <main className="primary__main">
        <div className="container-fluid">
          <div className="row">
          
            <div className="col-sm-12">
              <h3 className="logo-sml">Trail Blazers</h3>
              <div className="push-menu reverse">
                <a href="/register" className="left">Register</a>
                <a href="/login" className="right">Login</a>
              </div>
            </div>
          
          </div>  
        
          <div className="row form-row">

            <div className="col-sm-3">
              &nbsp;
            </div> 
              
            <div className="col-sm-6">
              
              <div className="web-form">
                  
                <LoginForm />

              </div>
            </div>

            <div className="col-sm-3">
              &nbsp;
            </div>
            
          </div>
        </div>
      </main>

    </div>
  );
}

function Register() {
  return (
  
    <div className="primary">

      <main className="primary__main">
        <div className="container-fluid">
        <div className="row">
          
        <div className="col-sm-12">
          <h3 className="logo-sml">Trail Blazers</h3>
          <div className="push-menu">
            <a href="/register" className="left">Register</a>
            <a href="/login" className="right">Login</a>
          </div>
        </div>
      
      </div>  
    
      <div className="row form-row">

            <div className="col-sm-3">
              &nbsp;
            </div> 
              
            <div className="col-sm-6">
              <div className="web-form">
                  
                <SignUpForm />

              </div>
            </div>

            <div className="col-sm-3">
              &nbsp;
            </div>
            
          </div>
        </div>
      </main>

    </div>
  );
}

function FormExample() {
  return (
    <div className="primary">

      <TopBar />

      <main className="primary__main">
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-4">
              &nbsp;
            </div>
              
            <div className="col-sm-4">
              <h1>Multi-Step Form</h1>
              <div className="web-form">
                  
                <MultiStepForm />

              </div>
            </div>

            <div className="col-sm-4">
              &nbsp;
            </div>
            
          </div>
        </div>
      </main>

      {/* <BottomBar /> */}

    </div>
  );
}

function FullInfo() {
  return (
    <div className="primary">
        
      <TopBar />

      <main className="primary__main">
        <div className="container-fluid">
          
          <div className="row">

            <div className="col-sm-12 col-md-6 left">
              <div className="trail">

                <TrailFullInfo />
                    
                <div className="lists-container trail__comments">
                    
                  <CommentBar />
                  <hr />
                  <TrailComments />

                </div>


              </div>
            </div>
              
            <div className="col-sm-12 col-md-6 right">
              <div className="lists-container2">
               <div className="iframe-rwd">
    
                 <MapContainer />

                </div>
              </div>

              <div className="trail">

                <IndividualTrailFull />

              </div>
            </div>
            
          </div>

        </div>
      </main>
    
      {/* <BottomBar /> */}

    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/form-example/" component={FormExample} />
        <Route path="/trails/:id" component={FullInfo} />
      </div>
    </Router>
  );
}

export default AppRouter;