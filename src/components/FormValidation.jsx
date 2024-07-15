import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";

const FormValidation = () => {
  return (
    <div>
      <Form
        autoComplete="off"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={(values) => {
          console.log(values);
        }}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            { required: true, message: "Please enter your name" },
            { whitespace: true },
            { min: 3, max: 20 },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true },
            { min: 6 },
            {
              validator: (_, value) =>
                value && value.includes("A")
                  ? Promise.resolve()
                  : Promise.reject("password do not match the criteria"),
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]} //important
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Passwords do not match");
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Confirm your password" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <Select placeholder="Select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[
            {
              required: true,
              message: "Please provide your DOB",
            },
          ]}
        >
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            placeholder="Choose your DOB"
          />
        </Form.Item>
        <Form.Item name="website" label="Website">
          <Input placeholder="Add your Website URL" />
        </Form.Item>
        <Form.Item
          name="agreement"
          wrapperCol={{ span: 24 }}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("To proceed you need to agree with our T&C"),
            },
          ]}
        >
          <Checkbox>
            Agree to our <a href="#">Terms & Conditions</a>
          </Checkbox>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormValidation;
