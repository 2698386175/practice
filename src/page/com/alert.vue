<template lang="html">
    <div class="alert">
        <p @click="close()">X</p>
    </div>
</template>
<script>

export default{
    methods:{
        close(){
            this.$emit('to-close',1);
        }
    }
}

</script>

<style lang="css">
.alert{
    width:150px;
    height:100px;
    border:1px solid black;
    border-radius:5px;
    position:relative;
}
.alert p{
    width:20px;
    height:20px;
    line-height:20px;
    background:#e0e0e0;
    border:1px solid black;
    border-radius:50%;
    position:absolute;
    top:-30px;
    left:-10px;

}
</style>