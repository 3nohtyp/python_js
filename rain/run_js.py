# -*- coding: utf-8 -*-
import js2py
import execjs
from urllib.parse import urlencode
#data_js = open('water.js','r',encoding='utf8').read()
#data = js2py.eval_js(data_js)
data = ["201907150800",
"1440",
"201907250800",
"SelectHourDayRain",
"62907533"]




with open('water.js','r',encoding='utf8') as f :
	js = execjs.compile(f.read())
	print(js.call('x', data))
