import React from "react";
import {navigationbar, homebutton} from "./css.js";
export class HomePage extends React.Component{
  constructor(prop){
    super(prop);
  }  


  render(){
      return(
          <div>
              <div id="Navigation Bar" style={{...navigationbar}}>
                  <div style={{...homebutton}}><strong>home</strong></div>
                  <div>About</div>
                  <div>Shop</div>
              </div>
          </div>
      )
  }




};
