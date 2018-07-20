<template lang="html">
<div>
    
    <div class="box1">
        <ul>
            <router-link :to="{path:'/router/route1/2'}" tag="li">
                <a href="#">路由一</a>
            </router-link>
                
            <router-link :to="{path:'/router/route2'}" tag="li">
                <a href="#">路由二</a>
            </router-link>                 
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</div>

</template>
<script>
export default{
    data(){
        return{}
    }
}

</script>

<style lang="css">
.box1{
    background:pink;
    height:100px;
    width:100px;
    border-radius:10px;
    margin-top:10px;
    margin-left:200px;
}
.box1 ul{
    margin:0;
    padding:0;
}
.box1 ul li{
    list-style:none;
}
.box1 ul li a{
    display:inline-block;
    color:white;
    text-decoration: none;
    padding:0 20px;
    height:45px;
    line-height:45px;
}
.box1 ul li a:hover,.box1 ul li a:focus{
    color:yellow;
    background:wheet;
}
</style>