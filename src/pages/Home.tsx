import React, { useState } from 'react'
import {
  FileOutlined,
  OrderedListOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Minha Lista', '1', <OrderedListOutlined />),
  getItem('Sobre', '2', <TeamOutlined />),
  getItem('FAQ', 'sub1', <FileOutlined />),
]

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} disabled />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>Sobre</Header>
        <Content style={{ margin: '2% 20% 0% 20% ' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Conteúdo
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          My Easy List ©{new Date().getFullYear()} Criado por Guilherme José
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Home