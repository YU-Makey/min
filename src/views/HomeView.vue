<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1>商品加购</h1>
        <el-button type="primary" @click="tz">设置</el-button>
      </el-header>
      <el-main>
        <el-input v-model="input" placeholder="搜索" />
        <el-button type="primary">搜索</el-button>
      <!-- 商品 -->
      <div class="box" style="display: flex; flex-wrap:wrap">
       <div class="box1" v-for="item,index in store.state.data">
         <img src="/商品图片/ck.jpeg" alt="" v-if="item.region == '0'">
         <img src="/商品图片/ss.webp" alt="" v-if="item.region == '1'">
         <img src="/商品图片/tk.webp" alt="" v-if="item.region == '2'">
         <p @click="ok"> {{item.name}} </p>
         <p> ￥{{item.price}} </p>
       </div>
      </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const route = useRoute()
const router = useRouter()
const input = ref('')
const tz = ()=>{
  router.push('/about')
}
const ok=()=>{
  console.log(store.state.data);
}
</script>


<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 60px;
  background-color: #333;
  line-height: 60px;

  h1 {
    float: left;
    margin-left: 20px;
    color: white;
  }

  .el-button {
    float: right;
    margin-right: 20px;
    margin-top: 15px;
  }
}
.el-main{
  width: 100%;
  
  .el-input{
    width: 300px;
    margin-left: 600px;
  }
  .el-button{
    margin-left: 10px;
  }
}
</style>