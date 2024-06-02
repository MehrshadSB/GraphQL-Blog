import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "1000px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
      }}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#32322C"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
