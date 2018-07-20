<template lang="html">
<div class="route1">
    我是router里面的route1页面
    {{$route.params}}
</div>
</template>
<script>
export default{
    mounted(){
        console.log(this.$route.params)
    }
    
}

</script>

<style lang="css">
.route1{
    width:300px;
    height:100px;
    background:orange;
    color:white;
    margin-left:100px;
}
</style>