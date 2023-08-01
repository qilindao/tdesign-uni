<template>
	<view class="input-example">
		<view class="demo-title">Textarea 多行文本框</view>
		<view class="demo-desc">用于多行文本信息输入。</view>
		<TDemo title="01 组件类型" desc="基础多行文本框">
			<t-textarea class="external-class" placeholder="请输入文字" :disableDefaultPadding="true" />

		</TDemo>
		<TDemo desc="带标题多行文本框">
			<t-textarea class="external-class" label="标签文字" placeholder="请输入文字" :disableDefaultPadding="true" />
		</TDemo>
		<TDemo desc="自动增高多行文本框">
			<t-textarea label="标签文字" placeholder="请输入文字" :disableDefaultPadding="true" autosize />

		</TDemo>
		<TDemo desc="设置字符数限制">
			<t-textarea class="external-class" label="标签文字" placeholder="设置最大字符个数" :maxlength="200"
				:disableDefaultPadding="true" indicator />
		</TDemo>
		<TDemo desc="设置字符数限制">
			<t-textarea class="external-class" label="标签文字" placeholder="设置最大字符个数，一个汉字表示两个字符" :maxcharacter="10"
				:disableDefaultPadding="true" indicator :allowInputOverMax="true" />
		</TDemo>
		<TDemo title="02 组件状态" desc="禁用状态">
			<t-textarea class="external-class" label="标签文字" placeholder="请输入文字" value="不可编辑文字"
				:disableDefaultPadding="true" disabled />
		</TDemo>

		<TDemo title="03 组件样式" desc="卡片样式">
			<view class="textarea-example">
				<t-textarea class="external-class" label="标签文字" placeholder="请输入文字" maxlength="500" indicator
					:disableDefaultPadding="true" style="border-radius: 18rpx;" />
			</view>

		</TDemo>
		<TDemo title="04 特殊样式" desc="标签外置输入框">
			<view class="textarea-demo">
				<text class="textarea-demo__label">标签文字</text>
				<t-textarea class="external-demo" placeholder="请输入文字" bordered maxlength="100"
					:disableDefaultPadding="true" indicator style="height: 248rpx" />
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
		name: "DemoTextarea",
		components: {
			TDemo
		},
		setup() {

			return {}
		}
	})
</script>

<style scoped>
	.external-class {
		height: 256rpx;
	}

	.textarea-example {
		margin: 0 32rpx;
		background-color: #fff;
		border-radius: 18rpx;
	}

	.textarea-demo {
		padding: 32rpx 32rpx 48rpx;
		background-color: #fff;
	}

	.external-demo {
		padding-top: 24rpx !important;
		padding-bottom: 24rpx !important;
	}

	.textarea-demo__label {
		display: block;
		color: rgba(0, 0, 0, 0.9);
		font-size: 24rpx;
		line-height: 40rpx;
		padding-bottom: 16rpx;
	}
</style>