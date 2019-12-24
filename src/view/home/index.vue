<template>
	<div>
		<!-- 顶部图片 -->
		<div class="head-img">
		</div>
		<!-- 个人资料 -->
		<div class="header">
			<flexbox >
				<flexbox-item :span="3/4">
					<p class="user-name">力量训练</p>
				</flexbox-item>
				<flexbox-item>
						<img src="http://viptail.image.alimmdn.com/files/official_web/img/cq001-f.jpg" alt="" class="user-photo">
				</flexbox-item>
			</flexbox>
			<flexbox style="margin-top:20px">
				<flexbox-item>
					<span class="normal-size">0</span>关注
				</flexbox-item>
				<flexbox-item>
					<span class="normal-size">0</span>粉丝
				</flexbox-item>
				<flexbox-item>
					<span class="normal-size">0</span>故事
				</flexbox-item>
				<flexbox-item>
					 <span style="font-size:15px">来自火星</span>
				</flexbox-item>
			</flexbox>
			</div>
			<!-- 订单 -->
			<div class="user-order">
				<flexbox>
					<flexbox-item>
						<div class="flex-demo">
							<img src="../../../static/img/order.png" alt="" class="order-png">
							<p class="normal-size">我的订单</p>
						</div>
					</flexbox-item>
					<flexbox-item>
						<div class="flex-demo">
							<img src="../../../static/img/comment.png" alt="" class="order-png">
							<p class="normal-size">待评价订单</p>
						</div>
					</flexbox-item>
				</flexbox>
		</div>
		<!-- 我的钱包 -->
		<!-- 我的日常管理 -->
	</div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
	name:'home',
	components: {
    Flexbox,
    FlexboxItem
  }
}
</script>
<style lang="scss" scoped>
  .head-img{
		height:200px;
    background: url(http://viptail.image.alimmdn.com/files/official_web/img/gz002-f.jpg);
    background-size: 100% 200px;
		background-repeat: no-repeat;
	}
	.header{
		padding: 10px 20px;
		.user-name{
			font-size: $big-size;
			font-weight:$font-weight;
		}
		.user-photo{
			border-radius: 50%;
      height: 70px;
			width: 70px;
		}
		.normal-size{
			font-size: 25px;
			font-weight: $font-weight;
		}
	}
	.user-order{
		height: 100px;
		background: linear-gradient(to right,#efc663,$topic-color);
		line-height: 50px;
		.order-png{
			height: 40px;
		}
		.vux-flexbox .vux-flexbox-item{
			text-align: center
		}
		.vux-flexbox .vux-flexbox-item:first-child{
			border-right: 1px solid #fff
		}
	}
	
</style>

