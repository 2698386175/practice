<template lang="html">
    <div class="">
         <s-n-child>
            <div slot="header">
                我是传入的头部
            </div>
            <div slot="footer">
                我是传入的底部
            </div>
         </s-n-child>
    </div>
</template>
<script>
import sNChild from '@/page/com/sNChild'
export default{
    components:{
        sNChild
    }
}

</script>

<style lang="css">

</style>