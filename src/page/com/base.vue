<template lang="html">
    <div class="base1">
        <p>1,import引入子组件</p>
        <p>2,在componets中注册</p>
        <p>3,在模板中调用</p>
        <child1></child1>
    </div>
</template>
<script>
import child1 from '@/page/com/child1'
export default{
    components:{
        child1
    }
}

</script>

<style lang="css">
.base1{
    color:black;
    width:200px;
    height:200px;
    background:yellow;
    margin-top:50px;
}
</style>