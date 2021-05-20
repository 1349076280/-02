import React, { Component, createRef } from 'react'
import { Form, Switch, Button, Card, Space, Input, Table, Tag } from 'antd'
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';
import './index.scss'
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
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
                <Form.Item style={{ marginTop: 10 }}>
                    <Card>
                        <div>
                            <Space>
                                <Button type="primary">新增白名单成员</Button>
                                <Button>清空全部白名单</Button>
                                <Button>踢人话术设置</Button>
                            </Space>
                        </div>
                        <Input style={{ width: 226, marginTop: 10 }} placeholder="搜索成员" suffix={<SearchOutlined />}></Input>
                        <Table columns={columns} dataSource={data} />
                    </Card>
                </Form.Item>
            </Form>
        )
    }
}
