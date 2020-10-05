import React, { useState } from 'react'
import { country } from "../data/countryList";
import operation from "../data/operation.js";
import { Select } from "antd";
import { getcountryName } from '../middleware';

export const SelectOption = props => {
    const [city, setCity] = useState([]);
    const { Option } = Select;

    // FUNCTION SELECT COUNTRY
    const selectCountry = (name) => {
      const data = operation.getCity();
      setCity(data[name]);
    };
    
    // FUNCTION SELECT CITY
    const selectCity = (id) => {
      fetch(  `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=2caff03206df1a72b6216b3719e72524` )
        .then((res) => res.json())
        .then((result) => {
            props.selectedData(result)
          }, (error) =>  console.log(error)
        );
    };

    return (
        <div className="app-select">
          <h2 className="text-center mb-4">Please choose a location</h2>
          
          {/* SELECT COUNTRY */}
          <Select onSelect={selectCountry} placeholder="Select Country">
            {country.map((data, idx) => (
              <Option value={data} key={idx}>{getcountryName(data)}</Option>
            ))}
          </Select>
            
          {/* SELECT CITY */}
          <Select  onSelect={selectCity} placeholder="Select City">
            {city.map((data, idx) => {
              return <Option value={data.id} key={idx}>{data.name}</Option>;
            })}
          </Select>
        </div>
    )
}
