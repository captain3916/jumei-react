import React, {
  Component
} from 'react';

import './index.scss';

class ZIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: {
        current_index: 0,
      },
    };
  }

  tabClick = (num) => {
    this.setState({
      tab: Object.assign(
        this.state.tab, {
          current_index: num,
        },
      ),
    });
  }
  render() {
    const state = this.state;
    const currentIndex = state.tab.current_index;
    return ( 
      <div className="settle-wrap">
        <ul className="settle-header">
        <li onClick={() => this.tabClick(0)} className={currentIndex === 0 ? 'active' : ''}>今日10点上新</li>
        <li onClick={() => this.tabClick(1)} className={currentIndex === 1 ? 'active' : ''}>明日10点预告</li>
        </ul>
        <div className={`settle-list ${currentIndex === 0 ? '' : 'hidden'}`}>
          <div className="item-each">
            <img src="http://mp6.jmstatic.com//jmstore/image/000/005/5493_std/5c28f6debf003_2048_710.jpg?1546189030&imageView2/2/w/800/q/90" alt=""/>
          </div>
          <div className="item-each">         
            <img src="http://mp6.jmstatic.com//jmstore/image/000/006/6774_std/5c273fa2c32b1_2048_710.jpg?1546078136&imageView2/2/w/800/q/90" alt="" />
          </div>
          <div className="deal-item item-each">
            <div className="product-img">
            <img src="http://mp6.jmstatic.com/product/000/818/818484_std/818484_dx_1154_400.jpg?_t=1501409562&imageView2/2/w/800/q/90" alt=""></img>
            </div>
            <div className="product-detail">
              <div className="product-title">
                兰蔻粉水清滢柔肤水（干性）200ml，解救换季干燥肌
						  </div>
              <div className="price-wrap">
                <span className="jumei-price">￥205</span>
                <span className="del-price">￥305</span>
                <p className="">1.2万条评论</p>
              </div>
            </div>
          </div>
          <div className="deal-item item-each">
            <div className="product-img">
            <img src="http://mp6.jmstatic.com/product/000/818/818484_std/818484_dx_1154_400.jpg?_t=1501409562&imageView2/2/w/800/q/90" alt=""></img>
            </div>
            <div className="product-detail">
              <div className="product-title">
                兰蔻粉水清滢柔肤水（干性）200ml，解救换季干燥肌
						  </div>
              <div className="price-wrap">
                <span className="jumei-price">￥205</span>
                <span className="del-price">￥305</span>
                <p className="">1.2万条评论</p>
              </div>
            </div>
          </div>
          <div className="deal-item item-each">
            <div className="product-img">
            <img src="http://mp6.jmstatic.com/product/000/818/818484_std/818484_dx_1154_400.jpg?_t=1501409562&imageView2/2/w/800/q/90" alt=""></img>
            </div>
            <div className="product-detail">
              <div className="product-title">
                兰蔻粉水清滢柔肤水（干性）200ml，解救换季干燥肌
						  </div>
              <div className="price-wrap">
                <span className="jumei-price">￥205</span>
                <span className="del-price">￥305</span>
                <p className="">1.2万条评论</p>
              </div>
            </div>
          </div>
          <div className="deal-item item-each">
            <div className="product-img">
            <img src="http://mp6.jmstatic.com/product/000/818/818484_std/818484_dx_1154_400.jpg?_t=1501409562&imageView2/2/w/800/q/90" alt=""></img>
            </div>
            <div className="product-detail">
              <div className="product-title">
                兰蔻粉水清滢柔肤水（干性）200ml，解救换季干燥肌
						  </div>
              <div className="price-wrap">
                <span className="jumei-price">￥205</span>
                <span className="del-price">￥305</span>
                <p className="">1.2万条评论</p>
              </div>
            </div>
          </div>
          <div className="deal-item item-each">
            <div className="product-img">
            <img src="http://mp6.jmstatic.com/product/000/818/818484_std/818484_dx_1154_400.jpg?_t=1501409562&imageView2/2/w/800/q/90" alt=""></img>
            </div>
            <div className="product-detail">
              <div className="product-title">
                兰蔻粉水清滢柔肤水（干性）200ml，解救换季干燥肌
						  </div>
              <div className="price-wrap">
                <span className="jumei-price">￥205</span>
                <span className="del-price">￥305</span>
                <p className="">1.2万条评论</p>
              </div>
            </div>
          </div>
        </div>
        <div className={currentIndex === 1 ? '' : 'hidden'}>第二帧</div>
      </div>
    )
  }
}
export default ZIndex;
