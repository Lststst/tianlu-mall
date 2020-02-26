<template>
  <div class="header-contain">
    <div class="header-contain-left">
      <router-link to="/index">天鹿协同设计中心</router-link>
    </div>
    <div class="header-contain-right">
      <router-link to="/cart">
        <i class="el-icon-shopping-cart-full" :style="{paddingRight: '8px', fontSize: '20px' }" />购物车
      </router-link>
      <router-link to="/shop">我的店铺</router-link>
      <router-link to="/information">
        <i class="el-icon-bell" :style="{paddingRight: '8px', fontSize: '20px' }" />消息通知
      </router-link>
      <router-link to="/collect">
        <i class="el-icon-star-off" :style="{paddingRight: '8px', fontSize: '20px' }" />收藏夹
      </router-link>
      <el-dropdown trigger="click">
        <div class="el-dropdown-link">
          联系客服<i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>林林林(82490789@qq.com)</el-dropdown-item>
          <el-dropdown-item>林林林(82490789@qq.com)</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown trigger="click">
        <div class="el-dropdown-link">
          用户<i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown" class="userModal">
          <div class="userModal-top">
            <div class="userModal-left">
              头像
            </div>
            <div class="userModal-right">
              <p>账号管理|退出</p>
              <p>积分: XXX</p>
            </div>
          </div>
          <div class="userModal-bottom">
            查看你的专属权益
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data(){
    return {

    }
  }
}
</script>
<style lang="scss" src='./index.scss' scoped />