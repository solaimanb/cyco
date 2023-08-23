import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30%"
        height="30%"
        viewBox="0 0 300 300"
      >
        <circle
          id="arc1"
          className="circle"
          cx="150"
          cy="150"
          r="120"
          opacity=".89"
          fill="none"
          stroke="#632b26"
          strokeWidth="12"
          strokeLinecap="square"
          strokeOpacity=".99213"
          paintOrder="fill markers stroke"
        />
        <circle
          id="arc2"
          className="circle"
          cx="150"
          cy="150"
          r="120"
          opacity=".49"
          fill="none"
          stroke="#632b26"
          strokeWidth="8"
          strokeLinecap="square"
          strokeOpacity=".99213"
          paintOrder="fill markers stroke"
        />
        <circle
          id="arc3"
          className="circle"
          cx="150"
          cy="150"
          r="100"
          opacity=".49"
          fill="none"
          stroke="#632b26"
          strokeWidth="20"
          strokeLinecap="square"
          strokeOpacity=".99213"
          paintOrder="fill markers stroke"
        />
        <circle
          id="arc4"
          className="circle"
          cx="150"
          cy="150"
          r="120"
          opacity=".49"
          fill="none"
          stroke="#632b26"
          strokeWidth="30"
          strokeLinecap="square"
          strokeOpacity=".99213"
          paintOrder="fill markers stroke"
        />
        <circle
          id="arc5"
          className="circle"
          cx="150"
          cy="150"
          r="100"
          opacity=".89"
          fill="none"
          stroke="#632b26"
          strokeWidth="8"
          strokeLinecap="square"
          strokeOpacity=".99213"
          paintOrder="fill markers stroke"
        />
        <circle
          id="arc6"
          className="circle"
          cx="150"
          cy="150"
          r="90"
          opacity=".49"
          fill="none"
          stroke="#632b26"
          strokeWidth="16"
          strokeLinecap="square"
          strokeOpacity=".99213"
          paintOrder="fill markers stroke"
        />
        <circle
          id="arc7"
          className="circle"
          cx="150"
          cy="150"
          r="90"
          opacity=".89"
          fill="none"
          stroke="#632b26"
          strokeWidth="8"
          strokeLinecap="square"
          strokeOpacity=".99213"
          paintOrder="fill markers stroke"
        />
        <circle
          id="arc8"
          className="circle"
          cx="150"
          cy="150"
          r="80"
          opacity=".79"
          fill="#4DD0E1"
          fillOpacity="0"
          stroke="#632b26"
          strokeWidth="8"
          strokeLinecap="square"
          strokeOpacity=".99213"
          paintOrder="fill markers stroke"
        />
      </svg>
    </div>
  );
};

export default Loading;
