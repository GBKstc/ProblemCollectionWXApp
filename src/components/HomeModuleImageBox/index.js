import {Image, View} from '@tarojs/components';
import './index.scss';

export default function (props) {
  const {imgSrc, content, onClick} = props;

  return (
    <View className={"ImageBox"} onClick={onClick}>
      <Image className={"ImgStyle"} mode={"widthFix"}
             src={imgSrc}/>
      <View className={"ContentBox"}>{content}</View>
    </View>
  )
}
