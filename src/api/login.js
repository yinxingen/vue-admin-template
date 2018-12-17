import request from '@/utils/request'
const proxyPath = process.env.BASE_API;

export function login() {
  return request({
    url: 'https://www.easy-mock.com/mock/5be436246d38dd2824b55308/baseapi/login',
    method: 'post'
  })
}

export function loginExample(query) {
  return request({
    url: 'http://192.168.43.129:9020/cmdc-audit-component/user/queryUserAuthority',
    method: 'post',
    params:query
  })
}


