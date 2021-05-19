import React, { Component } from 'react'
import './index.scss'
import { Card, Button } from 'antd';
export default class index extends Component {
    groupArr = [{
        name: "累计成员数",
        id: 0,
        number: 5
    }, {
        name: "新增成员数",
        id: 1,
        number: 5
    }, {
        name: "退群人数",
        id: 2,
        number: 5
    }, {
        name: "活跃度",
        id: 3,
        number: 5
    }, {
        name: "签到人数",
        id: 4,
        number: 5
    }]
    shopArr = [{
        name: "待发货",
        id: 0,
        number: 0,
        handle: "去发货"
    }, {
        name: "待自提",
        id: 1,
        number: 0,
        handle: "去核销"
    }, {
        name: "待支付",
        id: 2,
        number: 0
    }, {
        name: "交易成功",
        id: 3,
        number: 0
    }, {
        name: "交易失败",
        id: 4,
        number: 0
    }]
    render() {
        return (
            <div className="today-data">
                <Card size="small" bordered={false} title={<div className="title" ><span>群数据</span></div>} extra={<Button size="small" type="primary">数据中心</Button>}>
                    <div className="group-arr">
                        {
                            this.groupArr.map(item => {
                                return (<div key={item.id} style={{ width: " 33.3%", display: "flex", alignItems: "center", justifyContent: "center" }} >
                                    <div className="group-item">
                                        <div style={{ color: "rgba(0,0,0,.45)" }}>{item.name}</div>
                                        <div style={{ color: "#000", fontWeight: "800" }}>{item.number}</div>
                                    </div>
                                </div>)
                            })
                        }

                    </div>
                </Card>
                <Card size="small" bordered={false} title={<div className="shop-title" ><span>积分商城数据</span></div>} >
                    <div className="shop-arr">
                        {
                            this.shopArr.map(item => {
                                return (<div key={item.id} style={{ width: " 33.3%", display: "flex", alignItems: "center", justifyContent: "center" }} >
                                    <div className="shop-item">
                                        <div style={{ color: "rgba(0,0,0,.45)" }}>{item.name}</div>
                                        <div style={{ color: "#000", fontWeight: "800", display: "flex", justifyContent: "space-between" }}><div>{item.number}</div><div style={{ color: "#62749c", fontWeight: "400" }}>{item.handle ? item.handle : ''}</div></div>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </Card>
            </div>
        )
    }
}
