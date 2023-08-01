<template>
	<view class="demo tdesign-mobile-demo">
		<view class="demo-title">Layout 布局</view>
		<view class="demo-desc">以规则的网格阵列来指导和规范页面中的版面布局以及信息分布，提高界面内布局的一致性，节约成本。</view>
		<TDemo title="01 组件类型" desc="基础用法">
			<t-row>
				<t-col span="24">
					<view class="dark">col-24</view>
				</t-col>
			</t-row>
			<t-row>
				<t-col span="8">
					<view class="dark">col-8</view>
				</t-col>
				<t-col span="8">
					<view class="light">col-8</view>
				</t-col>
				<t-col span="8">
					<view class="dark">col-8</view>
				</t-col>
			</t-row>

			<t-row>
				<t-col span="4">
					<view class="dark">col-4</view>
				</t-col>
				<t-col span="16" offset="4">
					<view class="light">col-16 col-offset-4</view>
				</t-col>
			</t-row>

			<t-row>
				<t-col offset="12" span="12">
					<view class="dark">col-12 col-offset-12</view>
				</t-col>
			</t-row>
		</TDemo>
		<TDemo desc="在列元素之间增加间距">
			<t-row gutter="16">
				<t-col span="8">
					<view class="dark">col-8</view>
				</t-col>
				<t-col span="8">
					<view class="light">col-8</view>
				</t-col>
				<t-col span="8">
					<view class="dark">col-8</view>
				</t-col>
			</t-row>
		</TDemo>
	</view>
</template>

<script>
	import {
		ref,
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	export default defineComponent({
		name: "DemoCol",
		components: {
			TDemo
		},
		setup() {

			return {}
		}
	})
</script>
<style lang="less">
	.dark {
		background-color: #0052d9;
	}

	.light {
		background-color: #366ef4;
	}

	.dark,
	.light {
		background-clip: content-box;
		color: #fff;
		font-size: 28rpx;
		line-height: 96rpx;
		margin-bottom: 32rpx;
		text-align: center;
	}
</style>