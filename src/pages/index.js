import Layout from '@theme/Layout';
import React from 'react';

import Home from '../components/Home';

function HomePage() {
  return (
    <Layout
      title="FlashPixel - 图片上传工具"
      keywords="图片上传，markdown，blog，博客，本地图片，文件同步，自定义图床"
      description="图片上传工具，本地文件一键上传云端，写博客网站时可以方便插入本地图片，配合CDN加速，最好的线上资源同步方案"
    >
      <Home />
    </Layout>
  );
}

export default HomePage;
