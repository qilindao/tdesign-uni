<template>
	<view class="input-example">
		<view class="demo-title">Rate 评分</view>
		<view class="demo-desc">用于对某行为/事物进行打分。</view>
		<TDemo title="01 基础类型">
			<view class="demo-desc">实心评分</view>
			<RateBase />
			<view class="demo-desc">自定义评分</view>
			<RateCustom />
			<view class="demo-desc">自定义评分数量</view>
			<RateCount />
			<view class="demo-desc">带描述评分</view>
			<RateShowText />
		</TDemo>
		<TDemo title="02 组件状态">
			<RateAction />
		</TDemo>
		<TDemo title="03 组件样式">
			<view class="demo-desc">评分大小</view>
			<RateSize />
			<view class="demo-desc">设置评分颜色</view>
			<RateColor />
		</TDemo>
		<TDemo title="04 特殊样式" desc="竖向带描述评分">
			<RateSpecial />
		</TDemo>
	</view>
</template>

<script>
	import {
		defineComponent,
		ref
	} from "vue"
	import TDemo from '@/components/TDemo'
	import RateBase from './components/RateBase'
	import RateShowText from './components/RateShowText'
	import RateCustom from './components/RateCustom'
	import RateCount from './components/RateCount'
	import RateAction from './components/RateAction'
	import RateSize from './components/RateSize'
	import RateColor from './components/RateColor'
	import RateSpecial from './components/RateSpecial'
	export default defineComponent({
		name: 'RateDemo',
		components: {
			TDemo,
			RateBase,
			RateShowText,
			RateCustom,
			RateCount,
			RateAction,
			RateSize,
			RateColor,
			RateSpecial
		},
		setup() {


			return {}
		}
	})
</script>

<style lang="less" scoped>
</style>