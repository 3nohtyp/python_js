import js2py
import requests
from scrapy import Selector
import os
import time

"""
https://phishstats.info/------5秒内
先重定向 
get  https://phishstats.info/,    503
post https://phishstats.info/xxxxxxxx,  200

关闭防火墙等
"""

import re

sess = requests.session()
sess.headers = {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)"
                              " Chrome/79.0.3945.88 Safari/537.36",
                # 'cookie': "__cfduid=d73e29e29ccde8ccaa077b0a16bdbbf801578031005; _ga=GA1.2.744177144.1578031008; _gid=GA1.2.160209835.1578031008; _pk_testcookie.1.f9d6=1",
                'sec-fetch-site': 'same-origin',
                'origin': 'https://phishstats.info',
                'referer': 'https://phishstats.info/',
                'Host': 'phishstats.info',
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-User": "?1",
                "Upgrade-Insecure-Requests": "1",
                'Connection': 'keep-alive',
                'Cache-Control': 'max-age=0'

                }


def gen_js(j):
    """
    :param j: 从html中提取的原始js代码
    :return: 生成改写后的，可以运行的js文件
    """
    s1 = re.search(r'setTimeout.*\n(.*)\n', j).group(1)
    s2 = re.search(r'f = document.*\n(.*)\n', j).group(1)
    s2 = re.sub(r'a.value', 'a', s2)

    # 改写后 作为被替换的js文件
    with open(gen_path('base_js.js'), 'r', encoding='utf8') as f:
        pre_js = f.read()
    # print(pre_js)
    aft_js = re.sub(r'var s, t.*\n', s1[8:], pre_js)
    aft_js = re.sub(r'.*?(iMtjTwP.jpyqv).*\n', s2[6:], aft_js)

    with open(gen_path('do_js.js'), 'w', encoding='utf8') as f:
        f.write(aft_js)


def gen_path(filename):
    # 生成路径
    rootpath = os.path.abspath(os.path.join(os.getcwd(), "../..")).replace("\\", "/")
    filepath = "%s/files/%s" % (rootpath, filename)
    # print(filepath)
    return filepath


def run_js():
    """
    运行js 获取 jschl_answer代码
    :return: jschl_answe
    """
    context = js2py.EvalJs()

    with open(gen_path('do_js.js'), 'r', encoding='utf8') as f:
        context.execute(f.read())

    jschl_answer = context.cf()
    # j2 = context.f()
    return float(jschl_answer)


def frt_reqs():
    """
    从html( https://phishstats.info/)提取相关参数
    :return:

    """
    args = {}

    res = sess.get('https://phishstats.info/').text
    ses = Selector(text=res)
    args['text_js'] = ses.xpath("//script[@type]/text()").get()
    # print(text_js)
    args['action'] = ses.xpath("//form/@action").get()
    args['r'] = ses.xpath("//input[@name='r']/@value").get()
    args['pass_'] = ses.xpath("//input[@name='pass']/@value").get()
    args['jschl_vc'] = ses.xpath("//input[@name='jschl_vc']/@value").get()
    # sess.headers[':path'] = args['action']
    return args
    # print(res.text)
    # with open('E:/spider_M/fortinet/files/res_cf.html','w',encoding='utf8') as f:
    #     f.write(res.text)


def request_again(args):
    """
    再post新的url
    :param args: post数据
    :return:
    """
    url = 'https://phishstats.info{0}'.format(args['action'])
    post_data = {
        'r': args['r'],
        'jschl_vc': args['jschl_vc'],
        'pass': args['pass_'],
        'jschl_answer': args['jschl_answer'],
    }

    res = sess.post(url, post_data)
    print(url)
    print(post_data)
    print(res.status_code, )
    print(res.text)


if __name__ == '__main__':
    args = frt_reqs()
    gen_js(args['text_js'])
    args['jschl_answer'] = run_js()
    url = 'https://phishstats.info{0}'.format(args['action'])

    time.sleep(4)

    request_again(args)
