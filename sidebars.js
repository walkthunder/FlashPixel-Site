/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation.
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

 module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: '关于FlashPixel'
    },
    {
      type: 'doc',
      id: 'shortcut',
      label: '快捷键'
    },
    {
      collapsed: false,
      type: 'category',
      label: '图床配置',
      items: ['hosting/ali', 'hosting/github', 'hosting/qiniu', 'hosting/tencent'],
    },
    {
      type: 'doc',
      id: 'privacy',
      label: '隐私政策'
    },
  ],
};
