import React, {Component} from "react";
import {View} from '@tarojs/components';
import {isEmpty} from '../../utils/variable';

import './index.scss';

export default class SSwitch extends Component {

  componentDidMount = () => {

  };

  onChange() {
    const {checked} = this.props;
    this.props.onChange && this.props.onChange(!checked);
  }

  render() {
    const {checked} = this.props;
    return (
      <View className={checked ? "SSwitch-box open" : "SSwitch-box close"} onClick={this.onChange}>
        <View className={checked ? "SSwitch-box-circle open-circle" : "SSwitch-box-circle close-circle"}/>
      </View>
    )
  }
}
