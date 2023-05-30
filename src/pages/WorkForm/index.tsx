import {View,} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import './index.scss'


export default function Index() {

  useLoad(() => {
    console.log('WorkForm Page loaded.')
  })


  return (
    <View className='WorkForm'>

    </View>
  )
}
