<template>
	<view class="popup-demo">

		<t-button v-for="p in placement" :key="p" block variant="outline" theme="primary" size="large"
			@click="onClick(p)">
			{{ p.text }}
		</t-button>
		<t-popup v-model="visible" :closeOnOverlayClick="true" :closeBtn="true"
			:placement="currentPlacement.value || 'top'">
			<view :class="['block',`block--${currentPlacement.value}`]">{{currentPlacement.text}}</view>
		</t-popup>
	</view>
</template>

<script>
	import {
		nextTick,
		reactive,
		ref,
		defineComponent
	} from "vue"
	export default defineComponent({
		name: 'PopupBaseDemo',
		options: {
			styleIsolation: 'shared'
		},
		setup() {
			const placement = reactive([{
					value: 'top',
					text: '顶部弹出'
				},
				{
					value: 'left',
					text: '左侧弹出'
				},
				{
					value: 'center',
					text: '中间弹出'
				},
				{
					value: 'bottom',
					text: '底部弹出'
				},
				{
					value: 'right',
					text: '右侧弹出'
				},
			]);

			const currentPlacement = ref({});
			const visible = ref(false)
			const onClick = (item) => {
				currentPlacement.value = item;
				nextTick(() => (visible.value = true));
			};
			return {
				visible,
				placement,
				currentPlacement,
				onClick
			}
		}
	})
</script>

<style lang="less" scoped>
	.popup-demo {
		padding: 0 16px;

		.t-button {
			margin-bottom: 16px;
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
			width: 380rpx;
			height: 100vh;
		}

		.block--center {
			width: 240px;
			height: 240px;
		}
	}
</style>
>