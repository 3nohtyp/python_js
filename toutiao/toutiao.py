# -*- coding: utf-8 -*-

# -*- coding: utf-8 -*-
import requests

# url = "https://www.toutiao.com/api/pc/feed/?category=news_hot&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A195DD83773F7D0&cp=5D379FF7FD90CE1&_signature=M2rnjAAAbmP2D78BxNBE5DNq55"

headers = {
#"Accept": "text/javascript, text/html, application/xml, text/xml, */*",
#"Accept-Encoding": "gzip, deflate, br",
#"Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
"Connection": "keep-alive",
#"Content-Type": "application/x-www-form-urlencoded",
"Cookie": "tt_webid=6717096098433762829; WEATHER_CITY=%E5%8C%97%E4%BA%AC; UM_distinctid=16c226f5aad281-0a474fbe453b24-3f385804-100200-16c226f5aae10b; tt_webid=6717096098433762829; csrftoken=69410d166d42d2e30979270c9918eaf1; __tasessionId=n49sdq96k1563948391382; CNZZDATA1259612802=1800301175-1563941590-https%253A%252F%252Fwww.baidu.com%252F%7C1563946990",
"Host": "www.toutiao.com",
"Referer": "https://www.toutiao.com/ch/news_hot/",
"User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
#"X-Requested-With": "XMLHttpRequest",
}
#
# response = requests.get(url,headers=headers)
# print(response.text)
import js2py
import execjs
#import HTMLParser
from urllib.parse import urlencode
# 直接用python mmd5函数加密得到i
# import hashlib
# import time,math
# time= math.floor(time.time())
# print(time)
# m = hashlib.md5()
# m.update(bytes(str(time),encoding='utf8'))
# c= m.hexdigest()
# print(str(c).upper())

# 运行js 加密函数
with open('toutiao.js','r') as f :
	js = execjs.compile(f.read())
	print(js.call('anonymous'))