<template>
    <div>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="商品名称" prop="name" placeholder="请选择商品名称">
                <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="商品图片" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择商品图片">
                    <el-option :label="item.label" :value="item.value" v-for="item, index in list" />
                </el-select>
            </el-form-item>
            <el-form-item label="商品价格" prop="price" placeholder="请选择商品价格">
                <el-input v-model="ruleForm.price" />
            </el-form-item>
            <el-form-item label="商品类型" prop="type">
                <el-radio-group v-model="ruleForm.type">
                    <el-radio :label="item.label"  v-for="item, index in list" />
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="add">确定添加</el-button>
                <el-button type="primary">再加一个</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup>

import axios from 'axios'
import { ref, reactive } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { useStore } from 'vuex'
const list = ref([])
const store = useStore()
const route = useRoute()
const router = useRouter()

const ruleForm = reactive({
    name: '',
    region: '',
    price: '',
    type: ''
})
const rules = reactive({
    name: [
        { required: true, message: '请输入商品名称', trigger: 'blur' },
    ],
    price: [
        { required: true, message: '请输入商品价格', trigger: 'blur' },
    ],
})
axios.get('type.json').then(res => {
    console.log(res);
    list.value = res.data
})
const add = () => {
   
    store.commit('add', ruleForm)
}
</script>

<style lang="scss" scoped>
.el-input {
    width: 300px;
}
</style>