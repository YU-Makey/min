<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h1>商品设置</h1>
        <el-button type="primary" @click="app">返回</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu active-text-color="skyblue" background-color="#333" class="el-menu-vertical-demo" default-active="2"
            text-color="#fff" router>
                <el-menu-item index="/add">添加商品</el-menu-item>
                <el-menu-item index="/user">商品审核</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { useRouter,useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const app = () => {
  router.push('/home')
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

.el-aside {
  height: 100vh;
  background-color: #333;
}
</style>