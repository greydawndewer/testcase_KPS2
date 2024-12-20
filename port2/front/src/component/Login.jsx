import React, { useState } from "react";
import axios from "axios";
import './x.css';
import * as XLSX from "xlsx";

const Home = () => {

  const handleRegister = async () => {
      console.log("yo");
  };
  return (

      <div className="iframe-container">
        <iframe src="teacher_login.html" height="690" width="100%"></iframe>
      </div>
    );
};

export default Home;