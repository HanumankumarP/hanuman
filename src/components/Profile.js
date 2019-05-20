import React, {Component} from 'react';
import '../bootstrap/css/bootstrap.min.css';
import Pic from '../profile.png';
import '../App.css';
import Data from '../data/data.json';

class Profile extends Component{
render(){
  var styles={
    boxShadow:'0px 6px 6px -6px #000',
    top:'10px',
    bottom:'50px',
    // border:'1px solid #ddd'
  };
  return(
    <div className="col-md-3">
      <div className="card bg-light border-primary" style={styles}>
      <div className="card-body">
      <img src={Pic} alt="profile"/>
      <h5> {Data.Basics.name} </h5>
      <p> {Data.Basics.role} </p>
      <div style={{fontSize:'14px'}}> <a href="mailto:{Data.Basics.email}"> {Data.Basics.email} </a> </div>
      <a href="tel:{Data.Basics.mobile}"> {Data.Basics.mobile} </a>
      <p style={{fontSize:'14px'}}> {Data.Basics.location} </p>
      <a href="#" className="a"> <i className="fab fa-github-square"></i> </a> <a href="#" className="a"> <i className="fab fa-linkedin"></i> </a> <a href="#" className="a"> <i className="fab fa-twitter-square"></i> </a> <a href="#" className="a"> <i className="fab fa-facebook"></i> </a>
      </div>

      </div>


    </div>
  )
}
}

export default Profile;
