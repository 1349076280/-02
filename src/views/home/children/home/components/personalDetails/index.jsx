import React, { Component } from 'react'
import { Card, Button, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.scss'
export default class index extends Component {

    render() {
        return (
            <div className="person-detail">
                <Card style={{ width: "90%" }}>
                    <div className="ava-top">
                        <Avatar shape="square" size={64} icon={<UserOutlined />} />
                        <div className="ava-top-right">
                            <div>张三</div>
                            <div>微信号:110</div>
                            <div>
                                <span className="user-tag___23J9S">主账号</span>
                                <span className="user-tag___23J9S">ID: 25903</span>
                                <span className="user-tag___23J9S">9</span>
                            </div>
                        </div>
                    </div>
                    <Card bordered={false} style={{ background: "#f3f6fb", marginTop: 20 }}>
                        <div>
                            <div className="ava-center">
                                <div className="ava-center-item" >
                                    <div>群总数</div>
                                    <div >1</div>
                                </div>
                                <div className="ava-center-item">
                                    <div>已开通</div>
                                    <div >1</div>
                                </div>
                                <div className="ava-center-item" >
                                    <div>待开通</div>
                                    <div >0</div>
                                </div>
                            </div>
                            <div>
                                <Button style={{ width: "50%" }}>购买套餐</Button>
                                <Button style={{ width: "50%" }}>开通群</Button>
                            </div>
                        </div>
                    </Card>
                    <Card style={{ background: "#f3f6fb", marginTop: 20 }}>
                        <div>
                            <div style={{ fontSize: 14 }}>手机端管理</div>
                            <div style={{ color: "#00000073", fontSize: 12 }}>双端操作,实时同步</div>
                        </div>
                    </Card>
                    <Card style={{ background: "#f3f6fb", marginTop: 20 }}>
                        <div>
                            <div style={{ fontSize: 14 }}>专业客服</div>
                            <div style={{ color: "#00000073", fontSize: 12 }}>随时随地为您解决问题,响应及时</div>
                        </div>
                    </Card>
                </Card>
            </div>
        )
    }
}
