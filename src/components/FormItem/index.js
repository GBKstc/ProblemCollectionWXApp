import React,{Component} from 'react';
import {Input, Picker, View} from '@tarojs/components';
import {isEmpty} from '../../utils/variable';
import './index.scss';
import SSwitch from "../SSwitch";


export default class FormItem extends Component {

  componentDidMount = () => {
  };

  onChangeInput = (e) => {
    this.props.onChange && this.props.onChange(e.detail.value);
  };

  changeSwitch = checked => {
    this.props.onChange && this.props.onChange(checked);
  }

  render() {
    const {title, placeholder = "请输入", type = "input", value} = this.props;
    let content;
    if (type == "input") {
      content = (
        <Input className="FormItem-box-right-input" placeholderClass="FormItem-box-right-placeholder" value={value}
               onInput={this.onChangeInput.bind(this)}
               placeholder={placeholder}/>
      );
    }
    if (type == "switch") {
      content = (
        <View>
          <SSwitch checked={value} onChange={this.changeSwitch}/>
        </View>
      );
    }

    if (type === "address") {
      content = (
        <Picker
          mode={'region'}
          value={value}
          onChange={(e) => {
            this.props.onChange && this.props.onChange(e.target.value)
          }}
          className={isEmpty(value) || isEmpty(value[0]) ? "FormItem-box-right-placeholder" : "FormItem-box-right-input"}>{isEmpty(value) || isEmpty(value[0]) ? placeholder : value.join("")}
        </Picker>
      );
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
