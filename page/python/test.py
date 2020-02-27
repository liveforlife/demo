# coding:utf-8
import re
from bs4 import BeautifulSoup, element
tags = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'address', 'div']
listTags = ['ol', 'ul']


def convert_text():
    text = '<p style="text-align:left"><span style="color:#754c24"><span style="font-size:26px">1.下图代码会实现什么效果呢？</span></span></p>↵↵<p style="text-align:left"><img src="https://cdn.edinnovaedu.com/resources/2019-05/11/51283a60-73bf-11e9-a4b7-67956951ce34.png" style="height: 220px; width: 239px;" /></p>'
    if text is None:
        item['bak_' + key] = text = item[key]
    # 对text 转换
    # text = text.replace("↵","")
    soup = BeautifulSoup(text)
    for soup_tag in soup:
        if isinstance(soup_tag, element.Tag):
            if soup_tag.name in tags:
                style = soup_tag.get('style', '')
                if 'text-align' in style:
                    if 'text-align:right' in style:
                        soup_tag['class'] = 'ql-align-right'
                    elif 'text-align:justify' in style:
                        soup_tag['class'] = 'ql-align-justify'
                    elif 'text-align:center' in style:
                        soup_tag['class'] = 'ql-align-center'
                    elif 'text-align:left' in style:
                        soup_tag['class'] = 'ql-align-left'
                    style = style.replace('text-align:right', '')
                    style = style.replace('text-align:left', '')
                    style = style.replace('text-align:center', '')
                    style = style.replace('text-align:justify', '')
                    soup_tag['style'] = style
                else:
                    if type == 'ice':
                        soup_tag['class'] = 'ql-align-left'
                    else:
                        soup_tag['class'] = 'ql-align-center'
            if soup_tag.name in listTags:
                newNode =soup_tag.find_all("li")
                soup_tag.string = ""
                for new in newNode:
                    soup_tag.append(new)
            for img in soup_tag.find_all("img"):
                imgParentS = img.parent.get('style', '')
                if len(imgParentS) != 0:
                    for childNode in img.parent.children:
                        if isinstance(childNode, element.Tag):
                            if childNode.name != 'img':
                                childNodeStyle = childNode.get('style','')
                                childNode['style'] = childNodeStyle +';'+ imgParentS
                del img.parent['style']
    return str(soup)


n = convert_text()
print(n)
