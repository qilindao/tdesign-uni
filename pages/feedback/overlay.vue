<template>

	<view class="demo">
		<view class="demo-title">Overlay 遮罩层</view>
		<view class="demo-desc">通过遮罩层，可以强调部分内容</view>
		<TDemo title="01 组件类型" desc="基础遮罩层" padding>
			<t-overlay :visible="visible" @click="handleOverlayClick" />

			<t-button block size="large" theme="primary" variant="outline" @tap="handleClick">基础用法</t-button>

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
		name: "DemoOverlay",
		components: {
			TDemo
		},
		setup() {
			const visible = ref(false);
			const handleClick = () => {
				visible.value = true;
			}
			const handleOverlayClick = (e) => {
				visible.value=false
			}
			return {
				visible,
				handleClick,
				handleOverlayClick
			}
		}
	})
</script>

<style scoped>
	page {
		background-color: #fff;
	}
</style>