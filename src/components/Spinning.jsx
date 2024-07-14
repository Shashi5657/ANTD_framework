import { Button, Spin } from "antd";
import { useState } from "react";

const Spinning = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Spin spinning={loading}></Spin>
      <Button
        type="primary"
        onClick={() => {
          setLoading((prevLoading) => !prevLoading);
        }}
      >
        Toggle
      </Button>
    </div>
  );
};

export default Spinning;
