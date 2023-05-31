import {View, Form, Button} from '@tarojs/components'
import {useLoad} from '@tarojs/taro'
import './index.scss'
import FormItem from "../../components/FormItem";
import React, {useState} from "react";

export default function Index() {

  useLoad(() => {
    console.log('WorkForm Page loaded.')
  })
  // const [name, setName] = useState("")
  // const [address, setAddress] = useState("")

  const formSubmit = (e) => {
    console.log("formSubmit", e.detail.value)
  }
  const formReset = () => {
    console.log("formReset")
  }
  return (
    <View className='WorkForm'>
      <Form onSubmit={formSubmit} onReset={formReset}>
        <View className="WorkForm-item">
          <FormItem
            type="input"
            title="反馈地点"
            placeholder="请输入反馈地点"
            name='address'
            // value={address}
            // onChange={setAddress}
          />
        </View>
        <View className="WorkForm-item">
          <FormItem
            type="picker"
            title="反馈人户号"
            placeholder="请输入反馈人户号"
            name='account'
            mode={'multiSelector'}
            range={
              [
                [
                  {
                    id: 1,
                    name: "一幢",
                  },
                  {
                    id: 3,
                    name: "三幢",
                  },
                  {
                    id: 4,
                    name: "四幢",
                  },
                  {
                    id: 5,
                    name: "五幢",
                  },
                  {
                    id: 6,
                    name: "六幢",
                  },
                  {
                    id: 7,
                    name: "七幢",
                  },
                ],
                [
                  {
                    id: 2,
                    name: "二楼",
                  },
                  {
                    id: 3,
                    name: "三楼",
                  },
                  {
                    id: 4,
                    name: "四楼",
                  },
                  {
                    id: 5,
                    name: "五楼",
                  },
                  {
                    id: 6,
                    name: "六楼",
                  },
                  {
                    id: 7,
                    name: "七楼",
                  },
                  {
                    id: 8,
                    name: "八楼",
                  },
                  {
                    id: 9,
                    name: "九楼",
                  },
                  {
                    id: 10,
                    name: "十楼",
                  },
                  {
                    id: 11,
                    name: "十一楼",
                  },
                  {
                    id: 12,
                    name: "十二楼",
                  },
                  {
                    id: 13,
                    name: "十三楼",
                  },
                  {
                    id: 14,
                    name: "十四楼",
                  },
                ],
                [
                  {
                    id: 1,
                    name: "01",
                  },
                  {
                    id: 2,
                    name: "02",
                  },
                  {
                    id: 3,
                    name: "03",
                  },
                  {
                    id: 4,
                    name: "04",
                  },
                ],
              ]
            }
            rangeKey={"name"}
          />
        </View>
        <View className="WorkForm-item">
          <FormItem
            type="textarea"
            title="反馈事项"
            placeholder="请输入反馈事项"
            name='detail'
          />
        </View>

        <View className="WorkForm-item">
          <FormItem type="upload" title="上传照片" placeholder="请输入反馈人户号"/>
        </View>

        <Button className="WorkForm-button button_big" formType={"submit"}>提交反馈</Button>
      </Form>
    </View>
  )
}
