<template>
	<view class="demo">
		<view class="demo-title">Divider 分割线</view>
		<view class="demo-desc">用于分割、组织、细化有一定逻辑的组织元素内容和页面结构。</view>
		<TDemo title="01 组件类型" desc="水平分割线">
			<t-divider />

			<view class="divider-demo__title">带文字水平分割线</view>

			<t-divider content="文字信息" align="left" />
			<t-divider content="文字信息" />
			<t-divider content="文字信息" align="right" />

			<view class="divider-demo__title">垂直分割线</view>

			<view class="divider-wrapper">
				<text class="demo-6__text-color">文字信息</text>
				<t-divider layout="vertical" />
				<text class="demo-6__text-color">文字信息</text>
				<t-divider layout="vertical" />
				<text class="demo-6__text-color">文字信息</text>
			</view>
		</TDemo>
		<TDemo title="02 组件状态" desc="虚线样式">
			<t-divider dashed />
			<t-divider dashed content="文字信息" align="left" />
			<t-divider dashed content="文字信息" />
			<t-divider dashed content="文字信息" align="right" />
		</TDemo>
	</view>
</template>

<script>
	import {
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	export default defineComponent({
		name: "DemoDivider",
		components: {
			TDemo,
		},
		setup() {}
	})
</script>

<style scoped>
	page{
		background-color: #fff;
	}

	.divider-demo__title {
		font-size: 28rpx;
		color: rgba(0, 0, 0, 0.6);
		padding: 16rpx 32rpx;
		line-height: 40rpx;
	}

	.divider-wrapper {
		display: flex;
		align-items: center;
		font-size: 28rpx;
		color: rgba(0, 0, 0, 0.9);
		padding-left: 32rpx;
	}
</style>