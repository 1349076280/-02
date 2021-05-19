import React, { Component } from 'react';
import { Divider, Checkbox, Input, Tag, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';
import './index.scss'
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
                        触发消息关键词 <span className="color" style={{ marginLeft: 5, }}>(消息中包含以下关键词将被直接踢出)</span>
                    </Checkbox>
                    <div>
                        <div style={{ margin: "10px 0", display: "flex" }} >
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
                        昵称关键词 <span className="color" style={{ marginLeft: 5, }}>(昵称中包含以下关键词将被直接踢出)</span>
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
            </div>
        );
    }
}

export default index;
