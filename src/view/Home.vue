<template>
    <div class="home">
      <!--头部-->
        <header class="home-header">
            <div class="header-content clearfix">
                <a  href="javascript:;" class="header-left" style="background: url(../../static/images/icon2016.png) no-repeat 15px 25px; background-size: 83px auto;">书架</a>
                <div class="header-center" style="background: url(../../static/images/icon2016.png) no-repeat 50% -27px; background-size: 84px auto;"><h1>咪咕阅读</h1></div>
                <a href="javascript:;" class="header-search" style="background: url(../../static/images/icon2016.png) no-repeat 0 -91px; background-size: 84px auto;"></a>
                <a href="javascript:;" class="header-login">登录</a>
            </div>
        </header>
      <!--主体-->
        <div class="home-section">
          <!--导航-->
            <nav class="top-nav-list">
                <a href="javascript:;">
                  <img src="../../static/images/nav_cb.png" alt="">
                  <p>出版</p>
                </a>
                <a href="javascript:;">
                  <img src="../../static/images/nav_boy.png" alt="">
                  <p>男生</p>
                </a>
                <a href="javascript:;">
                  <img src="../../static/images/nav_girl.png" alt="">
                  <p>女生</p>
                </a>
                <a href="javascript:;">
                  <img src="../../static/images/nav_member.png" alt="">
                  <p>会员</p>
                </a>
            </nav>
            <nav class="top-nav-list">
                <a href="javascript:;" @click="go('/rank')">
                  <img src="../../static/images/nav_class.png" alt="">
                  <p>分类</p>
                </a>
                <a href="javascript:;">
                  <img src="../../static/images/nav_rank.png" alt="">
                  <p>排行</p>
                </a>
                <a href="javascript:;">
                  <img src="../../static/images/nav_free.png" alt="">
                  <p>免费</p>
                </a>
                <a href="javascript:;">
                  <img src="../../static/images/nav_find.png" alt="">
                  <p>发现</p>
                </a>
            </nav>

            <Panel v-for="item in list" key="item.id" :title="item.title" 
                  :topTitle="item.topTitle"
                  :topImg="item.topImg"
                  :topAuthor="item.topAuthor"
                  :topContent="item.topContent"
                  :books="item.books"
            
            ></Panel>

          <!--底部-->
            <FooterBar></FooterBar>
        </div>


    </div>
</template>

<script>
import Router from 'vue-router';
var router = new Router();

// 引入子组件
import Panel from '../components/Panel';
import FooterBar from '../components/FooterBar';


export default {
    name: 'home',
    data () {
      return {
        list: [
          {
            id: 1,
            title: '重磅推荐',
            topTitle: '龙魂特工',
            topAuthor: '权掌天下',
            topImg: '../../static/images/cover180240.jpg',
            topContent: '他是超级特工，也是黑暗界的大法官，更是让人闻风丧胆的佣兵王者',
            books: [
              {
                  name: '刻道',
                  category: '文学小说'
              },
              {
                  name: '克苏鲁神话',
                  category: '文学小说'
              },
              {
                  name: '洛克菲勒自传',
                  category: '文史传记'
              }
              

            ]
            
          },
          {
            id: 2,
            title: '原创爽文',
            topTitle: '十里乡村：香间追美神医',
            topAuthor: '老村长',
            topContent: '周小艺是十里八村唯一的男丁，男人都出去打工了，他在家乡混的风生他在家乡混的风生他在家乡混的风生他在家乡混的风生',
            topImg: '../../static/images/cover180240 (1).jpg',
            books: [
              {
                  name: '特种兵房客：逆袭俏千金',
                  category: '现代都市'
              },
              {
                  name: '兵王回村：携美共同致富',
                  category: '现代都市'
              },
              {
                  name: '精品好书立即推：至尊儒圣',
                  category: '玄幻奇幻'
              }
              

            ]
          }
        ]
      }
    },
    components: {
      Panel,FooterBar
    },
    methods: {
      go(page){
        router.push({path: page});
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*固定头部*/
    .home-header{
      height: 63px;
      line-height: 63px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
    }
    .header-content{
        background-color: #66aff3;
        color: #fff;
        height: 63px;
        line-height: 63px;
    }
    .header-content a, .header-content div{
        color: #fff;
        float: left;
    }
    .header-left{
        width: 25%;
        height: 43px;
        line-height: 49px;
        font-size: 17px;
        padding: 10px 1px 10px 20px;
        text-align: center;
        position: relative;
    }
    .header-left:after{
        content: ' ';
        display: block;
        position: absolute;
        top: 11px;
        right: 0px;
        width: 1px;
        height: 43px;
        background-color: #93c7f7;
        margin: 0 16px 0 0;
    }

    .header-center{
        width: 40%;
        height: 63px;
    }
    .header-center h1{
        position: absolute;
        left: -999em;
        overflow: hidden;
    }

    .header-search{
      width: 42px;
      height: 63px;
    }
    .header-login{
        width: 61px;
        font-size: 14px;
        text-align: center;
    }
/*主体*/
    .home-section{
        margin: 63px 0 0 0;
        overflow-x: hidden;
        overflow-y: auto;
    }
/*导航*/
    .top-nav-list{
        background-color: #fff;
        color: #5b5147;
        display: flex;
    }
    .top-nav-list a{
        flex: 1;
        padding: 16px 0 6px;
        text-align: center;
        border-right: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
    }
    .top-nav-list a img{
      width: 32%;
    }
    .top-nav-list a p{
      font-size: 13px;
      margin-top: 5px;
    }

    



</style>
