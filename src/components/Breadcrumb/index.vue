<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) in breadcrumb" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    breadcrumb: {
      type: Array,
      default: () => {
        return ['全部分类'];
      }
    }
  }
}
</script>

<style lang="scss" src='./index.scss' scoped />