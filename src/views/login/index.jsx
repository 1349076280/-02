import React, { Component } from 'react';
import login from './index.module.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const tailLayout = {
    wrapperCol: {
        offset: 9,
        span: 15,
    },
};


const onFinishFailed = (errorInfo) => {

};
const formData = {
    username: '123456',
    password: '123456'
}

class Login extends Component {
    formRef = React.createRef();
    render() {
        return (
            <div className={login.bg}>
                <div className={login.form}>
                    <Form
                        ref={this.formRef}
                        name="normal_login"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={(value) => this.onFinish(value)}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的用户名!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码!',
                                },
                            ]}
                        >
                            <Input.Password onChange={(e) => this.passwordChange(e)} prefix={<LockOutlined className="site-form-item-icon" />} style={{ width: '100%' }} />
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
    componentDidMount() {
        this.formRef.current.setFieldsValue(formData);
    }
    passwordChange(e) {
        console.log(e.target.value)
    }
    onFinish(values) {
        this.props.history.push("/home")
        console.log(this.props)
    };
}
export default Login


