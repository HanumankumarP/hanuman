import React, {Component} from 'react';
import '../bootstrap/css/bootstrap.min.css';
import Data from '../data/data.json';
import Summery from './Summery.js';
import Skill from './Skill'

class Content extends Component{
  render(){

    return(
      <div className="col-md-8">
      <div className="card bg-light border-primary mb-3" style={{padding:'1%'}}>
      <Summery/>
      <section>
      <h5> EXPERIENCE WITH PHP </h5>
      <ul>
        {Data.Basics.phpexp.map((php,index)=>{
          return React.createElement('li',{key:index},php);
        })}
        </ul>
      </section>
      <section>
      <h5> EXPERIENCE WITH JAVASCRIPT </h5>
      <ul>
        {Data.Basics.jsexp.map((js,index)=>{
          return React.createElement('li',{key:index},js);
        })}
        </ul>
      </section>

      <section>
      <h5> EXPERIENCE IN PWA </h5>
      <ul>
        {Data.Basics.pwaexp.map((pwa,index)=>{
          return React.createElement('li',{key:index},pwa);
        })}
        </ul>
      </section>

      <Skill/>

      <section>
      <h5> EDUCATION </h5>

      <p> B-Tech (Computer Science and Engineering), Raghu Engineering College - 2015 </p>
      </section>
      </div>
      </div>
    )
  }
}

export default Content;
