<template>
  <div class="goodsDetailBar">
    <div class="goodsTypeItem" v-for="(item,index) in showGoodsDetail" :key="index">
      <div class="item-left">
        {{item.title}}
      </div>
      <div class="item-right">
        <span 
          :class="{selectedSpan: sub.selected}" 
          v-for="(sub,indexs) in item.subTitle" 
          :key="indexs" 
          @click="handDetailClick(item.title,sub.title)"
        >
          {{sub.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsDetailBar',
    props: {
      currentTypes: {
        type: String,
        default: ''
      }
    },
    computed: {
      showGoodsDetail() {
        this.goodsDetail.forEach(item => {
          item.subTitle.forEach(items => {
            if(items.title === '全部'){
              items.selected = true;
            }else{
              items.selected = false;
            }
          })
        });
        this.$emit('getSelectItem',[]);
        const tempARR = [...this.goodsDetail];
        if(this.currentTypes === '2'){
          return tempARR.slice(0,3);
        }else if(this.currentTypes === '3'){
          return tempARR.slice(0,3).concat(tempARR[4]);
        }else if(this.currentTypes === '4'){
          return tempARR.slice(0,4);
        }
        return this.goodsDetail;
      }
    },
    data(){
      return {
        goodsDetail: [
          {
            title: '设备终端',
            subTitle: [
              {title: '全部',selected: true},
              {title: '网页',selected: false},
              {title: '手机',selected: false},
              {title: '平板',selected: false},
            ],
          },
          {
            title: '开发框架',
            subTitle: [
              {title: '全部',selected: true},
              {title: 'BootStrap',selected: false},
              {title: 'Element',selected: false},
              {title: 'Vue',selected: false},
              {title: 'Wechat',selected: false},
            ]
          },
          {
            title: '行业领域',
            subTitle: [
              {title: '全部',selected: true},
              {title: '数据监控系统',selected: false},
              {title: '订单管理系统',selected: false},
              {title: '项目管理系统',selected: false},
              {title: '应用管理系统',selected: false},
              {title: '设备管理系统',selected: false},
            ]
          },
          {
            title: '图标类型',
            subTitle: [
              {title: '全部',selected: true},
              {title: '线型图标',selected: false},
              {title: '面型图标',selected: false},
              {title: '单色图标',selected: false},
              {title: '多色图标',selected: false},
            ]
          },
          {
            title: '图片类型',
            subTitle: [
              {title: '全部',selected: true},
              {title: '广告设计',selected: false},
              {title: 'UI设计',selected: false},
              {title: '插画配图',selected: false},
              {title: '摄影',selected: false},
              {title: '招聘海报',selected: false},
              {title: '背景图片',selected: false},
            ]
          }
        ]
      }
    },
    methods: {
      handDetailClick(key1,key2){
        this.goodsDetail.forEach(item=>{
          item.subTitle.forEach(items=>{
            if(item.title === key1 && items.title === key2){
              if(items.title !== '全部'){
                item.subTitle[0].selected = false;
                items.selected = !items.selected;
              }else{
                item.subTitle[0].selected = true;
              }
            }
          })
        });
        const list = [];
        this.goodsDetail.forEach(item=>{
          item.subTitle.forEach(items=>{
            if(items.selected === true && items.title !== '全部'){
               list.push(items.title)
            }
          })
        });
        this.$emit('getSelectItem',list)
      }
    }
  }
</script>
<style lang="scss" src='./index.scss' scoped />