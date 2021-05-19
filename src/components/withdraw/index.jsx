import React, { Component } from 'react'
import { Card, Checkbox, Input, Tag, Space } from 'antd'
import './index.scss'
export default class index extends Component {
    render() {
        return (
            <Card className="withdraw-card" title="撤回不踢人设置" size="small">
                <Checkbox /> <Input className="ipt" style={{ width: 88 }} defaultValue="30"></Input>秒内撤回不踢人<span style={{ color: "rgba(0,0,0,.45)" }}>（仅适用于触发消息关键词、发广告、发骚扰消息）</span>
                <Card title="提示撤回话术" size="small" className="withdraw-card-card">
                    <div>
                        <div className="withdraw-top">
                            <Space>
                                <Tag className="tags">随机表情</Tag>
                                <Tag className="tags">昵称</Tag>
                                <Tag className="tags">违规原因</Tag>
                            </Space>
                        </div>
                    </div>
                </Card>
            </Card>
        )
    }
}
