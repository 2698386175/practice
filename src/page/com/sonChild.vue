<template lang="html">
    <div class="sonc">
        <ul>
            <li v-for="(item,index) in lists">{{item}}</li>
        </ul>
    </div>
</template>
<script>
export default{
    props:{
        lists:{
            type:Array
        }
    }
}

</script>

<style lang="css">
.sonc{
    color:black;
    margin-top:150px;
}
</style>