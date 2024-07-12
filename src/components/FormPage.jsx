import { Button, Form, Input, Alert } from "antd";
import { useState } from "react";

const FormPage = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleOnFinish = (e) => {
    console.log(e);
    setShowAlert(true);
  };

  return (
    <div>
      {showAlert && (
        <Alert message="SUCCESS" description="Loginn Successed" closable />
      )}
      <Form onFinish={handleOnFinish}>
        <Form.Item label="User Name" name="username">
          <Input placeholder="username" required></Input>
        </Form.Item>
        <Form.Item label="password" name="password">
          <Input.Password placeholder="password" required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormPage;
