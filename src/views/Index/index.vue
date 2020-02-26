<template>
  <div class="header">
    <index-header 
      title1="天鹿市场" 
      title2="天鹿的SuperStore" 
      :handleChange="handleChange" 
      :title="title" 
      :hotWord="hotWord"
    >
      <template #other>
        <!-- other -->
      </template>
    </index-header>
    <div class="main">
      <div class="main-left" :style="{padding: '10px 0 10px 10px'}">
        <div class="main-left-top">
          <Breadcrumb  :breadcrumb="breadcrumb" />
          <div class="searchList">
            <span v-for="(item,index) in searchList" :key="index">
              {{item}}
            </span>
          </div>
        </div>
        <GoodsDetailBar :currentTypes="currentTypes" @getSelectItem="handleSelectItem"/>
      </div>
      <div class="main-right">213</div>
    </div>
  </div>
</template>

<script>
  import IndexHeader from './IndexHeader';
  import Breadcrumb from '../../components/Breadcrumb';
  import GoodsDetailBar from './GoodsDetailBar';

  export default {
    components: {
      IndexHeader,
      Breadcrumb,
      GoodsDetailBar
    },
    computed: {
    },
    data() {
    return {
        title: '天鹿市场分类',
        breadcrumb:['全部分类','天鹿市场'],
        hotWord: ['模板','组件','图片','图标','SDK'],
        currentTypes: '',
        searchList: []
      }
    },
    methods: {
      //Tabs选择触发的函数
      handleChange(which,currentTypes){
        this.title = `${which}市场分类`;
        this.currentTypes = `${currentTypes+1}`;
        this.breadcrumb.splice(1,1,`${which}市场`);
      },
      handleSelectItem(list){
        this.searchList = [...list];
      }
    }
  }
</script>

<style lang="scss" src='./index.scss' scoped />