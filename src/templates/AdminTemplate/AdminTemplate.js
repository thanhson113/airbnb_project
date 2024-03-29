import { NavLink, Route } from "react-router-dom";
import { Fragment, React } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    FileAddOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import SubMenu from "antd/lib/menu/SubMenu";
const { Header, Content, Footer, Sider } = Layout;

export default function AdminTemplate(props) {
    const [state, setState] = useState({
        collapsed: false,
    })

    const onCollapse = (collapsed) => {
        setState({
            collapsed: !state.collapsed,
        });
    };


    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider trigger={null} collapsible collapsed={state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to='/admin'>Admin</NavLink>
                        </Menu.Item>
                        <SubMenu key="2" icon={<FileOutlined />} title='User'>
                            <Menu.Item key="sub1" icon={<FileOutlined />}>
                                <NavLink to='/admin/user'>User</NavLink>
                            </Menu.Item>
                            <Menu.Item key="sub2" icon={<FileAddOutlined />}>
                                <NavLink to='/admin/user/add'>Add new user</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="3" icon={<FileOutlined />} title='Location'>
                            <Menu.Item key="sub3" icon={<FileOutlined />}>
                                <NavLink to='/admin/location'>Location</NavLink>
                            </Menu.Item>
                            <Menu.Item key="sub4" icon={<FileAddOutlined />}>
                                <NavLink to='/admin/location/add'>Add new location</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="4" icon={<FileOutlined />} title='Ticket'>
                            <Menu.Item key="sub5" icon={<FileOutlined />}>
                                <NavLink to='/admin/ticket/location'>Location/Room</NavLink>
                            </Menu.Item>
                            <Menu.Item key="sub6" icon={<FileOutlined />}>
                                <NavLink to='/admin/ticket/user'>User</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="5" icon={<HomeOutlined />}>
                            <NavLink to='/home'>Home</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {state.collapsed ? <MenuUnfoldOutlined style={{ color: "white", fontSize: "20px" }} onClick={onCollapse} /> : <MenuFoldOutlined style={{ color: "white", fontSize: "20px" }} onClick={onCollapse} />}
                    </Header>
                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <div
                            className="site-layout-background admin"
                            style={{
                                minHeight: 360,
                            }}
                        >
                            <props.component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}

