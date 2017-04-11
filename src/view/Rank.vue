<template>
    <div class="rank">
      <!--头部-->
        <HeaderBar title="分类首页"></HeaderBar>
      <!--主体-->
        <div class="main">
            <div class="cat-panel" v-for="item in categoryList" key="item.id">
                <div class="panel-hd"><h2>{{item.title}}</h2></div>
                <div class="panel-bd">
                    
                </div>
            </div>

        </div>

      <!--底部-->
        <FooterBar></FooterBar>

    </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';


export default {
    name: 'rank',
    data () {
      return {
        categoryList: [
            {
                id: 1,
                title: '男生'
            },
            {
                id: 2,
                title: '女生'
            },
            {
                id: 3,
                title: '出版'
            }
        ]
      }
    },
    components: {
      HeaderBar,FooterBar
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
