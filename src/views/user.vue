import { reactive } from 'vue';
<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" label="#" />
        <el-table-column prop="name" label="商品名称" />
        <el-table-column prop="price" label="商品价格" />
        <el-table-column prop="address" label="状态">
            <template #default="scope">
                <div>
                    <el-switch v-model="scope.row.lev" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                        :active-value="1" :inactive-value="0" />
                </div>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button size="small" type="danger" @click="del(index)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { ref,reactive } from 'vue'
import { useRoute,useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore()
const route = useRoute()
const router = useRouter()
const tableData = store.state.data
const del = (i) =>{
    store.commit('del',i)
}
</script>

<style lang="scss" scoped></style>