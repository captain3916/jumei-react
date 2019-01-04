let defaultState = {
  userName : localStorage.getItem('jumei_userName'),
  isLogin: localStorage.getItem('jumei_userName') ? true : false
}

export default function userInfo(state=defaultState , action) {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'SETUSERNAME':
      newState = Object.assign({},newState,{userName: action.data});
      return newState;
    case 'SETISLOGIN':
      newState = Object.assign({},newState,{isLogin: action.data});
      return newState;
    default:
      return newState;
  }
}
