import React,{Component} from 'react';
import Data from '../data/data.json';

class Summery extends Component{
  render(){
    return(
      <section>
      <h5> SUMMARY </h5>
      <ul>
      {Data.Basics.desc.map((item,index)=>{
        return React.createElement('li',{key:index},item);
      })}
      </ul>
      </section>
    )
  }
}

export default Summery;
