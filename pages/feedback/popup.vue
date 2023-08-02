<template>

	<view class="demo">
		<view class="demo-title">Popup 弹出层</view>
		<view class="demo-desc">由其他控件触发，屏幕滑出或弹出一块自定义内容区域。</view>
		<TDemo title="01 组件类型" desc="基础弹出层" padding>
			<PopupBase />

		</TDemo>
		<TDemo title="02 组件示例" desc="应用示例" padding>
			<PopupWithTitle />
			<PopupCustomClose />
		</TDemo>
	</view>


</template>

<script>
	import {
		defineComponent,
		reactive,
		nextTick,
		ref
	} from "vue"
	import TDemo from '@/components/TDemo'
	import PopupBase from './components/PopupBase'
	import PopupWithTitle from './components/PopupWithTitle'
	import PopupCustomClose from './components/PopupCustomClose'
	export default defineComponent({
		name: "DemoPopup",
		components: {
			TDemo,
			PopupBase,
			PopupWithTitle,
			PopupCustomClose
		},
		setup() {

		}
	})
</script>

<style lang="less" scoped>
	page {
		background-color: #fff;
	}

	.popup-demo {
		padding: 0 16px;
		margin-bottom: 32rpx;

		.t-button {
			margin-bottom: 32rpx;
		}
	}

	.block {
		/*background: #fff;*/
		color: #333;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.block--top,
	.block--bottom {
		width: 100vw;
		height: 240px;
	}

	.block--left,
	.block--right {
		width: 280px;
		height: 100vh;
	}

	.block--center {
		width: 240px;
		height: 240px;
	}

	.wrapper+.wrapper {
		margin-top: 32rpx;
	}
</style>