import React, { Component } from 'react';
import { Layout, Row, Col, Card } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import './index.scss'
import Shop from './components/shop'
import HuiFu from './components/huifu'
import Operation from './components/operation'
import Space from './components/space'
import TiRen from './components/tiren'
import Welcome from './components/welcome'
import White from './components/white'
const { Header, Sider, Content } = Layout;
const tabListNoTitle = [
    {
        key: 'welcome',
        tab: <div className="tab-top">
            <AppleOutlined></AppleOutlined>
            <div>欢迎新人</div>
        </div>,
    },
    {
        key: 'huifu',
        tab: <div className="tab-top">
            <AppleOutlined></AppleOutlined>
            <div>自动回复</div>
        </div>,
    },
    {
        key: 'tiren',
        tab: <div className="tab-top">
            <AppleOutlined></AppleOutlined>
            <div>自动踢人</div>
        </div>,
    },
    {
        key: 'white',
        tab: <div className="tab-top">
            <AppleOutlined></AppleOutlined>
            <div>白名单</div>
        </div>,
    },
    {
        key: 'operation',
        tab: <div className="tab-top">
            <AppleOutlined></AppleOutlined>
            <div>群积分运营</div>
        </div>,
    },
    {
        key: 'space',
        tab: <div className="tab-top">
            <AppleOutlined></AppleOutlined>
            <div>群空间</div>
        </div>,
    },
    {
        key: 'shop',
        tab: <div className="tab-top">
            <AppleOutlined></AppleOutlined>
            <div>小商店</div>
        </div>,
    },
];
const contentListNoTitle = {
    welcome: <Card className="card-bg"><Welcome></Welcome></Card>,
    huifu: <Card className="card-bg"><HuiFu></HuiFu></Card>,
    tiren: <Card className="card-bg"><TiRen></TiRen></Card>,
    white: <Card className="card-bg"><White></White></Card>,
    operation: <Card className="card-bg"><Operation></Operation></Card>,
    space: <Card className="card-bg"><Space></Space></Card>,
    shop: <Card className="card-bg"><Shop></Shop></Card>,
};
class index extends Component {
    state = {
        height: null,
        span_one: 18,
        span_two: 6,
        noTitleKey: 'welcome',
    }
    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };
    render() {
        return (<Layout className="scheme" style={{ height: this.state.height + 'px', overflow: "auto" }}>
            <Header className="header" style={{
                backgroundColor: 'white',
                height: "50px"
            }}>灵灵小助理</Header>
            <Layout style={{ height: (this.state.height - 50) + 'px' }}>
                <Sider width={240} >Sider</Sider>
                <Content style={{ height: (this.state.height - 50) + 'px', overflow: "auto" }}>
                    <Row>
                        <Col span={this.state.span_one}>
                            <Card
                                style={{ width: '100%' }}
                                tabList={tabListNoTitle}
                                activeTabKey={this.state.noTitleKey}
                                onTabChange={key => {
                                    this.onTabChange(key, 'noTitleKey');
                                }}

                            >
                                {contentListNoTitle[this.state.noTitleKey]}
                            </Card>
                        </Col>
                        <Col span={this.state.span_two}>

                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout >
        );
    }
    componentDidMount() {
        this.setState({
            height: document.body.offsetHeight
        })
    }
}

export default index;
