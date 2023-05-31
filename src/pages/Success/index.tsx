import {Component} from "react";
import {Image, View} from '@tarojs/components';
import './index.scss';
import Taro from "@tarojs/taro";
// import {isEmpty} from '../../utils/variable';
// import {SELECT_KEY} from '../../utils/constant';
// import request from '../../../api/request';
// import BasePage from '../BasePage'

export default class PaySuccess extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
    // this.getSuccessIntegral(this.$router.params.order_id);
  };

  // getSuccessIntegral = (order_id) => {
  //   request.post({
  //     urlKey: "showPaySuccessIntegral",
  //     data: {order_id}
  //   }).then(({data}) => {
  //     this.setState({
  //       integral: data
  //     })
  //   })
  // };

  render() {
    const {} = this.state;
    return (
      <View className="PaySuccess-Page">
        <View className="PaySuccess-Page-title">提交成功</View>
        <View className="PaySuccess-Page-content">
          <View className="PaySuccess-Page-content-logo">
            <Image mode="aspectFit" className="PaySuccess-Page-content-logo-image"
                   src={"https://image.beautysaas.com/WeChatApp/optimalImage/paySuccess.png"}/>
          </View>

          <View className="PaySuccess-Page-content-bottonList">
            {/*<View className="button_small_none PaySuccess-Page-content-bottonList-botton" onClick={() => {*/}
            {/*  goToUrl({url: "OrderList", root: "store", param: {tab: 2}});*/}
            {/*}}>查看订单</View>*/}
            <View className="button_small_none PaySuccess-Page-content-bottonList-botton" onClick={() => {
              Taro.reLaunch({
                url: '/pages/index/index',
              })
            }}>返回首页</View>
          </View>
        </View>
      </View>
    )
  }
}
