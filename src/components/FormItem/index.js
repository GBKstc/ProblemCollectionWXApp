import Taro from "@tarojs/taro";
import React, {Component} from 'react';
import {Input, Picker, View, Textarea, Button} from '@tarojs/components';
import {isEmpty} from '../../utils/variable';
import './index.scss';
import SSwitch from "../SSwitch";


export default class FormItem extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount = () => {
  };

  onChangeInput = (e) => {
    this.props.onChange && this.props.onChange(e.detail.value);
  };

  changeSwitch = checked => {
    this.props.onChange && this.props.onChange(checked);
  }

  changePicker = (name, range, e) => {
    const state = this.state;
    const value = e.target.value;
    state[name] = value;
    this.setState({...state})
  }

  render() {
    const {title, placeholder = "请输入", type = "input", value, name} = this.props;
    let content;
    if (type == "input") {
      content = (
        <Input
          width={"100%"}
          className="FormItem-box-right-input"
          placeholderClass="FormItem-box-right-placeholder"
          // value={value}
          // onInput={this.onChangeInput.bind(this)}
          name={name}
          placeholder={placeholder}/>
      );
    }
    if (type == "textarea") {
      content = (
        <Textarea
          maxlength={200}
          autoHeight={true}
          className="FormItem-box-right-Textarea"
          placeholderClass="FormItem-box-right-placeholder"
          name={name}
          placeholder={placeholder}
        />
      );
    }

    if (type === "picker") {
      const {
        mode,
        range,
        rangeKey,
      } = this.props;
      const value = this.state[name];
      content = (
        <Picker
          onChange={this.changePicker.bind(this, name, range)}
          mode={mode}
          name={name}
          range={range}
          rangeKey={rangeKey}
          className={
            isEmpty(value) || isEmpty(value[0])
              ?
              "FormItem-box-right-placeholder" : "FormItem-box-right-input"
          }>
          {isEmpty(value) || isEmpty(value[0]) ? placeholder : `${range.map((_, index) => range[index][value[index]].name).join("")}`}
        </Picker>
      );
    }

    if (type === "upload") {
      content = <Button className={"FormItem-box-right-button button_small"} size={"small"} onClick={() => {
        Taro.chooseImage({
          count: 1,  // 最多可以选择的图片张数，这里选择一张图片
          success: function (res) {
            const tempFilePaths = res.tempFilePaths; // 选择的图片的临时文件路径数组
            console.log(tempFilePaths)
            // 上传图片
            // wx.uploadFile({
            //   url: '你的上传图片接口地址', // 上传图片的接口地址
            //   filePath: tempFilePaths[0], // 要上传的文件的临时路径（这里选择第一张图片）
            //   name: 'file', // 后端接口接收图片的字段名
            //   success: function (uploadRes) {
            //     // 上传成功后的处理逻辑
            //     console.log(uploadRes.data); // 上传成功后服务器返回的数据
            //   },
            //   fail: function (error) {
            //     // 上传失败后的处理逻辑
            //     console.log(error);
            //   }
            // });
          },
          fail: function (error) {
            // 选择图片失败的处理逻辑
            console.log(error);
          }
        })
      }}>点击上传</Button>
    }

    return (
      <View>
        <View className="FormItem-box">
          <View className="FormItem-box-left">{title}</View>
          <View className="FormItem-box-right">{content}</View>
        </View>
      </View>

    )
  }
}
