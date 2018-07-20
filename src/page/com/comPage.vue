<template lang="html">
    <div class="box2">
        <ul>
            <router-link :to="{path:'/com/base'}" tag="li">
                <a href="#">组建基本使用</a>
            </router-link>
                
            <router-link :to="{path:'/com/son'}" tag="li">
                <a href="#">父组件传参给子组件</a>
            </router-link>  

            <router-link :to="{path:'/com/parent'}" tag="li">
                <a href="#">子组件传参给父组件</a>
            </router-link>   

            <router-link :to="{path:'/com/is'}" tag="li">
                <a href="#">使用is动态加载不同组件</a>
            </router-link>       

            <router-link :to="{path:'/com/slot'}" tag="li">
                <a href="#">slot插槽功能</a>
            </router-link> 

            <router-link :to="{path:'/com/slotName'}" tag="li">
                <a href="#">具名slot插槽功能</a>
            </router-link>          
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default{   
}

</script>

<style lang="css">
.box2{
    width:300px;
    height:100px; 
    margin-left:100px;
    margin-top:20px;
}
.box2 ul{
    margin:0;
    padding:0;
}
.box2 ul li{
    list-style:none;
}
.box2 ul li a{
    display:inline-block;
    text-decoration: none;
    height:45px;
    line-height:45px;
}
.box2 ul li a:hover,.box2 ul li a:focus{
    color:yellow;
    background:#333;
    width:100%;
}

</style>