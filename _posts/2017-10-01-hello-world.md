---
layout: post_layout
title: 标题
excerpt_separator: 
excerpt: 我的第一篇文章
---

# {{ page.title }}

![题图]({{ site.baseurl }}/images{{ page.id }}.jpg)

----------

{{ page.date | date_to_string }}  Author:wuguanxi

## PART ONE/ 一级标题

### 二级标题

正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文内容

![图片]({{ site.baseurl }}/images/2.jpg)

+ 视觉推导：五一家电节的预热sns活动，太监念题，古文题目，升官晋级的活动
形式。采用有趣生动的表达，以中国古代画像风格为主调，饰以现代元素。
+ 实现难点：1.一共有9道题目，每道题有相应的主题，皇帝表现的动作会不一样
需要绘制的部分比较多；2.骨骼动画的实现增加构建的工作量；3.太监念题目部
分需要外部音频制作支持。
+ 收获与不足：1.形式比较有趣，参与分享较高，参与率58.5%，分享率22.6%；
2.发券量高每关系统自动发券,大大提高发券量；3.背景可以选择露出品牌热门
单品,在品牌曝光的同时额外拉动成交。

## PART TOW/ 一级标题

### 二级标题

正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文内容

![图片]({{ site.baseurl }}/images/2.jpg)

+ 视觉推导：五一家电节的预热sns活动，太监念题，古文题目，升官晋级的活动
形式。采用有趣生动的表达，以中国古代画像风格为主调，饰以现代元素。
+ 实现难点：
  - 1.一共有9道题目，每道题有相应的主题，皇帝表现的动作会不一样需要绘制的部分比较多；
  - 2.骨骼动画的实现增加构建的工作量；
  - 3.太监念题目部
分需要外部音频制作支持。
+ 收获与不足：
  - 1.形式比较有趣，参与分享较高，参与率58.5%，分享率22.6%；
  - 2.发券量高每关系统自动发券,大大提高发券量；
  - 3.背景可以选择露出品牌热门单品,在品牌曝光的同时额外拉动成交。



```javascript
  'use strict';

  const MarkdownIt = require('markdown-it');
  const md = new MarkdownIt();
  const path = require('path');

  const fs = require('fs');

  const thisDir = path.dirname(__filename);
  const dir = thisDir + '/_md/';
  const postDir = thisDir + '/_posts/';

  // console.log(dir);

  const files = getzfileList(dir);
  // console.log(files);
  files.forEach( item => {
    let type = item.slice(item.length - 3 ,item.length);
    if (typeof item === 'string' && item.length > 3 && type === '.md') {
      fs.readFile( dir+item ,'utf-8',(err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          let result = md.render(data);
          let fileName = (postDir + item).replace('.md','.html');
          fs.writeFileSync( fileName , formatJekllyDefault(result) );
        }
      })
    }
  });

  function getzfileList (DIR) {
    // console.log(DIR);
    return fs.readdirSync(DIR, (err, files) => {
      if (err) {
        console.log('err:',err);
      } else {
        console.log(files.length);
      }
    })
  }

  function formatJekllyDefault (data){
    return data.replace(/<p>@+|@+<\/p>/g,'---');
  }
```

> 以下是引用文字
> 以下是引用文字
> 以下是引用文字
> 以下是引用文字

| Item |  Value  | Qty |
|:---- | -------:|:---:|
|Computer|1600 USD|  5 |




