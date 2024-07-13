import { Progress } from "antd";

const Progressbar = () => {
  return (
    <div>
      <Progress type="line" percent={33} />
      <Progress
        type="circle"
        percent={50}
        strokeColor="red"
        strokeWidth={10}
        status="active"
        steps={3}
      />
    </div>
  );
};

export default Progressbar;
