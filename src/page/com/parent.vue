<template lang="html">
    <div class="parent">
        <alert @to-close="closeAlert" v-show="isShow"></alert>
    </div>
</template>
<script>
import alert from '@/page/com/alert'
export default{
    components:{
        alert
    },
    data(){
        return{
            isShow:true
        }
    },
    methods:{
        closeAlert(id){
            this.isShow=false;
        }
    }
        
}

</script>

<style lang="css">
.parent{
    color:green;
    margin-top:150px;
    margin-left:200px;
}
</style>