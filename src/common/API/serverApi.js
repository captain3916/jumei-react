
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
export const Yiqituan = 'http://129.204.109.25:3000/user/register';

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
export const Yiqituan = 'http://129.204.109.25:3000/user/login';



