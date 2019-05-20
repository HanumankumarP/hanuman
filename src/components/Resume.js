import React,{Component} from 'react';
import '../bootstrap/css/bootstrap.min.css';
import Card from './Profile';
import Content from './Content';

class Resume extends Component {
  render(){
    return(
<div className="col-md-12 row">
<Card/>
<Content/>
</div>
    )
  }
}

export default Resume;
