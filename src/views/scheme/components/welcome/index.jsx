import React, { Component } from 'react'
import { Form, Input, Button, Switch, Card, Checkbox, TimePicker, Empty } from 'antd';
import moment from 'moment';
import './index.scss'
const onChange = () => {
    console.log(123)
}
export default class index extends Component {
    formRef = React.createRef();
    onFinish = (value) => {
        console.log(value)
    }
    onChange = (e) => {
        console.log(e)
    }
    checkChange(e) {
        console.log(`checked = ${e.target.checked}`)
    }
    render() {
        return (
            <Form
                ref={this.formRef}
                name="normal_login"
                onFinish={(value) => this.onFinish(value)}
                className="welcome_form"
            >
                <Form.Item label={<div style={{ fontSize: "14px", color: "rgba(0,0,0,.65)" }}>欢迎新人</div>} colon={false} >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Switch defaultChecked onChange={(e) => {
                            this.onChange(e)
                        }} />
                        <div>
                            <Button type="text" disabled={true}>导入已有方案</Button>
                            <Button type="text">同步至其他方案</Button>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item style={{ marginTop: 10 }}>
                    <Card>
                        <Card className="tiaoJian" size="small" title={<span style={{ fontSize: "14px" }}>触发条件设置</span>}>
                            <div className="tiaoJian-content" >
                                欢迎语最小间隔时长<Input style={{ width: "50px", height: "30px" }}></Input>分钟
                                < Checkbox style={{ fontSize: "14px", marginLeft: "20px" }} onChange={(e) => { this.checkChange(e) }}>非首次入群不发送欢迎语</Checkbox>
                                <div>
                                    < Checkbox style={{ fontSize: "14px", }} onChange={(e) => { this.checkChange(e) }}>休眠阶段</Checkbox>
                                    <TimePicker onChange={onChange} defaultValue={moment('00:00:00', 'HH:mm:ss')} /> 至 <TimePicker onChange={onChange} defaultValue={moment('00:00:00', 'HH:mm:ss')} />
                                </div>
                            </div>
                        </Card>
                        <Card className="set" size="small" title={<span style={{ fontSize: "14px" }}>欢迎语设置<span style={{
                            color: "rgba(0,0,0,.65)",
                            fontSize: "12px"
                        }}>(最多设置5条)</span></span>} extra={<Checkbox style={{ fontSize: "14px" }} onChange={(e) => { this.checkChange(e) }}>按照顺序每次发送一条</Checkbox>}>
                            <Empty imageStyle={{ marginTop: 50 }} style={{ background: "#f5f5f5", height: 250, overflow: "hidden" }} description={<div style={{ color: "rgba(0,0,0,.65)", fontSize: "12px" }}>请点击下方的按钮添加推送内容</div>}></Empty>
                        </Card>
                        <Card className="card_bottom">
                            <div className="card-bottom">
                                <div style={{ width: "80%" }}>
                                    <Button>文本</Button>
                                    <Button>图片</Button>
                                    <Button>文件</Button>
                                    <Button>链接</Button>
                                    <Button>素材库</Button>
                                    <Button>群精华</Button>
                                    <Button>问题库</Button>
                                </div>
                                <div style={{ width: "20%" }}>清空内容</div>
                            </div>
                        </Card>
                    </Card>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 10 }} style={{ marginTop: 10 }}>
                    <Button type="primary">提交配置</Button>
                </Form.Item>
            </Form>
        )
    }
}
