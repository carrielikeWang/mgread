<template>
    <div class="headerbar">
        <a href="javascript:window.history.back();" class="header-back" style="background: url(../../static/images/icon2016one.png) no-repeat 15px -501px; background-size: 80px auto;"></a>
        <div class="header-title">
            <h1>{{title}}</h1>
        </div>
        <a href="javascript:;" @click="go('/search')" class="header-search" style="background: url(../../static/images/icon2016one.png) no-repeat 16px -559px; background-size: 80px auto;"></a>
        <a href="javascript:;" @click="go('/')" class="header-home" style="background: url(../../static/images/icon2016one.png) no-repeat 16px -605px; background-size: 80px auto;"></a>
    </div>
</template>

<script>
import Router from 'vue-router';
var router = new Router();

export default {
    name: "headerbar",
    props: ['title'],
    data(){
        return {
            
        }
    },
    
    methods: {
      go(page){
        router.push({path: page});
      }
    }
}
</script>

<style scoped>
    .headerbar{
        height: 46px;
        line-height: 46px;
        background-color: #f7f7f7;
        border-bottom: 1px #c4c4c4 solid;
        position: relative;
        font-size: 17px;
        text-align: center;
        display: -webkit-box;
        display: -webkit-flex;        
        display: flex;
    }
    .header-title{
        webkit-box-flex: 1;
        flex: 1;
    }
    .header-title h1{
        font-size: 19px;
        font-weight: 400;
        color: #0a111a;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .header-back{
        display: inline-block;
        width: 106px;
        height: 46px;
    }
    .header-search{
        display: inline-block;
        width: 53px;
        height: 46px;
    }
    .header-home{
        display: inline-block;
        width: 53px;
        height: 46px;
    }
    
</style>