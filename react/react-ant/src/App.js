import React, { Component } from 'react';
// 对react ui 阿里的antd 部分引用
import { Table, Pagination, Input, Row, Button, Modal, Form, message } from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import axios from 'axios'
const { Search } = Input
const FormItem = Form.Item
const { confirm } = Modal


class App extends Component {
    columns = [
        {
            dataIndex: "username",
            title: "用户"
        },
        {
            dataIndex: "age",
            title: "年龄"
        },
        {
            dataIndex: "address",
            title: "地址"
        },
        {
            dataIndex: "action",
            title: "操作",
            width: 200,
            render: (text, row) => {
                return (
                    <div>
                        <Button type="primary" onClick={() => { this.modal('edit', row) }}>编辑</Button>
                        <Button type="danger" style={{marginLeft: 10}} onClick={() => this.remove(row)}>删除</Button>
                    </div>
                )
            }
        }
    ]
    state = {
        visible: false,
        users: [
            {
            username: 'Jack',
            age: 30,
            address: '杭州',
            id: 1
        },{
            username: 'Tom',
            age: 28,
            address: '上海',
            id: 2
        }
    ],
        modalType: "add",
        id: 3,
        editRow:{}
    }
    remove(row){
        const that = this
        confirm({
            title: '是否删除该用户',
            okText: '是',
            cancelText: '否',
            onOk(){
                const _users = that.state.users.filter(data => {
                    return data.id !== row.id
                })
                that.setState({
                    users: _users
                })
            }
        })
    }
    searchUser (event) {
        axios.get('http://localhost:3006/users')
        .then(data => {
            console.log(data);
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        }
        return (
        <div className="App">
            <Row>
                <Search style={{width: 300}} onChange={ this.searchUser.bind(this) }></Search>
                <Button type="primary" style={{marginLeft: 20}} onClick={() => this.modal('add')}>添加用户</Button>
            </Row>
            <Row style={{paddingTop: 20}}>
                <Table dataSource={this.state.users} columns={this.columns} bordered pagination={false} rowKey={row => row.id}/>
            </Row>
            <Modal title={this.state.modalType === 'add' ? "添加用户" : "编辑用户"} visible={this.state.visible} onCancel={() => this.setState({visible: false})} onOk={() => this.handleOk()}>
                <Form>
                    <FormItem label="用户" {...formItemLayout}>
                        {
                            getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username'}]
                            })
                            (<Input placeholder="UserName"/>)
                        }
                    </FormItem>
                    <FormItem label="年龄" {...formItemLayout}>
                        {
                            getFieldDecorator('age', {
                                rules: [
                                    {
                                    required: true, message: 'Please input your age'
                                    }
                                ]
                            })(<Input placeholder="age"></Input>)
                        }
                    </FormItem>
                    <FormItem label="地址" {...formItemLayout}>
                        {
                            getFieldDecorator('address', {
                                rules: [
                                    {
                                    required: true, message: 'Please input your address'
                                    }
                                ]
                            })(<Input placeholder="address"></Input>)
                        }
                    </FormItem>
                </Form>
            </Modal>
        </div>
        );
    }
  modal(type, row){
    //   console.log(type);
      this.setState({
        visible: true,
        modalType: type
      }, () => {
          this.props.form.resetFields()
          if(type === 'add') return
          this.props.form.setFieldsValue({
              username: row.username,
              age: row.age,
              address: row.address
          })
        this.setState({editRow: row})
      })
    }
    handleOk(){
        // console.log('ok');
        // this.setState({
        //     visible: false
        // })
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err) {
                let data = {
                    username: values.username,
                    age: values.age,
                    address: values.address
                }
                console.log(data)
                axios.post('http://127.0.0.1:3006/user', data)
                .then(msg => {
                    console.log(msg)
                    this.setState({
                        visible: false
                    })
                    message.success('添加成功')
                })
            }
            const {username, age, address} = values
            const _id = this.state.id++
            if (this.state.modalType === 'add')  {
                this.state.users.push({
                username,age,address,
                id: _id
                })
            } else {
                this.state.users.forEach((item)=>{
                if(item.id === this.state.editRow.id) {
                    item= Object.assign(item,values)
                }
                })
            }
        })
    }
}

export default Form.create()(App);
