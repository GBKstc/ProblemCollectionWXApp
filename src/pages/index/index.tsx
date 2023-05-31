import Taro from "@tarojs/taro";
import {View,} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import './index.scss'
import HomeModuleImageBox from "../../components/HomeModuleImageBox"

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })


  return (
    <View className='index'>
      <HomeModuleImageBox
        content={"报事报修"}
        imgSrc={"https://image.beautysaas.com/erp/product/13c31d9e-0f27-44dd-862f-36c6dec0f500.png"}
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/WorkForm/index',
          })
        }}
      />
      <HomeModuleImageBox
        content={"卫生处理"}
        imgSrc={"https://image.beautysaas.com/erp/product/4f82f38e-bce6-4cbd-9984-07b29a2feb9e.png"}
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/Hygiene/index',
          })
        }}
      />
    </View>
  )
}
