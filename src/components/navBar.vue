<template lang="html">
    <div class="container">
        <ul>
            <router-link :to="{path:'/'}" tag="li">
                <a href="#">首页</a>
            </router-link>
            <router-link :to="{path:'/personal'}" tag="li">
                <a href="#">个人中心</a>
            </router-link>
            <router-link :to="{path:'/router'}" tag="li">
                <a href="#">路由</a>
            </router-link>
            <router-link :to="{path:'/com'}" tag="li">
                <a href="#">组件</a>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default{
}
    

</script>

<style lang="css">
.container{
    width:100%;
    height:80px;
    background:black;
}
.container ul{
    margin:0;
    padding:0;
}
.container ul li{
    list-style:none;   
    float:left;
}
.container ul li a{
    display:inline-block;
    color:white;
    text-decoration: none;
    padding:0 30px;
    height:80px;
    line-height:80px;
}
.container ul li a:hover,.container ul li a:focus{
    color:red;
    background:gray;
}
.active{
    color:red;
    background:gray;
}
</style>