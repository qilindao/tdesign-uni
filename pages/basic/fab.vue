<template>
	<view class="demo tdesign-mobile-demo">
		<view class="demo-title">Fab 悬浮按钮</view>
		<view class="demo-desc">当功能使用图标即可表意清楚时，可使用纯图标悬浮按钮，例如：添加、发布</view>
		<TDemo title="01 组件类型" desc="纯图标悬浮按钮">
			<view class="wrapper">
				<t-button v-bind="btnProps" @tap="handleChange('base')">
					纯图标悬浮按钮
				</t-button>
			</view>
		</TDemo>
		<TDemo desc="图标加文字悬浮按钮">
			<view class="wrapper">
				<t-button v-bind="btnProps" @tap="handleChange('advance')">
					图标加文字悬浮按钮
				</t-button>
			</view>
		</TDemo>
	</view>
    <FabBaseDemo v-if="type === 'base'" />
    <FabAdvanceDemo v-if="type === 'advance'" />
</template>

<script>
	import {
		ref,
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	import FabBaseDemo from "./components/FabBaseDemo"
	import FabAdvanceDemo from "./components/FabAdvanceDemo"
	export default defineComponent({
		name: "DemoFab",
		components: {
			TDemo,
			FabBaseDemo,
			FabAdvanceDemo
		},
		setup() {
			const type = ref('base');
			const handleChange = (t) => (type.value = t);
			const btnProps = {
				block: true,
				size: 'large',
				theme: 'primary',
				variant: 'outline',
			};
			return {
				type,
				handleChange,
				btnProps
			}
		}
	})
</script>
<style lang="less" scoped>
	page{
		background-color: #fff;
	}
.tdesign-mobile-demo {
  background-color: #fff;
  min-height: 100vh;
  box-sizing: border-box;
}
.wrapper{
	padding: 0 20rpx;
}
</style>