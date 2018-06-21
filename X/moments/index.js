// X/moment/moment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:String,
      value:''
    },
    audiourl:{
      type:String,
      value:''
    },
    avatarurl:{
      type:String,
      value:""
    },
    nickname:{
      type: String,
      value: ""
    },
    title:{
      type:String,
      value:""
    },
    images:{
      type:Array,
      value:[]
    },
    date:{
     type:String,
     value:''
    },
    address:{
      type:String,
      value:''
    },
    likeUsers:{
      type:Array,
      value:[]
    },
    comments:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showAllText:false,
    showTask:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindDisplayTextStatus(e){
      this.setData({
        'showAllText': !this.data.showAllText
      })
    },
    bindShowTask(e) {
      this.setData({
        showTask: true
      })
    },
    bindHideTask(e){
      this.setData({
        showTask: false
      })

    },

    // 绑定点赞
    bindLike(e){
      this.triggerEvent("Like", { index: this.data.index })
    },
    // 绑定评论
    bindComment(e){
      this.triggerEvent("Comment", { index: this.data.index })
    },
    
    // 绑定用户头像
    bindUserAvatar(e){
      this.triggerEvent('UserAvatar', { index: this.data.index})
    },
    // 绑定用户姓名
    bindUserNickName(e){
      this.triggerEvent("NickName", { index: this.data.index})
    },
    bindAddress(e){
      this.triggerEvent("Address", { index: this.data.index })
    },
    // 绑定选择点赞用户
    bindSelectedLikeUser(e){
      var value = e.currentTarget.dataset.value
      this.triggerEvent("SelectedLikeUser", { user: value})
    },
    // 绑定选择
    bindSelectedCommentUser(e){
      var value = e.currentTarget.dataset.value
      this.triggerEvent("CommentUser", { user: value })
    },

    //  预览招聘
    bindPreviewImage(e){
      var index = e.currentTarget.dataset.index
       wx.previewImage({
         current:index,
         urls: this.data.images,
       })
    }
  },

})
