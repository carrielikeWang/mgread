<template>
    <div class="panel">
        <div class="panel-hd clearfix">
            <h3>{{title}}</h3>
            <span>更多</span>
        </div>
        <div class="panel-bd">
            <div class="reco clearfix">
                <div class="reco-left"><img :src=topImg alt=""></div>
                <div class="reco-right">
                    <h4>{{topTitle}}</h4>
                    <p class="reco-desc">作者：<span>{{topAuthor}}</span></p>
                    <p class="reco-content">{{topContent}}</p>
                </div>
                
            </div>
            <ul class="list">
                <li  v-for="item in books">
                    <span>{{item.category}}</span>
                    <span>{{item.name}}</span>                 
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "panel",
    props: ['title','topTitle','topAuthor','topContent','books','topImg'],
    data(){
        return {
            
        }
    },
    
    methods: {

    }
}
</script>

<style scoped>
    .panel{
        background-color: #fff; 
        margin-top: 10px;
    }
    .panel-hd, .panel-bd{
        padding: 12px 4.2%;
    }
    .panel-hd h3{
        float: left;
        font-size: 17px;
        font-weight: normal;
        color: #5396d5;
    }
    .panel-hd span{
        float: right;
        font-size: 15px;
        color: #b1b3bf;
        position: relative;
        padding-right: 8px;
    }
    .panel-hd span:after{
        content: ' ';
        display: block;
        width: 4px;
        height: 4px;
        background: #fff;
        border: 1px solid #b1b3bf;
        border-bottom: none;
        border-left: none;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        position: absolute;
        right: 0;
        top: 6px;
    }

    .reco{
        position: relative;
        min-height: 121px;
    }
    .reco .reco-left{
        float: left;
        width: 30%;
    }
    .reco .reco-left img{
        width: 100%;
    }
    .reco .reco-right{
        float: left;
        width: 70%;
        padding-left: 3%;
        box-sizing: border-box;
        text-align: left;
        
    }
    .reco .reco-right h4{
        font-size: 17px;
        font-weight: normal;
    }

    .reco .reco-right .reco-desc{
        font-size: 14px;
        color: #aeaeae;
        margin-top: 10px;
    }
    .reco .reco-right .reco-content{
        font-size: 15px;
        line-height: 24px;
        color: #aeaeae;
        margin-top: 10px;
        position: absolute;
        bottom: 0;
        left: 33%;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        height: 50px;
    }

    .list{
        margin-top: 10px;
    }
    .list li{
        font-size: 15px;
        height: 30px;
        line-height: 30px;
        text-align: left;
    }
    .list li span:first-child{
        color: #7e7e7e;
        position: relative;
        padding-right: 8px;
        margin-right: 6px;
    }

    .list li span:first-child:after{
        content: ' ';
        display: inline-block;
        width: 1px;
        height: 15px;
        background-color: #babcc7;
        position: absolute;
        top: 0;
        right: 0;
    }


</style>