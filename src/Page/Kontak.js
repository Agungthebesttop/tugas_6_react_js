import React, { Component } from "react";
import Header from  "./Header";
import "../Style/Kontak.css";

class Kontak extends Component {
  render(){
    return(
      <div id="kontak_bg">
        <Header />
        <div className="kontak">
          <h3>
            Jl. Swadaya IV, Pd. Ranggon, Cipayung, Jakarta Timur, DKI Jakarta 13860{" "}
          </h3>
          <p>0878 xxxx xxxx </p>
        </div>
      </div>
    )
  }
}

export default Kontak;
