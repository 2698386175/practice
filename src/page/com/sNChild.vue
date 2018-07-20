<template lang="html">
    <div class="">
        <slot name="header">没有头部时显示</slot>
        <div class="content">
            我是子组件中的内容
        </div>
        <slot name="footer">没有底部时显示</slot>
    </div>
</template>
<script>

export default{
}

</script>

<style lang="css">

</style>