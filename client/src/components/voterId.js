<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Select } from 'antd';
import StateId from './stateId'
=======
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Select } from "antd";
import StateId from "./stateId";
>>>>>>> d911d2c849d66064e9709758508f3bf95198ef81

import "antd/dist/antd.css";

const VoterId = () => {
  const Option = Select.Option;

  let [states, setStates] = useState([]);
  let [choice, setChoice] = useState("Alabama");

  useEffect(() => {
    const api = "http://localhost:8000/api/voter";
    Axios.get(api)
      .then(results => {
        let sorted = results.data.sort();
        setStates(sorted);
      })
      .catch(err => console.log("error", err));
  }, []);

  function handleChange(value) {
    setChoice(value);
  }

  return (
    <>
      <Select
        size={"large"}
        defaultValue={choice}
        onChange={handleChange}
        style={selectStyle}
      >
        {states.map((ele, i) => {
          return <Option key={ele}>{ele}</Option>;
        })}
      </Select>
      <StateId usaState={choice} />
    </>
  );
};

const selectStyle = {
  width: 200
};

export default VoterId;
