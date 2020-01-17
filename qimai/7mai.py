import requests
import js2py
import base64
import datetime

context = js2py.EvalJs()

with open('7mai.js', 'r', encoding='utf8') as f:
    context.execute(f.read())

t = context.get_t()
import time

# print(t)

def make_base64(page, date, mod, t):
    i = date + page + '5000' + 'allcniphone'
    print(i.encode('utf8'))
    ii = base64.b64encode(i.encode('utf8')).decode('utf8') + '@#/rank/indexPlus/brand_id/{0}@#{1}@#1'.format(mod, t)

    return ii


if __name__ == '__main__':
    page = '3'
    date = time.strftime("%Y-%m-%d",time.localtime())
    mod = '2'  # [0,1,2]

    url = 'https://api.qimai.cn/rank/indexPlus/brand_id/{0}?analysis={1}&brand=all&country=cn&device=iphone&genre=5000&date={2}&page={3}'

    i = make_base64(page, date, mod, t)
    print(i)

    r = context.get_r2(i)
    print(r)

    url = url.format(mod, r, date, page)
    print(url)

    sess = requests.session()
    sess.headers = {
        "Host": "www.qimai.cn",
        "Origin": "https://www.qimai.cn",
        "Referer": "https://www.qimai.cn/",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4021.2 Safari/537.36",
        'cookie': 'syncd=-314;'

    }

    sess.get('https://www.qimai.cn/rank')

    sess.headers['Host'] = 'api.qimai.cn'
    sess.headers['Referer'] = 'https://www.qimai.cn/rank'
    sess.headers['Sec-Fetch-Mode'] = 'cors'

    res = sess.get(url)
    print(res.text)
