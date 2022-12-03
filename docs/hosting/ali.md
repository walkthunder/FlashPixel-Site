# ⚙ 阿里云

## 配置项

```
{
  "accessKeyId": "",
  "accessKeySecret": "",
  "Domain": "", // 自定义域名
}
```

![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-1668-1666190160172.png)

首先先在阿里云OSS的[控制台](https://usercenter.console.aliyun.com/#/manage/ak)里找到你的`accessKeyId`和`accessKeySecret`： ![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-2410-1666190401120.png)

在FlashPixel配置界面填写好密钥之后，点击**授权**
![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-4999-1666190677494.png)

待看到*授权成功*的状态，即可开始使用啦～

## 说明

* 阿里云对象存储会提供默认的测试域名，所以这里Domain不是必选输入
* 阿里云默认域名的response header默认是`Content-Disposition: attachment`，且不支持更改，所以如果在浏览器地址栏输入该url会是下载图片而不是预览。所以还是建议用户绑定自己的域名。
