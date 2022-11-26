import React, { useState } from 'react'
import Select from 'react-select'
import './form.css'

function Form() {
    var colors=[
        {
          value:1,
          label:"lime"
        },
        {
          value:2,
          label:"lavender"
        },
        {
          value:3,
          label:"crimson"
        },
        {
          value:4,
          label:"teal"
        },
        {
          value:5,
          label:"rebeccapurple"
        },
        {
          value:6,
          label:"ghostwhite"
        },
        {
          value:7,
          label:"aquamarine"
        },
        {
          value:8,
          label:"aliceblue"
        },
  ];
  var [setbgcolor,ddlvalue]=useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return (
    <>

          
      

      <style>{'.ck {background-color:'+setbgcolor+';}'}</style> 
      <section className='ck'>
        <Select options={colors} onChange={ddlhandle} className="sl">
      <style>{'.ck {background-color:'+setbgcolor+';}'}</style> 
            <h3>{setbgcolor}</h3>
        </Select>
            </section> 
      
        
        <div className='dk'>
            <style>{'.dk {background-color:'+setbgcolor+';}'}</style>
            <h3>{setbgcolor}</h3>
        </div>
             </>
    
  )
}

export default Form