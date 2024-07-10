import { Button, Form, Input } from "antd";

const FormPage = () => {
  const handleOnFinish = (e) => {
    console.log(e);
  };

  return (
    <div>
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
