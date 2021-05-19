import React, { Component, createRef } from 'react'
import { Form, Switch, Button, Card } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons';
import './index.scss'
export default class index extends Component {
    formRef = createRef();
    onFinish = (value) => {
        console.log(value)
    }
    onChange = () => {

    }
    render() {
        return (
            <Form
                ref={this.formRef}
                name="normal_login"
                onFinish={(value) => this.onFinish(value)}
                className="white_form">
                <Form.Item label={<div style={{ fontSize: "14px", color: "rgba(0,0,0,.65)" }}>白名单</div>} colon={false} >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex" }}>
                            <Switch defaultChecked onChange={(e) => {
                                this.onChange(e)
                            }} />
                            <div style={{ color: "#ff6e00", marginLeft: 15 }} >
                                <InfoCircleOutlined></InfoCircleOutlined>  请先将机器人设置为管理员，否则无法踢人
                            </div>
                        </div>
                        <div>
                            <Button type="text" disabled={true}>导入已有方案</Button>
                            <Button type="text">同步至其他方案</Button>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item>
                    <Card>
                        <div>
                            <Button>新增白名单成员</Button>
                            <Button>清空全部白名单</Button>
                            <Button>踢人话术设置</Button>
                        </div>
                    </Card>
                </Form.Item>
            </Form>
        )
    }
}
