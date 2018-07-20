<template lang="html">
    <div class="">
        <button type="button" @click="change(1)">组件1</button>
        <button type="button" @click="change(2)">组件2</button>
        <button type="button" @click="toast()">出现消息提示框</button>
        <p :is="current"></p>
    </div>
</template>
<script>
import isChild1 from '@/page/com/isChild1'
import isChild2 from '@/page/com/isChild2'
import { Toast } from 'mint-ui'
export default{
    data(){
        return{
            current:"isChild1"
        }
    },
    components:{
        isChild1,
        isChild2
    },
    methods:{
      change(index){
          if(index == 1){
              this.current="isChild1"
          }else{
              this.current="isChild2"
          }
      },
      toast(){
          Toast({
            message: '弹出消息框',
            position: 'bottom',
            duration: 2000
            });
      }
  }
}

</script>

<style lang="css">

</style>