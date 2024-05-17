import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="games">Games</Menu.Item>
        <Menu.Item key="news">News</Menu.Item>
      </Menu>
    </Header>
  );
}

export default HeaderComponent;
