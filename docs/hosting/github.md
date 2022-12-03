# ⚙ GitHub + jsDelivr

##  Github授权

```
{
  "账户": "", // 用户名，授权完成后展示，无需输入
  "仓库": "", // github 仓库名，可以不填，默认是 default-fp-store
  "代理": "", // 如果网络不稳定，需要科学上网
}
```

![Github配置](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-8223-1666189830327.png)

** Github配置页面，什么都不需要填写，直接点击授权即可，无须做任何配置。**

如果授权失败，说明网络不稳定，无法直接访问Github，根据上述格式填入代理地址（科学上网请自理）

## 授权过程

![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-5832-1666189909308.png)

授权开始，会弹出一个Github的授权弹窗，将FlashPixel配置界面的验证码复制粘贴过去即可。
授权过程中需要登陆Github账户

![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-7490-1666189951586.png)

授权界面，点击授权即可，这是FlashPixel提供的一个Github App，帮助用户自动创建Github仓库（默认default-fp-store，用户也可在配置界面更改），以及获取上传结果等。

![](https://defaultfp-1253674045.cos.ap-shanghai.myqcloud.com/c-392-1666189965712.png)

看到上图中显示保存成功，即可开始使用了。去github默认仓库中即可查看上传的图片。

## 说明

* FlashPixel默认采用Github作为上传的免费图床，下载利用了dsDelivr的CDN服务，是FlashPixel提供的唯一免费解决方案。
* Github 配合 [jsDelivr](https://www.jsdelivr.com/)，可以实现类CDN的服务体验，唯一的问题是Github的上传稳定性。当然对于能科学上网的同学，这并不是一个问题，所以综合考虑还是集成到了图床方案中。