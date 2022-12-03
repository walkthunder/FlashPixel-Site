# ⚙ 七牛云

## 配置参数
```
{
  "accessKey": "", //
  "secretKey": "",
  "自定义域名": "", // 在七牛云后台绑定的自定义域名
}
```
![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-2145-1666186388800.png)

对应的密钥信息在七牛云后台[控制台](https://s.qiniu.com/2MFvAn)里找到：个人信息 > 密钥管理

![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-7547-1666186522456.png)


先在FlashPixel配置页面配置好AccessKey 和 SecretKey，并点击**授权**。

FlashPixel会自动初始化七牛云的Bucket，默认fp-(32位hash), 例如：fp-06d54e1fe9da1070716af14f7a967d9b

![授权成功](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-9028-1666189489423.png)

看到授权成功的状态，即可开始使用啦～

## 关于域名

在完成上述配置之后，即可以开始上传图片了，但是此时拿到的图片url是临时域名。
七牛云默认会为新户自动分配一个测试的临时域名，如果用户在上述FlashPixel配置界面没有配置域名，FlashPixel会自动查询用户七牛云账户的临时域名使用。
但该临时域名随时可能取消，十分不稳定，所以最好在七牛云后台自己绑定自己的自定义域名。

## 如何添加自定义域名

> 在开始之前，先确保已经执行过上述授权操作，FlashPixel已初始化七牛云账户


首先，到Bucket的域名[配置页面](https://s.qiniu.com/eYBr2a)，找到FlashPixel对应的Bucket：fp-(32位hash)，例如：*fp-06d54e1fe9da1070716af14f7a967d9b*，点击 **绑定域名**

![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-3981-1666275692590.png)

会跳转到域名管理页面添加域名

![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-5313-1666189656123.png)


最后，别忘了将上述域名添加到FlashPixel配置中。