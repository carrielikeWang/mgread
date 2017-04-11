<template>
    <div class="footerbar">
        <ul class="nav-list">
            <li><a href="javascript:;">首页</a></li>
            <li><a href="javascript:;">男生</a></li>
            <li><a href="javascript:;">女生</a></li>
            <li><a href="javascript:;">出版</a></li>
            <li><a href="javascript:;">会员</a></li>
        </ul>

        <ul class="block-list">
            <!--<li><a href="http://wap.cmread.com/r/;jsessionid=B49A195C043330084B63EDB916D22C75.8ngFwlxGA.2.0?ln=126_482882__0_CPL1">极速版</a></li>
            <li><a href="http://wxpsmile.com/mgread">触屏版</a></li>
            <li><a href="http://wap.cmread.com/r/p/clientdlwap.jsp?vt=2&&dataSrcId=&sqId=KHD">客户端</a></li>
            <li><a href="http://wap.cmread.com/r/p/wechat.jsp?vt=2&&dataSrcId=&sqId=WX">微信</a></li>-->

            <li><a href="javascript:;">极速版</a></li>
            <li><a href="javascript:;" class="active">触屏版</a></li>
            <li><a href="javascript:;">客户端</a></li>
            <li><a href="javascript:;">微信</a></li>
        </ul>

        <p class="bottom-text">咪咕数字传媒有限公司(浙ICP备15004899号-1)</p>
    </div>
</template>

<script>
export default {
    name: "footerbar",
    props: [''],
    data(){
        return {
            
        }
    },
    
    methods: {

    }
}
</script>

<style scoped>
    .footerbar{
        padding: 10px 0 20px;
    }
    .nav-list{
        width: 83%;
        margin: 20px auto 0;
        display: -webkit-box;
        display: -webkit-flex;   
        display: flex;
        
    }
    .nav-list li{
        text-align: center;
        webkit-box-flex: 1;
        flex: 1;
    }
    .nav-list li a{
        font-size: 16px;
        color: #60666e;
        display: block;
    }

    .block-list{
        width: 62%;
        padding: 14px 19%;
        display: -webkit-box;
        display: -webkit-flex;   
        display: flex;
        position: relative;
    }
    .block-list li{
        text-align: center;
        webkit-box-flex: 1;
        flex: 1;
        border-right: 1px solid #e0e9ee;
    }
    .block-list li:last-child{
        border-right: 0;
    }

    .block-list li a{
        font-size: 12px;
        color: #a7cff2;
        display: block;
    }
    
    .block-list li a.active{
        color: #5396d1;
    }

    .block-list:before, .block-list:after{
        content: "";
        position: absolute;
        width: 16%;
        height: 1px;
        background: #e0e9ee;
        top: 24px;
    }
    .block-list:before{
        left: 3%;
    }
    .block-list:after{
        right: 3%;
    }

    .bottom-text{
        font-size: 12px;
        color: #aeaeae;
        text-align: center;
    }

    

    
</style>