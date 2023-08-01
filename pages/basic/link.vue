<template>
	<view class="demo">
		<view class="demo-title">Link 链接</view>
		<view class="demo-desc">文字超链接用于跳转一个新页面，如当前项目跳转，友情链接等。</view>
		<TDemo title="01 组件类型" desc="基础文字链接">
			<view class="link-example">
				<t-link size="small" theme="primary" content="跳转链接" hover />
				<t-link size="small" content="跳转链接" hover />
			</view>
		</TDemo>
		<TDemo desc="下划线文字链接">
			<view class="link-example">
				<t-link size="small" theme="primary" content="跳转链接" underline hover />
				<t-link size="small" content="跳转链接" underline hover />
			</view>
		</TDemo>
		<TDemo desc="前置图标文字链接">
			<view class="link-example">
				<t-link size="small" theme="primary" content="跳转链接" prefixIcon="link" hover />
				<t-link size="small" content="跳转链接" prefixIcon="link" hover />
			</view>
		</TDemo>
		<TDemo desc="后置图标文字链接">
			<view class="link-example">
				<t-link size="small" theme="primary" content="跳转链接" suffixIcon="jump" hover />
				<t-link size="small" content="跳转链接" suffixIcon="jump" hover />
			</view>

		</TDemo>
		<TDemo title="02 组件状态" desc="不同主题">
			<view class="link-example">
				<t-link size="small" theme="primary" content="跳转链接" suffixIcon="jump" hover />
				<t-link size="small" content="跳转链接" suffixIcon="jump" hover />
				<t-link size="small" theme="danger" content="跳转链接" suffixIcon="jump" hover />
			</view>
			<view class="link-example">
				<t-link size="small" theme="warning" content="跳转链接" suffixIcon="jump" hover />
				<t-link size="small" theme="success" content="跳转链接" suffixIcon="jump" hover />
			</view>

		</TDemo>
		<TDemo desc="禁用状态">
			<view class="link-example">
				<t-link href="/pages/index/index" size="small" theme="primary" content="跳转链接" suffixIcon="jump" disabled
					hover />
				<t-link size="small" content="跳转链接" suffixIcon="jump" disabled />
				<t-link size="small" theme="danger" content="跳转链接" suffixIcon="jump" disabled />
			</view>
			<view class="link-example">
				<t-link size="small" theme="warning" content="跳转链接" suffixIcon="jump" disabled />
				<t-link size="small" theme="success" content="跳转链接" suffixIcon="jump" disabled />
			</view>

		</TDemo>
		<TDemo title="03 组件样式" desc="链接尺寸">
			<view class="link-example">
				<t-link size="small" theme="primary" content="S号链接" suffixIcon="jump" hover />
				<t-link theme="primary" content="M号链接" suffixIcon="jump" hover />
				<t-link size="large" theme="primary" content="L号链接" suffixIcon="jump" hover />
			</view>

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
		name: "DemoLink",
		components: {
			TDemo
		},
		setup() {

			return {}
		}
	})
</script>

<style lang="less">
	.link-example {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		height: 96rpx;
		background-color: #fff;
	}
</style>