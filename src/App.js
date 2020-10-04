import React, {useState} from "react";
import { SelectOption, Report} from './components/'
import { AntCloudOutlined } from '@ant-design/icons';

const App = () => {
  const [data, setData] = useState({})
  
  const selectedData = e => setData(e)

  return (
    <div className="app-weather">
      <h1><AntCloudOutlined /> 5-day weather forecast</h1>

      {/* CONTENT WRAP */}
      <div className="content-wrap">
        <div className="center-item">
          {/* SELECT OPTION */}
          <SelectOption selectedData={ e => selectedData(e) } />
          {/* REPORT */}
          <Report data={data}/>
        </div>
      </div>
    </div>
  );
};

export default App;
