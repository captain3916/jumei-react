
/**
 * 一起团数据接口
 * method:  get
 * url: 'http://129.204.109.25:3000/yiqituan/tab_list'
 * params: tab: 类型 （可选）
 *         page：请求的是第几页（可选）
 *         per_pag: 每页数据是多少条（可选）
 * 返回值:{
*      code: 0 || 1,    // 0代表请求成功
*      msg： 'OK',  // 请求状态描述
*      data: {
*         list:[] // 返回的数据
*         total:   // 数据库中此类型数据的总条数
*      }
*  }
 */
export const Yiqituan = 'http://129.204.109.25:3000/yiqituan/tab_list';
/**
 * 注册接口
 * method:  post
 * url: 'http://129.204.109.25:3000/user/register'
 * params: userName: 用户名 （必须传）
 *         userPsw: 密码（必须传）
 * 返回值:{
*      code: 0 || 1,    // 0代表注册成功
*      msg： 'OK',  // 注册状态描述
*  }
 */
export const Register = 'http://129.204.109.25:3000/user/register';

/**
 * 注册接口
 * method:  post
 * url: 'http://129.204.109.25:3000/user/register'
 * params: userName: 用户名 （必须传）
 *         userPsw: 密码（必须传）
 * 返回值:{
*      code: 0 || 1,    // 0代表登录成功
*      msg： 'OK',  // 登录状态描述
*  }
 */
export const Login = 'http://129.204.109.25:3000/user/login';

/**
 * 获取搜索默认关键字接口
 * method:  get
 * url: 'http://129.204.109.25:3000/search/key'
 * params: 无
 * 返回值:{
*      code: 0 || 1,    // 0代表登录成功
*      msg： 'OK',  // 登录状态描述
*      data: [], // 关键字信息
*  }
 */
export const searchKey = 'http://129.204.109.25:3000/search/key';

/**
 * 首页获取产品信息接口
 * method:  get
 * url: 'http://129.204.109.25:3000/product/getProduct'
 * @param page: 请求的是第几页
 * @param type: 1 | 2   1代表今天，  2代表明天
 * 返回值:{
*     code = 0;
*     msg = 'OK';
*     page: 当前请求的是第几页
*     pageCount: 数据总页数
*     data:  数据
*  }
*/
export const Product = 'http://129.204.109.25:3000/product/getProduct';



