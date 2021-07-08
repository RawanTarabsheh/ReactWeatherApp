import React from "react";

const Weather = (props) => {
  return (
    <div className="info">
      {props.tempreature && (
        <p className="info_key">
          tempreature :<span className="info_value">{props.tempreature}</span>
        </p>
      )}
      {props.city && (
        <p className="info_key">
          city : <span className="info_value">{props.city}</span>
        </p>
      )}
      {props.county && (
        <p className="info_key">
          county :<span className="info_value"> {props.county}</span>
        </p>
      )}
      {props.humidity && (
        <p className="info_key">
          humidity : <span className="info_value">{props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="info_key">
          description : <span className="info_value">{props.description}</span>
        </p>
      )}
      {props.error && (
        <p className="info_key">
          error : <span className="info_value">{props.error}</span>
        </p>
      )}
    </div>
  );
};
export default Weather;
