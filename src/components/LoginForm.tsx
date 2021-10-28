import React, {FC} from 'react';
import {Form, Input, Button, Checkbox} from 'antd';
import {rules} from "../utils/rules";

const LoginForm: FC = () => {

    const submit = () => {
        console.log('submit')
    }
    const onFinishFailed = () => {
        console.log('fail')
    }

    return (
        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: false}}
            onFinish={submit}
            onFinishFailed={onFinishFailed}

            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{offset: 8, span: 16}}>
                <Button type="primary" >
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
};

export default LoginForm;
