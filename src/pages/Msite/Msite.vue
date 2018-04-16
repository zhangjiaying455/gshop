<template>
  <div>
    <div id="img_content">
      <img class="img_header" src="../../images/init_21.jpg">
    </div>
    <div class="content">
      <div class="main">
        <div class="epet_search">
          <div class="adress_content">
            <a class="add_href">
              <span class="s_dog">狗狗</span>
              <span class="c89">|</span>
              <span class="my_place">重庆</span>
              <i class="i1"></i>
            </a>
            <input  class='search_ipt' type="search" placeholder="搜索商品和品牌" disabled="disabled"/>
            <div class="message_img">
                 <img src="../../images/message.png">
            </div>
        </div>
        </div>
        <div ref="nav" class="find_nav">
        <div class="ul_content">
          <ul>
            <li>
              <a>首页</a>
            </li>
            <li>
              <a>狗狗主粮</a>
            </li>
            <li>
              <a>零食</a>
            </li>
            <li>
              <a>医疗保健</a>
            </li>
            <li>
              <a>玩具</a>
            </li>
            <li>
              <a>外出</a>
            </li>
            <li>
              <a>服饰城</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
    <nav class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#">
              <img src="../../images/12.jpg">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="../../images/13.jpg">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="../../images/14.jpg">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="../../images/15.jpg">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="../../images/16.jpg">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="../../images/17.jpg">
            </a>
          </div>
        </div>
      </div>
      <div class="swiper-pagination">
        <span class="swiper-pagination-bullet spano"></span>
        <span class="swiper-pagination-bullet spano"></span>
        <span class="swiper-pagination-bullet spano"></span>
        <span class="swiper-pagination-bullet spano"></span>
        <span class="swiper-pagination-bullet spano"></span>
        <span class="swiper-pagination-bullet spano"></span>
      </div>

    </nav>
  </div>


</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    created() {
      this.$nextTick(() => {
        new BScroll(this.$refs.nav, {scrollX: true})

      })

    },
    mounted() {
      new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
     *
       margin 0
       padding 0
      body
       width 100%
       height 100%
       background-color white
       position relative
      .img_content
         width: 100%
         height 53px
       .img_header
           width: 100%
           height: 100%
           display block
     .main
       width: 100%
       height:86px
      .epet_search
        width 100%
        height 50px
        margin-left 10px
        position relative
       .adress_content
         width: 355px
         height: 41px
        .add_href
          display inline-block
          width: 25%
          height: 19px
          text-decoration: none
          position absolute
          top: 18px
         .s_dog
           font-size: 14px
         .c89
           font-size: 14px
         .my_place
           font-size: 13px
         .i1
           float right
           width: 0
           height: 0
           margin-top 9px
           margin-left: 2px
           vertical-align: middle
           border-top: 4px solid
           border-right: 4px solid transparent
           border-left: 4px solid transparent
           color: gray
        .search_ipt
          position absolute
          top:15px
          left:85px
          width:61%
          height: 25px
          background: #e9e9e9;
          border-radius 4px
          color: #bcbcbc;
          text-indent: 10px;
          font-size: 13px
          background-image  url("../../images/search-icon.png")
          background-repeat no-repeat
          background-size 11px
          background-position-x 95%
          background-position-y 50%
        .message_img
         width: 10%
         height:25px
         position absolute
         right: 10px
         top: 16px

         .message_img img
           width:60%
           margin-left 10px
      .find_nav
         width: 100%;
         height: 35px;
         min-width: 320px;
         box-sizing border-box
         overflow hidden
       .ul_content
         width: 140%
         height: 36px
         white-space nowrap
        .ul_content li
           display inline-block
           float: left
           width 74.5px
           height: 36px
         .ul_content li a
           display: block;
           width: 100%;
           height: 100%;
           line-height: 36px;
           font-size: 14px;
           text-align: center
           color: #666
      .banner  /*轮播*/
         width 100%
         height 100%
       .swiper-container
          width 100%
          height 100%
        .swiper-wrapper
          width 100%
          height 100%
         .swiper-slide
           width 100%
           height 100%
         a
            display block
            width 100%
            height 100%
           img
            width 100%
            height 100%
         spano
           display block
           width 100%
           text-align center
           font-size 13px
           color #666
         .swiper-pagination
            position absolute
            left:140px
            top: 240px
            >span.swiper-pagination-bullet-active
              background #02a774
</style>
