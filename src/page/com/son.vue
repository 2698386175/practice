<template lang="html">
    <div class="son">
        <son-child :lists="listData"></son-child>
    </div>
</template>
<script>
import sonChild from '@/page/com/sonChild'
export default{
    components:{
        sonChild
    },
    data(){
        return{
            listData:[1,2,3,4,5]
        }
    }
    
}

</script>

<style lang="css">
.son{
    color:black;
    width:200px;
    height:200px;
    background:green;
    margin-top:150px;
}
</style>