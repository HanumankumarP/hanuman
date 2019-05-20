import React,{Component} from 'react';
import Data from '../data/data.json';

class Skill extends Component{
  render(){
    return(
      <section>
<h5> SKILL SET </h5>

<h6> Languages </h6>
        {Data.Basics.skill.languages.map((pwa,index)=>{
          return React.createElement('span',{key:index},pwa);
        })}

<h6> Frameworks </h6>

        {Data.Basics.skill.frameworks.map((frame,index)=>{
          return React.createElement('span',{key:index},frame);
        })}

<h6> Libraries </h6>
        {Data.Basics.skill.libraries.map((frame,index)=>{
          return React.createElement('span',{key:index},frame);
        })}

        <h6> Data bases </h6>
                {Data.Basics.skill.database.map((db,index)=>{
                  return React.createElement('span',{key:index},db);
                })}

                <h6> CMS </h6>
                        {Data.Basics.skill.cms.map((cm,index)=>{
                          return React.createElement('span',{key:index},cm);
                        })}
      </section>
    )
  }
}

export default Skill;
