import React, { Component } from 'react'
import { Card, Checkbox, Input } from 'antd'
import './index.scss'
export default class index extends Component {
    render() {
        return (
            <div>
                <Checkbox>
                    其他规则
                </Checkbox>
                <Card className="card_public" style={{ marginTop: 12 }} size="small" title="踢发广告" >
                    <Checkbox>
                        二维码
                </Checkbox>
                    <Checkbox>
                        名片
                </Checkbox>
                    <Checkbox>
                        小视频
                </Checkbox>
                    <Checkbox>
                        网址分享
                </Checkbox>
                    <Checkbox>
                        小程序
                </Checkbox>
                </Card>
                <Card className="card_public" style={{ marginTop: 12 }} size="small" title="踢发骚扰信息">
                    <Checkbox style={{ marginRight: 10 }} />
                消息大于<Input defaultValue="10" className="ipt"></Input>行
                <Checkbox style={{ marginLeft: 20, marginRight: 10 }} />
                字符大于<Input defaultValue="100" className="ipt"></Input>行
            </Card>
                <Card className="card_public" style={{ marginTop: 12 }} size="small" title="踢发连续信息">
                    <Checkbox style={{ marginRight: 10 }} /><Input defaultValue="10" className="ipt" />秒内发送<Input defaultValue="10" className="ipt" />条消息
            </Card>
            </div>
        )
    }
}
