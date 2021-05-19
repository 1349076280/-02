import React, { Component } from 'react';
import './index.scss'
import { TweenOneGroup } from 'rc-tween-one';
import { PlusOutlined } from '@ant-design/icons';
import Withdraw from '@/components/withdraw'
import { message, Divider, Form, Row, Col, Input, Button, Switch, Card, Checkbox, Empty, Radio, Table, Space, Tag, Pagination } from 'antd';
class index extends Component {
    state = {
        tags: [],
        inputVisible: false,
        inputValue: '',
    }
    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };
    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        } else {
            message.error('关键词不能重复');
        }
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = input => {
        this.input = input;
    };

    forMap = tag => {
        const tagElem = (
            <Tag
                className="color"
                closable
                style={{ fontSize: 14 }}
                onClose={e => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
    };
    render() {
        const { tags, inputVisible, inputValue } = this.state;
        const tagChild = tags.map(this.forMap);
        return (
            <div>
                <div>
                    <Checkbox>
                        触发消息关键词 <span className="color" style={{ marginLeft: 5, }}>(消息中包含一下关键词将被直接踢出)</span>
                    </Checkbox>
                    <div>
                        <div style={{ margin: "10px 0", display: "flex" }} className={this.state.tags ? '' : 'none'}>
                            <TweenOneGroup
                                enter={{
                                    scale: 0.8,
                                    opacity: 0,
                                    type: 'from',
                                    duration: 100,
                                    onComplete: e => {
                                        e.target.style = '';
                                    },
                                }}
                                leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                                appear={false}
                            >
                                {tagChild}
                            </TweenOneGroup>
                            {inputVisible && (
                                <Input
                                    ref={this.saveInputRef}
                                    type="text"
                                    size="small"
                                    style={{ width: 78 }}
                                    value={inputValue}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleInputConfirm}
                                    onPressEnter={this.handleInputConfirm}
                                />
                            )}
                            {!inputVisible && (
                                <Tag style={{ fontSize: 14, }} onClick={this.showInput} className="site-tag-plus color">
                                    <PlusOutlined /> 添加关键词
                                </Tag>
                            )}
                        </div>
                    </div>
                </div>
                <Divider />
                <div>
                    <Checkbox>
                        触发消息关键词 <span className="color" style={{ marginLeft: 5, }}>(消息中包含一下关键词将被直接踢出)</span>
                    </Checkbox>
                    <div>
                        <div style={{ margin: "10px 0", display: "flex" }} className={this.state.tags ? '' : 'none'}>
                            <TweenOneGroup
                                enter={{
                                    scale: 0.8,
                                    opacity: 0,
                                    type: 'from',
                                    duration: 100,
                                    onComplete: e => {
                                        e.target.style = '';
                                    },
                                }}
                                leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                                appear={false}
                            >
                                {tagChild}
                            </TweenOneGroup>
                            {inputVisible && (
                                <Input
                                    ref={this.saveInputRef}
                                    type="text"
                                    size="small"
                                    style={{ width: 78 }}
                                    value={inputValue}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleInputConfirm}
                                    onPressEnter={this.handleInputConfirm}
                                />
                            )}
                            {!inputVisible && (
                                <Tag style={{ fontSize: 14, }} onClick={this.showInput} className="site-tag-plus color">
                                    <PlusOutlined /> 添加关键词
                                </Tag>
                            )}
                        </div>
                    </div>
                </div>
                <Divider />
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
                <div>

                </div>
            </div >
        );
    }
}

export default index;
