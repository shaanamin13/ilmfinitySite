import React from 'react';
import { Layout } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';


const { Footer } = Layout;

const FooterComponent: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
        <div style={{ marginRight: '16px' }}>
          <a href="#facebook"><FacebookOutlined /> Facebook</a>
        </div>
        <div style={{ marginRight: '16px' }}>
          <a href="#twitter"><TwitterOutlined /> Twitter</a>
        </div>
        <div style={{ marginRight: '16px' }}>
          <a href="#instagram"><InstagramOutlined /> Instagram</a>
        </div>


      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
      <div style={{ marginRight: '16px' }}>
        <a href="#privacy">Privacy Policy</a>
      </div>
      <div style={{ marginRight: '16px' }}>
        <a href="#contact">Contact Us</a>
      </div>
</div>
      <div>
        <p>© 2024 Ilmfinity. All rights reserved.</p>
      </div>
    </Footer>
  );
}

export default FooterComponent;
