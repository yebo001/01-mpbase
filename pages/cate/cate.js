// pages/cate/cate.js
Page({
  bthHandler(event){
    console.log(event);
  },

  updateNum(event){
      // 获取数据
    //  console.log( this.data.num)
    //  this.data.num+=1;
    //  console.log( this.data.num)
    this.setData({
      num: this.data.num += 1
    })
  },

  updateUserInfo(){
    //新增
    // this.setData({
    //  'userInfo.name':'tom',
    //  'userInfo.age':10
    // })

    //修改
    // this.setData({
    //  'userInfo.name':'tom2',
    //  'userInfo.age':18
    // })

    //新增修改字段比较多 都写路径比较麻烦 优化 1.ES6提供的展开运算符 2.Object.assign()对象
        // const userInfo = {
        //   ...this.data.userInfo,
        //   name: 'jerry',
        //   age: 18
        // }

        // this.setData({
        //   userInfo
        // })

        // const userInfo = Object.assign(this.data.userInfo,{name:"jerry"},{age: 18})
        // this.setData({
        //     userInfo
        //   })

        //删除单个属性
        // delete this.data.userInfo.age
        // console.log(this.data.userInfo)
        // this.setData({
        //   userInfo: this.data.userInfo
        // })

        // 删除多个属性
        // const {age,test,...rest} = this.data.userInfo
        // this.setData({
        //   userInfo: rest
        // })
      
  },

  //更新list
  updateList(){
    //新增
    // this.data.list.push(4)
    
    // this.data.list.push(4)
    // this.setData({
    //   list: this.data.list
    // })

    // const newList = this.data.list.concat(4)
    //  this.setData({
    //   list: newList
    // })

    // const newList = [...this.data.list,4]
    // this.setData({
    //   list: newList
    // })

    //修改
    // this.setData({
    //   // 'list[1]': 6
    //   'list[0].name':'jerry'
    // })

    //删除
    // this.data.list.splice(1,1)
    // this.setData({
    //   list: this.data.list
    // })

    const newList = this.data.list.filter(item=>item!=2)
    this.setData({
      list: newList
    })

  },
  
  data:{
    id: 1,
    isChecked: false,
    school: "尚硅谷",
    num: 1,
    userInfo:{
      name: 'tom',
      age: 10,
      test: 1
    },
    list: [1,2,3],
    // list: [{id: 1,name:'tom'}],
    value: 1,
    isFlag: true,
    fruitList:[
      {id:1,name:"🍎",price:5},
      {id:2,name:"🍋",price:6},
      {id:3,name:"🍅",price:7}
    ],
    obj: {
      name : "tom"
    }
  }

})