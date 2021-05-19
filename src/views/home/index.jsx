import { Component } from 'react'
import { Layout, Menu, } from 'antd';
import { HomeOutlined, } from '@ant-design/icons';
import { Route, Switch, Redirect } from 'react-router-dom'
import { mainRoutes } from '../../router/router'
import '../home/index.scss'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { height: null };
    }
    render() {
        return (<Layout style={{ height: this.state.height + 'px' }}>
            <Header className="header" style={{
                backgroundColor: 'white',
                height: "50px"
            }}>
                头部
            </Header>
            <Layout >
                <Sider width={240} className="site-layout-background" >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['0']}
                        style={{ borderRight: 0, background: "#222832", overflow: "auto", height: (this.state.height - 50) + 'px' }}
                        theme="dark"
                    >
                        <Menu.Item key="0" style={{ display: "flex", justifyContent: "center", borderBottom: "1px solid #000" }} >
                            <div className="flex align " style={{
                                width: "203px", height: "36px", color: "white", paddingLeft: "10px"
                            }}>
                                <HomeOutlined></HomeOutlined> <div>首页</div>
                            </div>
                        </Menu.Item>
                        <Menu.ItemGroup key="g1" title="托管" style={{ borderBottom: "1px solid #000" }}>
                            <Menu.Item key="1">我托管的群</Menu.Item>
                            <Menu.Item key="2" onClick={this.goSet}>托管功能配置</Menu.Item>
                            <SubMenu key="sub1" title="群成员">
                                <Menu.Item key="sub1-1">群成员管理</Menu.Item>
                                <Menu.Item key="sub1-2">群成员去重</Menu.Item>
                                <Menu.Item key="sub1-3">黑名单</Menu.Item>
                            </SubMenu>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g2" title="大家都在用" style={{ borderBottom: "1px solid #000" }}>
                            <Menu.Item key="g2-1">多群推送</Menu.Item>
                            <Menu.Item key="g2-2">群活码</Menu.Item>
                            <Menu.Item key="g2-3">群精华</Menu.Item>
                            <Menu.Item key="g2-4">素材库</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g3" title="积分应用" style={{ borderBottom: "1px solid #000" }}>
                            <Menu.Item key="g3-1">群积分</Menu.Item>
                            <SubMenu key="sub3" title="积分商城">
                                <Menu.Item key="sub3-1">我的商品</Menu.Item>
                                <Menu.Item key="sub3-2">我的订单</Menu.Item>
                                <Menu.Item key="sub3-3">官方商品</Menu.Item>
                                <Menu.Item key="sub3-4">商品分组</Menu.Item>
                                <Menu.Item key="sub3-5">商品货价</Menu.Item>
                                <Menu.Item key="sub3-6">元宝购买</Menu.Item>
                                <Menu.Item key="sub3-7">元宝明细</Menu.Item>
                                <Menu.Item key="sub3-8">微信支付配置</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="g3-2">小程序</Menu.Item>
                            <Menu.Item key="g3-3">微信小商店</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup key="g4" title="其他" style={{ borderBottom: "1px solid #000" }}>
                            <Menu.Item key="g4-1">数据统计</Menu.Item>
                            <Menu.Item key="g4-2">子账号管理</Menu.Item>
                            <Menu.Item key="g4-3">小助理日志</Menu.Item>
                            <Menu.Item key="g4-4">推广赚钱</Menu.Item>
                        </Menu.ItemGroup>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 14px 14px', overflow: "auto", height: (this.state.height - 50) + 'px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: "14px 0",
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {mainRoutes[2].child.map(item => {
                                console.log(item)
                                return <Route key={item.path} {...item}></Route>
                            })}
                            <Redirect to="/home/childhome"></Redirect>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Layout >)
    }
    componentDidMount() {
        this.setState({
            height: document.body.offsetHeight
        })
    }
    goSet = () => {
        window.open("http://localhost:3000/#/scheme", "newwindow")
    }
}