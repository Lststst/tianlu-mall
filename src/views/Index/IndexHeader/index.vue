<template>
  <div class="index-header">
    <div class="contain">
      <div class="contain-top">
        <div class="contain-top-logo" @click="()=>{ this.reload() }">
          <div class="logo1">{{title1}}</div>
          <div class="logo2">{{title2}}</div>
        </div>
        <div class="contain-top-search">
          <div class="search">
            <input type="text" v-model="searchValue" placeholder="请输入你所需要的内容"/>
            <button @click="handleSearch" >搜索</button>
          </div>
          <div class="hotWord" v-if="hotWord.length!==0">
            <span v-for="(item,index) in hotWord" :key="index">
              {{item}} |
            </span>
          </div>
        </div>
      </div>
      <div class="contain-bottom">
        <div class="contain-bottom-title">{{title}}</div>
        <div class="contain-bottom-goodsButton">
          <div v-for="(item,index) in goodsTypes" :key="index">
            <div 
            :class="{'goodsButton': true, 'goodsButtonSelect': selected === index}" 
            @click="()=>{ handleClick(item,index) }"
            >
              {{item}}
            </div>
          </div>
        </div>
        <div class="contain-bottom-other">
          <slot name="other"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHeader',
  inject: ['reload'],
  props:{
    goodsTypes: {
      type: Array,
      default: () => {
        return ['模板','组件','图片','图标','SDK']
      }
    },
    //
    title: {
      type: String,
      default: '天鹿市场分类'
    },
    title1: {
      type: String,
      default: ''
    },
    title2: {
      type: String,
      default: ''
    },
    handleChange: {
      type: Function,
    },
    hotWord: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data(){
    return {
      selected: '',
      searchValue: ''
    }
  },
  methods: {
    handleSearch(){
       console.log(this.searchValue,'searchValuesearchValue')
    },
    handleClick(which,index){
      this.selected = index;
      if(this.handleChange){
        this.handleChange(which,index)
      }
    }
  }
}
</script>
<style lang="scss" src='./index.scss' scoped />