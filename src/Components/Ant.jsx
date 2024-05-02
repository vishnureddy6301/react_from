import React, { useState } from 'react';
import { Button, Checkbox, DatePicker, Form, Input, Select, InputNumber } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Ant = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [numberValue, setNumberValue] = useState(null); // Initial value

  const handleChange = (value) => {
    setSelectedOptions(value);
    console.log('Selected:', value);
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
    console.log('Selected Date:', dateString);
  };

  const onChangeNumber = (value) => {
    setNumberValue(value);
    console.log('Number Value:', value);
  };

  const options = [
    { value: 'c', label: 'C' },
    { value: 'java', label: 'Java' },
    
  ];

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item style={{marginLeft:"2rem"}}
      label="Select Subject"
      name="Selectsubject"
      rules={[
          {
            required: true,
            message: 'Please select your subject!',
          },
        ]}
      >
      

      <Select
      
        mode="multiple"
        allowClear
        style={{
          width: '50%',
        }}
        placeholder="Please select"
        value={selectedOptions}
        onChange={handleChange}
        options={options}
       
      />
      </Form.Item>

      {/*<Select
        mode="multiple"
        disabled
        style={{
          width: '100%',
        }}
        placeholder="Please select"
        value={selectedOptions}
        onChange={handleChange}
        options={options}
      />*/}
      <Form.Item
        label="Birth Date"
        name="birthdate"
        rules={[
          {
            required: true,
            message: 'Please select your birth date!',
          },
        ]}
      >
        <DatePicker onChange={handleDateChange} />
      </Form.Item>
      <Form.Item  style={{marginLeft:"-3rem"}}
      label="Age"
      name="Age"
      rules={[
          {
            required: true,
            message: 'Please select your Age!',
          },
        ]}
      >
      
        <InputNumber min={1} max={100} defaultValue={""} onChange={onChangeNumber} />
        
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Ant;
