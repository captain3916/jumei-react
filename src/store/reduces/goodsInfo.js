let defaultState = localStorage.getItem('jm_shopCard') ? JSON.parse(localStorage.getItem('jm_shopCard')) : [];


export default function goodsInfo(state = defaultState, action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        // 增加商品
        case 'ADDGOOD':
            const goods_id = action.data.goods_id;
            let index = -1;
            newState.forEach((item, i) => {
                if (item.goods_id === goods_id) index = i;
            });
            if (index === -1) {
                newState.push({
                    goods_id: action.data.goods_id,
                    goods_name: action.data.goods_name,
                    goods_num: 1,
                    goods_price: action.data.goods_price,
                });
            } else {
                newState[index].goods_num += 1;
            }
            // 写入localStorage
            localStorage.setItem('jm_shopCard', JSON.stringify(newState));
            return newState;

        // 减少商品  
        case 'REDUCEGOOD':
            const id = action.data.goods_id;
            let red_index = -1;
            newState.forEach((item, i) => {
                if (item.goods_id === id) red_index = i;
            });
            if (red_index !== -1) {
                if (newState[red_index].goods_num >= 2) {
                    newState[red_index].goods_num -= 1;
                } else {
                    newState.splice(red_index, 1);
                }
            }
            // 写入localStorage
            localStorage.setItem('jm_shopCard', JSON.stringify(newState));
            return newState;
        
        // 清空购物车 
        case 'CLEARSHOPCARD':
            localStorage.removeItem('jm_shopCard');
            return newState;

        default:
            return newState;
    }
}



