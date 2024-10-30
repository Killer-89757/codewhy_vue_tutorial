<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @ShowNav="ShowNav" ref="dnb"/>
    <scroll class="content" ref="scroll" @scroll="Show_Scroll" :probe-type="3" :pull-up-load="true">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo" ref="detparam"/>
      <detail-comment-info :comment-info="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="goods_list"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import GoodsList from "components/content/goods/GoodsList";
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import {itemListenerMixin,backTopMixin} from "common/mixin"
  import {BACK_POSITION} from "common/const.js";
  import {mapActions} from 'vuex'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      Scroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        currentIndex: 0,
        themeTopYs: [],
      }
    },
    mixins: [itemListenerMixin,backTopMixin],
    destroyed() {
      this.$bus.$off('itmImgLoad', this.itemImgListener)
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        // 1.获取顶部的图片轮播数据
        // console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

        // 获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })

      getRecommend().then(res => {
        // console.log(res)
        this.recommends = res.data.list
      }, err => {
        console.log(err);
      })
    },
    methods: {
      ...mapActions(['addCart']),
      imageLoad() {
        this.$refs.scroll.refresh()
        this.themeTopYs = []
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.detparam.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.goods_list.$el.offsetTop);
        // console.log(this.themeTopYs);
      },
      ShowNav(index) {
        // console.log(index);
        // 点击商品数据显示位置
        this.PageHeight = -this.themeTopYs[index]
        // console.log(this.themeTopYs);
        this.$refs.scroll.scrollTo(0, this.PageHeight, 100)
      },
      Show_Scroll(position) {
        const positionY = -position.y
        // 图片滑动展示颜色(还有一种方法是将列表添加一个最大值，之后就不需要判断等于的情况了)
        for (let i = 0; i <= this.themeTopYs.length - 1; i++) {
          if (
            (this.currentIndex !== i &&
              positionY >= this.themeTopYs[i])
            &&
            (positionY < this.themeTopYs[i + 1] ||
              i === this.themeTopYs.length - 1)
          ) {
            this.currentIndex = i;
            this.$refs.dnb.$data.currentIndex = this.currentIndex;
          }
        }
        this.isShowBackTop = (positionY) > BACK_POSITION
      },
      addToCart() {
          const product = {}
          product.image = this.topImages[0];
          product.title = this.goods.title;
          product.desc = this.goods.desc;
          product.iid = this.iid;
          product.price = this.goods.realPrice;
          this.addCart(product).then(res => {
              this.$toast.show(res)
            }, err => {
              console.log(err);
          })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 1002;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 1003;
    background-color: #fff;
  }

  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 58px;
    left: 0;
    right: 0;
  }
</style>
