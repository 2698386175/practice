<template lang="html">
    <div class="">
        <slot-child>
            <p>传送插槽数据</p>
        </slot-child>
    </div>
</template>
<script>
import slotChild from '@/page/com/slotChild'
export default{
    components:{
        slotChild
    }
}

</script>

<style lang="css">

</style>