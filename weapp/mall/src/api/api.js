import { wxRequest } from '@/utils/wxRequest'
//套路 -> 架构
const apiMall  = 'https://sujiefs.com/'

// const wxJsCode2Session=(params) => wxRequest(params,apiMall+'/api/wechet/jscode2session');
//两种写法
//高阶函数
const wxJsCode2Session = (params) => wxRequest(params, `${apiMall}/api/wechet/jscode2session`);
export default{
    wxJsCode2Session
}


