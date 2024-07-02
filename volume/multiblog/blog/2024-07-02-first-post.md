---
title: 又再一次重啟博客
description: 又再一次重啟博客
authors: cwksc
tags: []
---

# 又再一次重啟博客

又一次重開博客，最初是在知乎和 ithelp 上寫一些文章，到目前已經開了三次

## 第一次 - Jekyll template

第一次是用 GitHub page + Jekyll，2020 年的時候，用別人的 template。然後發現維護這個東西很麻煩，花了時間去找圖片，建設博客的時間比起寫文章還多

所以寫了半年時間就沒有再寫了，大約 10 篇文章，沒有什麼心力寫

## 第二次 - GitHub repository

第二次是直接在 GitHub 開一個 [repository](https://github.com/CWKSC/simple_blog) ，just markdown ，2023 年的時候

> I am tired of building, maintaining a blog, finding pictures, and other things. Most of my time is spent on these tasks rather than writing articles. So I started a simple blog that only stores the content of my articles.

事實上的確是很方便，GitHub 原本就會 render code block highlighting 和 math equations，但有些簡陋和不正式

## 第三次 - Docusaurus

第三次就現在這個，應該不會再改的了（

這個是用 Meta 開源的 Docusaurus ，當初看到同學用這個建文檔網站，研究了一下，發現符合我要求，挺好看，不會太花俏，可以做 blog 也可以做 documents ，而且目前有 Meta 幫忙維護，不太會 deprecated

希望我有心力寫下去吧（

## docusaurus_for_baby

做這個的時候，順手抽象了一個 [docusaurus_for_baby](https://github.com/cwksc-organization/docusaurus_for_baby) 的 template，我發現 GitHub 是不能 fork 自己的 repository ，所以就開了個 organization，然後 fork 去我的 GitHub repository 

之後有什麼底層的更新，像是 update node.js package / docusaurus version ，再 merge 就可以

## 期望

我一直都覺得 blog posts 這種一篇一篇接下去的不太適合系列性的文章，寫系列文章的時間未必按次序，可能中間穿插了其他東西，不能一次過看所有文章，再做一個目錄又麻煩

Blog posts 比較適合說一些階段性的生活近況，跟時間日子無關的技術文章應該以文檔方式分類

所以接下來期望

用 blog posts 的的形式寫生活近況，像是讀完一本書 / 電影寫讀後感 / 評價，念念碎，去了個旅行，對某些概念的理解，人生觀，價值觀

技術性的文章或者筆記就會放在有側邊欄分類的那種 documents site，像是學了什麼 library，framework，數學理論

各位多多指教
