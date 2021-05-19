import React, { Component } from 'react'
import { InfoCircleOutlined } from '@ant-design/icons';
import And from './components/and'
import Warning from './components/warning'
import MoreWarning from './components/more_warning'
import Just from './components/just'
import { Form, Row, Col, Button, Switch, Card, Radio, Space } from 'antd';
import './index.scss'
const cardTop = {
    and: {
        title: "踢人并发送警告",
        extra: " 配置后会将触犯下方规则的群成员踢出群，并发送下面设置的警告内容。",
        value: <And></And>
    },
    just: {
        title: "仅踢人",
        extra: " 开启后踢出触发以下规则的群成员，不发出任何警告",
        value: <Just></Just>
    },
    more_warning: {
        title: "警告N次后踢人",
        extra: " 配置后将会发送下方设置的警告内容，警告触犯规则的群成员n次后将其踢出群",
        value: <MoreWarning></MoreWarning>
    },
    warning: {
        title: "只警告不踢人",
        extra: " 配置后将会发送下方设置的警告内容，警告触犯规则的群成员",
        value: <Warning></Warning>
    },
}
export default class index extends Component {
    formRef = React.createRef();
    onFinish = (value) => {
        console.log(value)
    }
    state = {
        tiren: "just",
        white_list: ""
    }
    onRadioChange = (e, status) => {
        if (status === 'top') {
            this.setState({
                tiren: e.target.value
            }, () => {

            })
        } else {
            this.setState({
                white_list: e.target.value
            })
        }

    }
    render() {
        return (
            <Form
                ref={this.formRef}
                name="normal_login"
                onFinish={(value) => this.onFinish(value)}
                className="tiren_form"
            >
                <Form.Item label={<div style={{ fontSize: "14px", color: "rgba(0,0,0,.65)" }}> 自动踢人</div>} colon={false} >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex" }}>
                            <Switch defaultChecked onChange={(e) => {
                                this.onChange(e)
                            }} />
                            <div style={{ color: "#ff6e00" }} >
                                请先将机器人设置为管理员，否则无法踢人
                            </div>
                        </div>
                        <div>
                            <Button type="text" disabled={true}>导入已有方案</Button>
                            <Button type="text">同步至其他方案</Button>
                        </div>
                    </div>
                </Form.Item>
                <Form.Item style={{ marginTop: 10 }}>
                    <Card>
                        <Row>
                            <Col span={9}>
                                <Card bordered={false} className="card_left_top" size="small" title={<div style={{ color: "rgba(0,0,0,.45)", fontSize: 14 }}>惩罚方式设置</div>}>
                                    <Space direction="vertical">
                                        <Radio.Group value={this.state.tiren} onChange={(e) => this.onRadioChange(e, 'top')} style={{ marginBottom: 16, marginTop: 15 }}>
                                            <Radio.Button style={{ width: "100%" }} value="just">
                                                <div className="radio-item">
                                                    仅踢人<Switch size="small"></Switch>
                                                </div>
                                            </Radio.Button>
                                            <Radio.Button style={{ width: "100%" }} value="and">
                                                <div className="radio-item">
                                                    踢人并发送警告<Switch size="small"></Switch>
                                                </div>
                                            </Radio.Button>
                                            <Radio.Button style={{ width: "100%" }} value="more_warning">
                                                <div className="radio-item">
                                                    警告N次后踢人<Switch size="small"></Switch>
                                                </div>
                                            </Radio.Button>
                                            <Radio.Button style={{ width: "100%" }} value="warning">
                                                <div className="radio-item">
                                                    只警告不踢人<Switch size="small"></Switch>
                                                </div>
                                            </Radio.Button>
                                        </Radio.Group>
                                    </Space>
                                </Card>
                                <Card bordered={false} className="card_left_bottom" size="small" title={<div style={{ color: "rgba(0,0,0,.45)", fontSize: 14 }}>白名单设置</div>}>
                                    <Space direction="vertical">
                                        <Radio.Group value={this.state.white_list} onChange={(e) => this.onRadioChange(e, 'bottom')} style={{ marginBottom: 16, marginTop: 15 }}>
                                            <Radio.Button style={{ width: "100%" }} value="website">
                                                <div className="radio-item">
                                                    网址白名单<Switch size="small"></Switch>
                                                </div>
                                            </Radio.Button>
                                            <Radio.Button style={{ width: "100%" }} value="mini_program">
                                                <div className="radio-item">
                                                    小程序白名单<Switch size="small"></Switch>
                                                </div>
                                            </Radio.Button>
                                        </Radio.Group>
                                    </Space>
                                </Card>
                            </Col>
                            <Col span={15}>
                                <Card className="card_right" size="small" title={cardTop[this.state.tiren].title} extra={<div style={{ color: "#00000073", fontSize: 14, }}><InfoCircleOutlined style={{ color: "#ff6e00", marginRight: 5 }} />{cardTop[this.state.tiren].extra}</div>}>
                                    {cardTop[this.state.tiren].value}
                                </Card>
                            </Col>
                        </Row>

                    </Card>
                </Form.Item>
            </Form >
        )
    }
}
