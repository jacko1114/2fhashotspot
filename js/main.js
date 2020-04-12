Vue.component("load-tag", {
  template: `<div class="container" id="loading">
              <div class="wrapper">
                <div class="content">
                  <div class="logo-ani">
                    <img :src="i.path" :class="i.name"  v-for="i in imgpaths">
                  </div>
                  <div class="txt">
                    <p>loading
                      <span class="loading">.</span>
                      <span class="loading">.</span>
                      <span class="loading">.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>`,
  props: ["loading"],
  data() {
    return {
      imgpaths: [
        { name: "body", path: "./images/logo-ani-1.png" },
        { name: "hotspot", path: "./images/logo-ani-2.png" },
        { name: "plate", path: "./images/logo-ani-3.png" },
        { name: "dbdot", path: "./images/logo-ani-4.png" },
        { name: "dot", path: "./images/logo-ani-5.png" },
        { name: "adb", path: "./images/logo-ani-6.png" },
        { name: "holder", path: "./images/logo-ani-7.png" },
      ],
    };
  },
});

Vue.component("navbar-tag", {
  template: `<div class="container" id="nav" :class="status === true ?'active':''">
              <div class="wrapper">
                <div class="menu">
                  <div class="logo">
                    <img :src="status === true ?'images/logo_row_b.png':'images/logo_row_w.png'" alt="logo">
                  </div>
                  <div class="facebook">
                    <a :href="social_media[0]" target="_blank">{{social_media[1]}}</a>
                  </div>
                  <div class="hamburger" @click="changeStatus" :class="{active:Open === true}">
                      <span></span>
                  </div>
                  <div class="collapse" :class="{active:Open === true}">
                    <a href="javascript:;" @click="closeStatus()" v-scroll-to="{ element: '#news' }">最新消息</a>
                    <a href="javascript:;" @click="closeStatus()" v-scroll-to="{ element: '#about' }">關於我們</a>
                    <a href="javascript:;" @click="closeStatus()" v-scroll-to="{ element: '#menu' }">美味菜單</a>
                    <a href="javascript:;" @click="closeStatus()" v-scroll-to="{ element: '#contact' }">聯絡方式</a>
                  </div>
                </div>
              </div>
            </div>`,
  data() {
    return {
      social_media: ["https://www.facebook.com/2fhashotpot/", "f"],
      Open: false,
      status: false,
      scrollTop: 0,
    };
  },
  methods: {
    changeStatus() {
      this.Open = !this.Open;
    },
    closeStatus() {
      this.Open = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let body = document.body;
      let documentElement = document.documentElement;
      this.scrollTop = body.scrollTop
        ? body.scrollTop
        : documentElement.scrollTop;
      this.status = this.scrollTop > 60;
    });
  },
});

Vue.component("header-tag", {
  template: `<div class="container" id="header">
              <div class="wrapper clearfix">
                <div class="content">
                  <i class="fas fa-quote-left"></i>
                  <p>{{content[0]}}<br><span>{{content[1]}}</span></p>
                  <i class="fas fa-quote-right"></i>
                </div>
                <div class="scroll">
                  <span></span>
                </div>
              </div>
            </div>`,
  data() {
    return {
      content: ["天氣還是很涼的", "等你來開鍋"],
    };
  },
});

Vue.component("breakingnews-tag", {
  template: `<div class="container" id="news">
              <div class="wrapper clearfix">
                <div class="col-12">
                  <h1 class="title">{{title}}</h1>
                </div>
                <div class="col-12 slide fade" v-for="(data,index) in datas" v-show="index === active" @mouseover="stopCarousel" @mouseout="startCarousel">
                  <div class="co1-12 col-lg-5">
                    <img :src="data.imgpath" :alt="data.title" :style="{transform:data.style}">
                  </div>
                  <div class="col-12 col-lg-7">
                    <h2>{{data.title}}</h2>
                    <p>{{data.content1}}</p>
                    <p>{{data.content2}}<span>{{data.tel}}</span></p>
                  </div>
                </div>
                <div class="prev-btn" @click="change(-1)" @mouseover="stopCarousel" @mouseout="startCarousel">
                  <i class="fas fa-angle-left"></i>
                </div>
                <div class="next-btn" @click="change(+1)" @mouseover="stopCarousel" @mouseout="startCarousel">
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
            </div>`,
  data() {
    return {
      title: "最新消息",
      active: 0,
      timer: null,
      speed: 3000,
      datas: [
        {
          imgpath: "./images/clear.jpg",
          title: "關懷疫情，全面消毒",
          style: "rotate(0deg)",
          content1:
            "防疫從每個細節開始，為保障顧客安全，貳樓友火鍋每天都會使用酒精清潔，一人一鍋讓你安心享受美食，此外即日起提供外帶服務～",
          content2: "歡迎來電預訂外帶 : ",
          tel: "01-4252070",
        },
        {
          imgpath: "./images/clear.jpg",
          title: "全面消毒，關懷疫情",
          style: "rotate(90deg)",
          content1:
            "防疫從小細節開始，為保障顧客安全，貳樓友火鍋每天都會使用酒精清潔，一人一鍋讓你安心享受美食，此外即日起提供外帶服務～",
          content2: "歡迎來電預訂外帶 : ",
          tel: "02-4252070",
        },
        {
          imgpath: "./images/clear.jpg",
          title: "疫情關懷，全面消毒",
          style: "rotate(180deg)",
          content1:
            "防疫從大細節開始，為保障顧客安全，貳樓友火鍋每天都會使用酒精清潔，一人一鍋讓你安心享受美食，此外即日起提供外帶服務～",
          content2: "歡迎來電預訂外帶 : ",
          tel: "03-4252070",
        },
        {
          imgpath: "./images/clear.jpg",
          title: "關懷疫情，消毒全面",
          style: "rotate(270deg)",
          content1:
            "防疫從每個小細節開始，為保障顧客安全，貳樓友火鍋每天都會使用酒精清潔，一人一鍋讓你安心享受美食，此外即日起提供外帶服務～",
          content2: "歡迎來電預訂外帶 : ",
          tel: "04-4252070",
        },
        {
          imgpath: "./images/clear.jpg",
          title: "消毒全面，關懷疫情",
          style: "rotate(180deg)",
          content1:
            "防疫從每個大細節開始，為保障顧客安全，貳樓友火鍋每天都會使用酒精清潔，一人一鍋讓你安心享受美食，此外即日起提供外帶服務～",
          content2: "歡迎來電預訂外帶 : ",
          tel: "05-4252070",
        },
      ],
    };
  },
  computed: {
    total() {
      return this.datas.length;
    },
  },
  methods: {
    change(index) {
      index += this.active;
      this.active = (index + this.total) % this.total;
    },
    startCarousel() {
      this.timer = setInterval(this.autoMove, this.speed);
    },
    stopCarousel() {
      clearInterval(this.timer);
      this.timer = null;
    },
    autoMove() {
      let current = this.active;
      let next = current + 1;
      next > this.total - 1 ? (next = 0) : next;
      this.active = next;
    },
  },
  mounted() {
    this.startCarousel();
  },
});

Vue.component("aboutus-tag", {
  template: `<div class="container" id="about">
              <div class="wrapper clearfix">
                <div class="col-12">
                  <h1 class="title">{{title}}</h1>
                </div>
                <div class="col-12 col-md-4" v-for="(about,index) in abouts">
                  <div class="circle">
                    <img :src="about.imgpath" :alt="about.alt" :data-popup="about.id">
                  </div>
                  <div class="card-body">
                    <p class="slogan">{{about.slogan}}</p>
                    <a href="javascript:;" @click="change(index)">詳細資訊</a>
                  </div>
                </div>
              </div>
              <div class="popup-background" :class="{active:about_detail.show}" v-for="(about_detail,index) in about_details" :id="about_detail.id" >
                <div class="popup" :class="{active:about_detail.show}" @close="about.show = false">
                  <div class="col-lg-12 modal-title">
                    <h1>{{about_detail.title}}</h1>
                    <i class="fas fa-times" @click="change(index)"></i>
                  </div>
                  <div class="col-lg-12">
                    <div class="col-lg-5">
                      <img :src="about_detail.imgpath" :alt="about_detail.title">
                    </div>
                    <div class="col-lg-7">
                      <p>{{about_detail.text}}</p>
                    </div>
                  </div>
                </div>   
              </div>
            </div>`,
  data() {
    return {
      title: "關於我們",
      show: false,
      abouts: [
        {
          imgpath: "./images/img2.jpg",
          alt: "環境清幽",
          slogan: "環境清幽",
          id: "#popup1",
        },
        {
          imgpath: "./images/img3.jpg",
          alt: "新鮮食材",
          slogan: "新鮮食材",
          id: "#popup2",
        },
        {
          imgpath: "./images/img4.jpg",
          alt: "平價美食",
          slogan: "平價美食",
          id: "#popup3",
        },
      ],
      about_details: [
        {
          id: "popup1",
          imgpath: "./images/img2.jpg",
          title: "環境清幽",
          text:
            "這邊的故事隨便你們瞎掰，只要假裝文卿煞尤其事客人接受肯來買單就好。我們想讓客人吃到拉希，我們不要你們來。我就是打些沒意義的內容給你們看爽的給我乖乖想文案。我們就是一家火鍋店看看就好不爽不要吃甘霖糧草之百山林良都蘭山小山林老木金傑百洲杜蘭。",
          show: false,
        },
        {
          id: "popup2",
          imgpath: "./images/img3.jpg",
          title: "新鮮食材",
          text:
            "這邊的故事隨便你們瞎掰，只要假裝文卿煞尤其事客人接受肯來買單就好。我們想讓客人吃到拉希，我們不要你們來。我就是打些沒意義的內容給你們看爽的給我乖乖想文案。我們就是一家火鍋店看看就好不爽不要吃甘霖糧草之百山林良都蘭山小山林老木金傑百洲杜蘭。",
          show: false,
        },
        {
          id: "popup3",
          imgpath: "./images/img4.jpg",
          title: "平價美食",
          text:
            "這邊的故事隨便你們瞎掰，只要假裝文卿煞尤其事客人接受肯來買單就好。我們想讓客人吃到拉希，我們不要你們來。我就是打些沒意義的內容給你們看爽的給我乖乖想文案。我們就是一家火鍋店看看就好不爽不要吃甘霖糧草之百山林良都蘭山小山林老木金傑百洲杜蘭。",
          show: false,
        },
      ],
    };
  },
  methods: {
    change(index) {
      this.show = !this.show;
      this.about_details[index].show = !this.about_details[index].show;
    },
  },
});

Vue.component("deliciousmenu-tag", {
  template: `<div class="container" id="menu" :style="{backgroundImage:'url('+background+')'}">
              <div class="wrapper clearfix">
                <div class="col-md-12 col-lg-4 menu-l">
                  <h1 class="title">{{title}}</h1>
                  <p v-for="content in contents">{{content}}</p>
                  <div class="pre-btn" @click="change(-1)">
                      <i class="fas fa-angle-left"></i>
                  </div>
                  <div class="nxt-btn" @click="change(+1)">
                      <i class="fas fa-angle-right"></i>
                  </div>
                </div>
                <div class="col-md-12 col-lg-8 menu-r fade" v-for="(data,index) in datas" v-show="index === active">
                  <div class="menu-list" v-for="t in data.subclass">
                    <h1 >{{t.title}}</h1>
                    <div class="menu-item">
                      <span v-for="m in t.menus">{{m}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`,
  data() {
    return {
      title: "美味菜單",
      active: 0,
      background: "./images/img5.jpg",
      contents: [
        " * 每人低消200元可抵單點",
        " * 兒童110不另計價",
        " * 限兩人共鍋",
      ],
      datas: [
        {
          imgpath: "./images/img5.jpg",
          subclass: [
            {
              title: "套餐主食",
              menus: [
                "鱸魚蛤蠣",
                "鮮蝦蛤蠣",
                "美國小肥牛",
                "澳洲牛板腱",
                "頂級牛小排",
                "嫩切羊卷",
                "澳洲羊肉",
                "梅花豬",
                "豬五花",
                "美安格斯背肩",
              ],
            },
            { title: "湯底", menus: ["原味湯底", "麻辣湯底", "酸白菜湯底"] },
          ],
        },
        {
          imgpath: "./images/img2.jpg",
          subclass: [
            {
              title: "肉類 / 海鮮單點",
              menus: [
                "美國小肥牛",
                "美安格斯背肩",
                "澳洲牛板腱",
                "頂級牛小排",
                "嫩切羊卷",
                "澳洲羊肉",
                "梅花豬",
                "豬五花",
                "白蝦",
                "鱸魚片",
                "蛤蠣",
                "巴沙魚片",
              ],
            },
          ],
        },
        {
          imgpath: "./images/img7.jpg",
          subclass: [
            {
              title: "火鍋料",
              menus: ["滷大腸", "三記魚餃", "蛋餃", "貢丸", "年糕"],
            },
            {
              title: "蔬菜類",
              menus: ["高麗菜", "金針菇", "芋頭", "香菇", "玉米筍"],
            },
          ],
        },
        {
          imgpath: "./images/img6.jpg",
          subclass: [
            { title: "副食", menus: ["白飯", "冬粉", "王子麵", "烏龍麵"] },
            {
              title: "飲品",
              menus: [
                "拿鐵 冰 / 熱",
                "美式 冰 / 熱",
                "可爾必思",
                "雪碧",
                "可樂",
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    total() {
      return this.datas.length;
    },
  },
  methods: {
    change(index) {
      index += this.active;
      this.active = (index + this.total) % this.total;
      this.background = this.datas[this.active].imgpath;
    },
  },
});

Vue.component("contactwith-tag", {
  template: `<div class="container" id="contact">
              <div class="wrapper clearfix">
                <div class="col-12">
                  <h1 class="title">{{title}}</h1>
                </div>
                <div class="wrap">
                  <div class="col-12 col-lg-6 map">
                    <iframe :src="map.src" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"/>
                  </div>
                  <div class="col-12 col-lg-6 content">
                    <div class="info">
                      <h2><img :src="infos[0].imgpath">{{infos[0].name}}<span> : </span></h2>
                      <p v-for="content in infos[0].contents">{{content}}</p>
                    </div>
                    <div class="info">
                      <h2><i :class="infos[1].class"></i>{{infos[1].name}}<span> : </span></h2>
                      <p>{{infos[1].content}}</p>
                    </div>
                    <div class="info">
                      <h2><i :class="infos[2].class[0]"></i>{{infos[2].name}}<span> : </span></h2>
                      <p>
                        {{infos[2].content[1]}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>`,
  data() {
    return {
      title: "聯絡方式",
      map: {
        src:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.0497203259815!2d121.220883214881!3d24.96442294723131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682231642f2d97%3A0xd324f4a844f04b42!2zMzIw5qGD5ZyS5biC5Lit5aOi5Y2A5paw55Sf6LevMzEx6JmfMg!5e0!3m2!1szh-TW!2stw!4v1586593202825!5m2!1szh-TW!2stw",
      },
      infos: [
        {
          imgpath: "./images/logo_s.png",
          name: "營業時間",
          contents: [
            "周三至周日",
            "11:30 a.m. - 14:30 p.m.",
            "17:30 p.m. - 21:30 p.m.",
          ],
        },
        {
          class: "fas fa-phone",
          name: "電話",
          content: "03-425-2070",
        },
        {
          class: ["fas fa-map-marker-alt", "fas fa-external-link-alt"],
          name: "地址",
          content: [
            "https://www.google.com/maps/place/320%E6%A1%83%E5%9C%92%E5%B8%82%E4%B8%AD%E5%A3%A2%E5%8D%80%E6%96%B0%E7%94%9F%E8%B7%AF311%E8%99%9F",
            "桃園市中壢區新生路311號2樓",
          ],
        },
      ],
    };
  },
});

Vue.component("footer-tag", {
  template: `<div class="container" id="footer">
              <div class="wrapper">
                <a href="javscript:;" :id="link.id"  v-show="status" v-scroll-to="{ el: '#root', easing:'linear' }" :class="{active:status}">{{link.name}}</a>
                <p>{{content[0]}}<br>{{content[1]}}<i class="far fa-copyright"></i>{{content[2]}}</p>
              </div>
            </div>`,
  data() {
    return {
      link: { id: "gotop", name: "Top" },
      content: ["貳樓友火鍋 2020 ", "Copyright ", " All Rights Reserved."],
      status: false,
      scrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let body = document.body;
      let documentElement = document.documentElement;
      let that = this;
      that.scrollTop = body.scrollTop
        ? body.scrollTop
        : documentElement.scrollTop;
      that.status = that.scrollTop > 400;
    });
  },
});
let nav = new Vue({
  el: "#root",
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    loadPage() {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
  mounted() {
    this.loadPage();
  },
});
