<template>

	<view class="demo">
		<view class="demo-title">Loading 加载中</view>
		<view class="demo-desc">用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感，由一个或一组反馈动效组成。</view>
		<TDemo title="01 组件类型" desc="纯图标" padding>
			<view class="loading-container-flex">
				<t-loading theme="circular" size="40rpx" class="wrapper" />
				<t-loading theme="spinner" size="40rpx" class="wrapper" />
				<t-loading theme="dots" size="80rpx" class="wrapper" />
				<t-loading theme="custom" class="wrapper">
					<template #indicator>
						<t-image  width="100%" height="100%"
							src="https://cdc.cdn-go.cn/tdc/latest/images/tdesign.svg" />
					</template>

				</t-loading>
			</view>

		</TDemo>
		<TDemo desc="图标加文字横向" padding>
			<view class="loading-container-flex">
				<t-loading theme="circular" size="40rpx" text="加载中..." class="wrapper" />
				<t-loading theme="spinner" size="40rpx" text="加载中..." inheritColor class="wrapper" />
			</view>
		</TDemo>
		<TDemo desc="图标加文字竖向" padding>
			<div class="box">
				<t-loading theme="circular" size="40rpx" text="加载中" layout="vertical" class="wrapper" />
				<t-loading theme="spinner" size="40rpx" text="加载中" layout="vertical" class="wrapper" />
			</div>

		</TDemo>
		<TDemo desc="纯文字" padding>
			<t-loading :indicator="false" text="加载中..."></t-loading>
		</TDemo>
		<TDemo title="02 组件尺寸" desc="大尺寸" padding>
			<view class="loading-size-demo">
				<t-loading theme="circular" size="64rpx" text="加载中..." class="large" />

				<view class="demo-desc">中尺寸</view>

				<t-loading theme="circular" size="56rpx" text="加载中..." class="middle" />

				<view class="demo-desc">小尺寸</view>

				<t-loading theme="circular" size="48rpx" text="加载中..." />
			</view>

		</TDemo>
	</view>


</template>

<script>
	import {
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	export default defineComponent({
		name: "DemoLoading",
		components: {
			TDemo
		},
		setup() {}
	})
</script>

<style scoped>
	.loading-container-flex {
		display: flex;
		align-items: center;
		color: #000;
	}

	.wrapper {
		display: flex;
		margin-right: 40px;
	}

	.box {
		display: flex;
	}

	.large {
		--td-loading-text-font-size: 32rpx;
	}

	.middle {
		--td-loading-text-font-size: 28rpx;
	}

	.demo-desc {
		margin: 48rpx 0 32rpx;
	}
</style>