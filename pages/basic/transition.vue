<template>
	<view class="demo">
		<view class="demo-title">Transition 过渡</view>
		<view class="demo-desc">过渡动画。</view>

		<TDemo title="01 组件类型" desc="基础示例">
			<view class="example">
				<t-transition :show="visible " class="block" :mode="mode" @click="handleAni">
					<text class="text">示例元素</text>
				</t-transition>
			</view>
			<view class="example-body">
				<t-button size="large" variant="outline" @click="handleClick('fade')" block
					theme="primary">淡隐淡出</t-button>
				<t-button size="large" variant="outline" @click="handleClick(['fade', 'slide-top'])" block
					theme="primary">由上至下</t-button>
				<t-button size="large" variant="outline" @click="handleClick(['fade', 'slide-right'])" block
					theme="primary">由右至左过</t-button>
				<t-button size="large" variant="outline" @click="handleClick(['fade', 'zoom-in'])" block
					theme="primary">由小到大过</t-button>
			</view>

		</TDemo>
	</view>
</template>

<script>
	import {
		defineComponent,
		ref
	} from "vue"
	import TDemo from '@/components/TDemo'
	export default defineComponent({
		name: "TransitionDemo",
		components: {
			TDemo
		},
		setup() {
			const visible = ref(true)
			const mode = ref('fade')

			const handleClick = (type) => {
				visible.value = !visible.value;
				mode.value = type
			}

			const handleAni = (e) => {
				console.log('handleAni', e)
				visible.value = !e.detail
			}

			return {
				visible,
				mode,
				handleClick,
				handleAni
			}
		}
	})
</script>

<style lang="less" scoped>
	.example {
		justify-content: center;
		align-items: center;
		height: 150px;
		background-color: #fff;
		display: flex;
	}

	.text {
		font-size: 14px;
		color: #fff;
	}

	.block {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		border-radius: 5px;
		text-align: center;
		background-color: #4cd964;
		box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.2);
	}

	.example-body {
		background-color: #fff;
		padding: 10px 20px;
		padding-bottom: 0px;

		.t-button {
			margin-bottom: 20rpx;
		}
	}
</style>