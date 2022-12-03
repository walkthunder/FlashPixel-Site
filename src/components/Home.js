import { Hero, Button, InlineLink } from '@algolia/ui-library';
import { useColorMode } from '@docusaurus/theme-common';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import React from 'react';

import DocSearchLogo from './DocSearchLogo';

function Home() {
  const { withBaseUrl } = useBaseUrlUtils();
  const { isDarkTheme } = useColorMode();

  React.useEffect(() => {
    if (isDarkTheme) {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [isDarkTheme]);

  function Header() {
    return (
      <Hero
        id="hero"
        title={<DocSearchLogo width="100%" />}
        background="curves"
        cta={[
          <Button
            key="get-started"
            href={withBaseUrl('docs/intro')}
          >
            快速开始
          </Button>,
        ]}
      />
    );
  }

  function Description() {
    return (
      <>
        <div className="py-16 overflow-hidden">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl leading-9 font-extrabold md:text-4xl md:leading-10">
                自由分享 —— 极速上传图片和文件到云端
                </h2>
              </div>
            </div>
            <div className="pt-4 pb-12 md:pb-16">
              <div className="relative">
                <div className="relative max-w-screen-xl mx-auto px-4 lg:px-6">
                  <div className="max-w-4xl mx-auto">
                    <dl className="rounded-lg shadow-xl lg:grid lg:grid-cols-3 showcase">
                      <div className="flex flex-col border-b p-6 text-center lg:border-0 showcase-border">
                        <dt
                          className="order-2 mt-2 text-lg leading-6 font-medium text-description"
                          id="item-1"
                        >
                         配置
                        </dt>
                        <dd
                          className="order-1 text-5xl leading-none font-extrabold text-indigo-600"
                          aria-describedby="item-1"
                        >
                          极简
                        </dd>
                      </div>
                      <div className="flex flex-col border-t border-b p-6 text-center lg:border-0 lg:border-l showcase-border">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-description">
                          数据
                        </dt>
                        <dd className="order-1 text-5xl leading-none font-extrabold text-indigo-600">
                          安全
                        </dd>
                      </div>
                      <div className="flex flex-col border-t p-6 text-center lg:border-0 lg:border-l showcase-border">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-description">
                          分享
                        </dt>
                        <dd className="order-1 text-5xl leading-none font-extrabold text-indigo-600">
                          自由
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 overflow-hidden">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative">
              <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight md:text-4xl md:leading-10">
                图片和文件管理的桌面提效工具
              </h3>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-description">
                图片文件都上传到您的云端私人空间，随时查看和分享，方便在任何网页文档中引用
              </p>
            </div>

            <div className="pt-16">
              <ul className="lg:grid lg:grid-cols-3 lg:col-gap-8 lg:row-gap-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="search w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        数据安全
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        所有文件数据都存放在您个人的数据空间，保障数据的安全，并且不会丢失。FlashPixel 仅支持最稳定可靠的几家云服务商，保障服务的可靠性和数据的安全性。
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 lg:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="user-group w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        极致简洁
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        为了降低配置的复杂度，FlashPixel 仅保留了最基本的配置选项，您只需要在初次使用时，将云服务的密钥输入即可，其余繁琐的配置统统交给FlashPixel。
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 lg:mt-0">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="device-mobile w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium">
                        功能强大
                      </h4>
                      <p className="mt-2 text-base leading-6 text-description">
                        FlashPixel 不仅可以上传图片，还可以上传其他文件。甚至可以作为您的移动工作基站，将您的本地文件都备份在云端，更多强大能力持续升级中。。。
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="diagonal-box py-16 bg-gray-200 overflow-hidden">
          <div className="diagonal-content max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="max-w-screen-xl mx-auto pt-6 px-4 md:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl leading-9 font-extrabold text-gray-900 md:text-4xl md:leading-10">
                  快速上手
                </h2>
                <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
                  在使用 FlashPixel 之前推荐先开通阿里云/腾讯云/七牛云的对象存储服务。FlashPixel 还支持Github
                </p>
              </div>
            </div>

            <div className="py-16">
              <div className="max-w-xl mx-auto px-4 md:px-6 lg:max-w-screen-lg lg:px-8 ">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  <div>
                    <div className="flex items-center justify-center">
                      <img
                        className="h-200"
                        src={withBaseUrl('img/assets/scraping.svg')}
                        width="190px"
                        height="220px"
                        alt="FlashPixel配置"
                      />
                    </div>
                    <div className="mt-10 lg:mt-0 p-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        1. 获取账户配置
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-600">
                        先根据{' '}
                        <InlineLink
                          target="_self"
                          href="docs/intro#对象存储配置"
                        >
                          对象存储服务配置
                        </InlineLink>{' '}
                        获取账户的密钥和应用信息
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 p-4">
                    <div className="h-200 flex items-center justify-center">
                      <img
                        src={withBaseUrl('img/assets/configuration.svg')}
                        width="140px"
                        height="220px"
                        alt="Configuration of your crawler"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        2. 配置FlashPixel
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-600">
                        打开 FlashPixel 的图床配置界面，将上述信息依次填入
                      </p>
                    </div>
                  </div>
                  <div className="mt-10 lg:mt-0 p-4">
                    <div className="h-200 flex items-center justify-center">
                      <img
                        src={withBaseUrl('img/assets/implementation.svg')}
                        width="220px"
                        height="220px"
                        alt="Implementation on your website"
                      />
                    </div>
                    <div>
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        3. 校验保存
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-600">
                        点击校验，FlashPixel 会自动验证并初始化对象存储服务，配置完成
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold tracking-tight md:text-3xl md:leading-9">
                  FlashPixel
                </h4>
                <p className="mt-3 text-lg leading-7 text-description">
                  图片管理可以如此轻松，让分享一键可达
                </p>

                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="sparkles w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium">
                          化繁为简
                        </h5>
                        <p className="mt-2 text-base leading-6 text-description">
                          FlashPixel 核心功能是一款图片文件上传工具🔧支持文件拖拽上传、本地文件上传、截图上传，以及剪贴板图片上传等上传方式。
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="menu-alt2 w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h7"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium">
                          布局简洁
                        </h5>
                        <p className="mt-2 text-base leading-6 text-description">
                          FlashPixel 驻留在 Mac 顶部工具栏，主界面简单明了，需要时一键呼出
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-10 -mx-4 lg:mt-0 uil-ta-center">
                <img
                  className="relative mx-auto rounded-lg shadow-lg image-rendering-crisp"
                  src={withBaseUrl(
                    `img/assets/base-preview.png`
                  )}
                  alt="界面预览"
                />
              </div>
            </div>

            <div className="relative mt-12 md:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <ul className="mt-10">
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="lightning-bolt w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">
                            快捷键支持
                          </h5>
                          <p className="mt-2 text-base leading-6 text-description">
                            默认快捷键（Command + Ctrl + Z）可一键呼出主界面，另外 Command + 1/2/3 分别对应不同的
                            <InlineLink
                              target="_self"
                              href="docs/shortcut"
                            >
                              上传方式
                            </InlineLink>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mt-10">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="arrows-expand w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium">
                            扩展功能
                          </h5>
                          <p className="mt-2 text-base leading-6 text-description">
                            FlashPixel 目前支持四种图床，另外，图片文件上传功能，FlashPixel 还有更多更强大的功能在持续升级中，敬请期待
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 -mx-4 lg:mt-0 lg:col-start-1 uil-ta-center">
                  <img
                    className="relative mx-auto"
                    width="490"
                    src={withBaseUrl('img/assets/setting-preview.png')}
                    alt="功能配置"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-indigo-600 overflow-hidden lg:py-24">
          <div className="text-center">
            <h3 className="mt-2 text-3xl leading-8 font-extrabold text-white tracking-tight md:text-4xl md:leading-10">
              Powered by FlashPixel
            </h3>
          </div>
        </div>
      </>
    );
  }

  return (
    <div id="tailwind">
      <Header />
      <Description />
    </div>
  );
}

export default Home;
