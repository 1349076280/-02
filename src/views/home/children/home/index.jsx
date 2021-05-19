import React, { Component } from 'react';
import { Card, Button, Row, Col, Modal } from 'antd';
import TodayData from './components/todayDate'
import { PlusSquareOutlined, MinusSquareOutlined } from '@ant-design/icons'
import PersonalDetails from './components/personalDetails'
import './index.scss'
class index extends Component {
    state = {
        loading: false,
        cardItem: [{
            text: "自动回复",
            id: 1
        }, {
            text: "群成员管理",
            id: 2
        }, {
            text: "群成员去重",
            id: 3
        }, {
            text: "欢迎新人",
            id: 4
        }, {
            text: "自动踢人",
            id: 5
        }, {
            text: "白名单",
            id: 6
        }, {
            text: "群积分运营",
            id: 7
        }, {
            text: "群空间",
            id: 8
        }, {
            text: "小商店",
            id: 9
        }, {
            text: "我托管的群",
            id: 10
        }],
        totalArr: [{
            text: "自动回复",
            id: 1
        }, {
            text: "群成员管理",
            id: 2
        }, {
            text: "群成员去重",
            id: 3
        }, {
            text: "欢迎新人",
            id: 4
        }, {
            text: "自动踢人",
            id: 5
        }, {
            text: "白名单",
            id: 6
        }, {
            text: "群积分运营",
            id: 7
        }, {
            text: "群空间",
            id: 8
        }, {
            text: "小商店",
            id: 9
        }, {
            text: "我托管的群",
            id: 10
        }, {
            text: "黑名单",
            id: 11
        }, {
            text: "多群推送",
            id: 12
        }, {
            text: "群活码",
            id: 13
        }, {
            text: "群精华",
            id: 14
        }, {
            text: "素材库",
            id: 15
        }, {
            text: "群积分",
            id: 16
        }, {
            text: "小程序",
            id: 17
        }, {
            text: "数据统计",
            id: 18
        }, {
            text: "子账号",
            id: 19
        }, {
            text: "小助理日志",
            id: 20
        }],
        unselectedArr: [],
        isModalVisible: false
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={17}>
                        <Card className="childHome" loading={this.state.loading} size="small" title="常用功能" extra={<div style={{ color: "rgba(0,0,0,.45)" }}>不是自己想要的功能组合,尝试下<Button type="primary" size="small" onClick={this.showModal}>编辑</Button></div>} style={{ width: "100%" }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap'
                            }}>
                                {this.state.cardItem.map(item => {
                                    return <div className="card-item" key={item.id}>{item.text}</div>
                                })}
                            </div>
                        </Card>
                        <Card className="childHome" size="small" title={<div>今日数据<span style={{ fontSize: "12px", color: "rgba(0,0,0,.45)", marginLeft: "8px" }}>数据5分钟更新一次</span></div>} >
                            <TodayData></TodayData>
                        </Card>
                    </Col>
                    <Col span={7}>
                        <PersonalDetails></PersonalDetails>
                    </Col>
                </Row >
                <Modal width="1100px" title="编辑常用功能" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Card size="small" title="已选" extra="最多可选10个常用功能">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap'
                        }}
                        >
                            {this.state.cardItem.map((item, index) => {
                                return <div className="cfg-item" key={item.id}>{item.text} <MinusSquareOutlined onClick={() => { this.addCfg(index) }} style={{ cursor: "pointer" }} /></div>
                            })}
                        </div>

                    </Card>
                    <Card size="small" title="更多功能">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap'
                        }}
                        >
                            {this.state.unselectedArr.map(item => {
                                return <div className="cfg-item" key={item.id}>{item.text} <PlusSquareOutlined style={{ cursor: "pointer" }} /></div>
                            })}
                        </div>
                    </Card>
                </Modal>
            </div>
        );
    }
    showModal = () => {
        let unselectedArr = []
        this.state.totalArr.forEach(item => {
            let flag = this.state.cardItem.some(ele => {
                return item.text === ele.text
            })
            if (!flag) {
                unselectedArr.push(item)
            }
        })
        this.setState({
            isModalVisible: true,
            unselectedArr
        })
    }
    handleOk = () => {
        this.setState({
            isModalVisible: false,
        })
    }
    handleCancel = () => {
        this.setState({
            isModalVisible: false,
        })
    }
    addCfg(index) {
        console.log(index)
    }
}

export default index;
