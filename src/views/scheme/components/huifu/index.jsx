import React, { Component } from 'react'
import { Form, Input, Button, Switch, Card, Checkbox, Empty, Radio, Table, Space, Tag, Pagination } from 'antd';
import { PlusOutlined, SearchOutlined, CheckOutlined } from '@ant-design/icons'
import './index.scss'
const onChange = () => {
    console.log(78978)
}
export default class index extends Component {
    state = {
        huifu: "word",
        dataSource: [
            {
                index: 1,
                title: "测试",
                precise: ["测试", "点赞"],
                dim: ["测试89"],
                content: "122313",
                group: "true",
                key: "1"
            }
        ],
        columns: [
            {
                title: '序号',
                dataIndex: 'index',
                key: 'index',
            },
            {
                title: '标题',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: '精确关键词',
                dataIndex: 'precise',
                key: 'precise',
                render: (precise) => {
                    return <div>
                        {precise.map((item, index) => {
                            return <Tag key={index}>{item}</Tag>
                        })}
                    </div>
                }
            },
            {
                title: '模糊关键词',
                dataIndex: 'dim',
                key: 'dim',
                render: () => <span>--</span>
            },
            {
                title: '回复内容',
                dataIndex: 'content',
                key: 'content',
                render: () => <span>1文本</span>
            },
            {
                title: '群空间显示',
                dataIndex: 'group',
                key: 'group',
                render: () => <CheckOutlined style={{ color: "#50bf19" }} />
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key: 'operation',
                render: () => <Space><a>修改</a><a>删除</a></Space>
            }
        ]
    }
    formRef = React.createRef();
    onFinish = (value) => {
        console.log(value)
    }
    onChange = (e) => {
        console.log(e)
    }
    onRadioChange = e => {
        this.setState({ huifu: e.target.value });
    };
    checkChange(e) {
        console.log(`checked = ${e.target.checked}`)
    }
    render() {
        const { dataSource, columns } = this.state
        return (
            <Form ref={this.formRef}
                name="normal_login"
                onFinish={(value) => this.onFinish(value)}
                className="huifu_form">
                <Form.Item label={<div style={{ fontSize: "14px", color: "rgba(0,0,0,.65)" }}>自动回复</div>} colon={false} >
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
                        <Card className="huifu" title={<div style={{ fontSize: 14 }}>自动回复</div>} size="small">
                            <div style={{ fontSize: 12 }}>
                                < Checkbox style={{ fontSize: "14px", }} onChange={(e) => { this.checkChange(e) }}>同一用户相同问题</Checkbox>
                                <Input style={{ width: 50 }}></Input>分钟内不重复回复< Checkbox style={{ fontSize: "14px", marginLeft: 10 }} onChange={(e) => { this.checkChange(e) }}>关键词@助理才回复</Checkbox>
                                < Checkbox style={{ fontSize: "14px", marginLeft: 0 }} onChange={(e) => { this.checkChange(e) }}>关键词回复内容带上问题</Checkbox>
                                <Checkbox style={{ fontSize: "14px", margin: 0 }}>回复时@对方</Checkbox>
                                回复延时<Input style={{ width: 50 }}></Input>至<Input style={{ width: 50 }}></Input>秒
                                <Checkbox style={{ fontSize: "14px", margin: 10 }}>白名单成员不触发回复</Checkbox>
                            </div>
                        </Card>
                        <Radio.Group value={this.state.huifu} onChange={(e) => this.onRadioChange(e)} style={{ marginBottom: 16, marginTop: 15 }}>
                            <Radio.Button style={{ width: 140 }} value="word">
                                <div className="radio-item">
                                    关键词回复<Switch size="small"></Switch>
                                </div>
                            </Radio.Button>
                            <Radio.Button style={{ width: 140 }} value="default">
                                <div className="radio-item">
                                    默认回复<Switch size="small"></Switch>
                                </div>
                            </Radio.Button>
                        </Radio.Group>
                        <Card size="small"
                            bordered={false}
                            className={this.state.huifu === "word" ? "emptyOne" : "none"}
                            title={<div style={{ fontSize: 14, display: 'flex', alignItems: "center" }}>问题库<div style={{ fontSize: 12, color: "rgba(0,0,0,.45)", marginLeft: 10, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", width: "200px" }}>添加问题答案，群成员在群里触发关键词时，机器人自动回复</div></div>}
                            extra={<div><Button type="primary" style={{ marginRight: 8 }} icon={<PlusOutlined />} size="middle">新增</Button><Button style={{ marginRight: 8 }} size="middle">导入文件</Button><Button size="middle" style={{ marginRight: 8 }}>导出文件</Button><Input placeholder="搜索问题" size="middle" suffix={<SearchOutlined />} style={{ width: "240px" }}></Input></div>}>

                            <Table pagination={{ position: ["bottomRight"] }} rowClassName="table-row" style={{ fontSize: 14, color: "rgba(0,0,0,.65)" }} size="middle" dataSource={dataSource} columns={columns}></Table>
                            <Pagination onChange={onChange} total={50} />
                        </Card>
                        <div className={this.state.huifu === "default" ? "emptyTwo" : "none"}>
                            <Card size="small" title={<div style={{ fontSize: 14 }}>回复内容<span style={{ fontSize: 12, color: "rgba(0,0,0,.45)", marginLeft: 10 }}>群成员@机器人时若未触发关键词回复则触发以下内容</span></div>}>
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
                        </div>
                    </Card>
                </Form.Item>
            </Form >
        )
    }
}
