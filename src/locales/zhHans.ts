export default {
  common: {
    add: "新增",
    cancel: "取消",
    description: "描述",
    delete: "删除",
    title: "标题",
    save: "保存",
    faq: "常见问题",
    contact: "联系我们",
    tos: "服务条款",
    policy: "隐私政策",
  },
  login: {
    title: "账户登录",
    account: "账户",
    user: "电子邮件 或 用户名",
    email: "电子邮件",
    password: "密码",
    button: "登录",
    orsign: "或使用",
    forgot: "忘记密码？",
    noaccount: "还没有帐号？",
    create: "在此处创建一个",
    error: "电子邮件/密码组合无效",
    model: "登录模式",
    model1: "验证登录",
    model2: "密码登录",
    agree: "我已理解并愿意遵守《AI00 用户协议》以及《AI00 社区规范》",
    nopass: "没有账户，新注册一个",
    code: "验证码",
  },
  register: {
    title: "创建帐号",
    username: "全名",
    email: "电子邮件",
    password: "密码",
    button: "创建帐号",
    orsign: "或注册",
    agree: "签署即表示您同意",
    account: "已经有帐号了？",
    signin: "登录",
    rule: "社区规范",
  },
  menu: {
    home: "主页",
    settings: "设置",
    chat: "聊天",
    lunwen: "论文",
    todo: "项目进度",
    write: "续写",
  },
  dashboard: {
    about: "🎈关于 AI00 Server",
    title1: "😋容易使用",
    text1: "Ai00 server 支持 Vulkan/Dx12/openGL 作为推理后端，支持 INT8/NF4 量化，所以可以在绝大部分的个人电脑上快速的运行！支持大部分NVIDIA、AMD、Inter的显卡，包括集成显卡。7B的模型NF4量化时仅占用5.5G显存。",
    title2: "🎁免费开源",
    text2: "Ai00 server 使用 MIT/Apache2.0 协议，免费开源商用。您可以把Ai00 server集成在您的系统或软件中。社区保持活跃开发中！",
    title3: "✨能力出众",
    text3: "兼容chatGPT的API接口，使用强大的RWKV模型。RWKV是将会吊打所有基于Transformer的模型的，在端侧LLM部署的王者模型。并且正在快速迭代中，功能和性能越来越强悍。"
  },
  settings:{
    title1: "参数设置",
    subtitle1: "选择模型",
    subtitle2: "选择后端",
    button1: "保存设置",
    button2: "启动模型",
  },
  chat: {
    newchat: "新建聊天",
    settings: "参数设置",
    chating: "愉快地聊天吧",
    hello: "你好，我是你的AI助手。有什么问题或指令请尽管吩咐！",
    tips: "默认User和Assistant的对话，AI将获得最好的智力",
    youname: "你的称呼",
    ainame: "AI的称呼",
    text: "AI的自我介绍",
    close: "关闭",
    ok: "确定",

  },
  write: {
     settings: "参数设置",
     write: "续写",
     title: "论文标题",
     step1: "生成提纲",
     step2: "生成论文",
     contens: "论文内容",
     prompt1: "根据题目，完成一篇高度凝练且全面的论文提纲,论文的题目是：",
     prompt2: "论文提纲标准格式：I.引言。II. 正文。III. 结论。正文又细分为若干具体的小节，用罗马数字分段。",
     prompt3: "根据论文主题对下列段落进行详细的撰写，完成一篇高度凝练且全面的论文，论文的题目是：",
     prompt4: "段落标题",
 

  },

  // Vuetify 组件内部翻译
  $vuetify: {
    badge: "徽章",
    close: "关",
    open: "开",
    clear: "清除",
    dataIterator: {
      noResultsText: "未找到匹配的记录",
      loadingText: "正在载入项目...",
    },
    dataTable: {
      itemsPerPageText: "每页行数：",
      ariaLabel: {
        sortDescending: "降序排列。",
        sortAscending: "升序排列。",
        sortNone: "未排序。",
        activateNone: "激活以删除排序。",
        activateDescending: "激活以降序排列。",
        activateAscending: "激活以升序排序。",
      },
      sortBy: "排序方式",
    },
    dataFooter: {
      itemsPerPageText: "每页项目：",
      itemsPerPageAll: "所有",
      nextPage: "下一页",
      prevPage: "上一页",
      firstPage: "第一页",
      lastPage: "最后一页",
      pageText: "{2}中的{0}-{1}",
    },
    datePicker: {
      itemsSelected: "已选择{0}",
      nextMonthAriaLabel: "下个月",
      nextYearAriaLabel: "明年",
      prevMonthAriaLabel: "上个月",
      prevYearAriaLabel: "去年",
    },
    noDataText: "无可用数据",
    carousel: {
      prev: "上一张",
      next: "下一张",
      ariaLabel: {
        delimiter: "{1}的轮播幻灯片{0}",
      },
    },
    calendar: {
      moreEvents: "还有{0}个",
    },
    fileInput: {
      counter: "{0}个文件",
      counterSize: "{0}个文件（共{1}个）",
    },
    timePicker: {
      am: "AM",
      pm: "PM",
    },
    pagination: {
      ariaLabel: {
        wrapper: "分页导航",
        next: "下一页",
        previous: "上一页",
        page: "转到页面{0}",
        currentPage: "当前页，第{0}页",
      },
    },
  },
};
