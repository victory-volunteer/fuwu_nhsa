import requests
import json
import execjs


def js_from_file(file_name):
    with open(file_name, 'r', encoding='UTF-8') as file:
        result = file.read()
    return result


CONTEXT1 = execjs.compile(js_from_file('./gov_nhsa.js'))


def request_queryFixedHospital(data):
    url_path = "/nthl/api/CommQuery/queryFixedHospital"
    result1 = CONTEXT1.call("EncryptedData", data, url_path)
    headers = {
        "Connection": "keep-alive",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache",
        "x-tif-timestamp": str(result1['headers']['x-tif-timestamp']),
        "X-Tingyun": "c=B|4Nl_NnGbjwY;x=dbaf776fd2154ec1",
        "sec-ch-ua-mobile": "?0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36",
        "Content-Type": "application/json",
        "x-tif-paasid": result1['headers'].get('x-tif-paasid', 'undefined'),
        "Accept": result1['headers']['Accept'],
        "x-tif-signature": result1['headers']['x-tif-signature'],
        "contentType": result1['headers']['contentType'],
        "channel": "web",
        "x-tif-nonce": result1['headers']['x-tif-nonce'],
        "sec-ch-ua": "\"Chromium\";v=\"21\", \" Not;A Brand\";v=\"99\"",
        "sec-ch-ua-platform": "\"Windows\"",
        "Origin": "https://fuwu.nhsa.gov.cn",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://fuwu.nhsa.gov.cn/nationalHallSt/",
        "Accept-Language": "zh-CN,zh;q=0.9"
    }

    url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital"
    data2 = {"data": result1['data']}
    # print(f'正式: {data2}')
    # print(f'正式: {type(data2)}')

    data = json.dumps(data2, separators=(',', ':'))
    response = requests.post(url, headers=headers, data=data)

    # print(response.text)
    # print(response)
    return response.json()


def decrypted_data(data):
    result1 = CONTEXT1.call("DecryptedData", data)['list']
    for i in result1:
        print(i['medinsName'])


if __name__ == '__main__':
    # "addr"：表示地址信息，通常用于医保机构的地址；
    # "regnCode"：表示行政区划代码，通常用于标识医保机构所在的行政区划；
    # "medinsName"：表示医保机构名称；
    # "medinsLvCode"：表示医保机构等级代码，通常用于标识医保机构的等级；
    # "medinsTypeCode"：表示医保机构类型代码，通常用于标识医保机构的类型；
    # "openElec"：表示是否开通电子凭证功能，通常用于标识医保机构是否支持电子凭证；
    # "pageNum"：表示当前页码，通常用于分页查询；
    # "pageSize"：表示每页记录数，通常用于分页查询；
    # "queryDataSource"：表示查询数据源，通常用于指定查询使用的数据源，例如 Elasticsearch。
    for i in range(3):
        data_1 = {
            "addr": "",
            "regnCode": "110000",
            "medinsName": "",
            "medinsLvCode": "",
            "medinsTypeCode": "",
            "openElec": "",
            "pageNum": i + 1,
            "pageSize": 10,
            "queryDataSource": "es"
        }

        result = request_queryFixedHospital(data_1)
        print(f'第{i + 1}页请求: ', result['message'])
        decrypted_data(result)

