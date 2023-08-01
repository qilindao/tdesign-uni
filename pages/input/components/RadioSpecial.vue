<template>
	<t-radio-group v-model:value="radio">
		<view v-for="(item, index) in 3" :key="index" :class="`card ${radio == index ? 'card--active' : ''}`">
			<t-icon v-if="radio == index" name="check" class="card__icon" />
			<t-radio :value="index" label=" " content="描述信息描述信息描述信息描述信息描述信息" icon="none" borderless />
		</view>
	</t-radio-group>

	<view class="tdesign-mobile-demo-block__summary" style="margin-left: 16px; margin-top: 24px">横向卡片单选框</view>

	<t-radio-group v-model:value="radio1" class="horizontal-box">
		<view v-for="(item, index) in 3" :key="index" :class="`card ${radio1 == index ? 'card--active' : ''}`">
			<t-icon v-if="radio1 == index" name="check" class="card__icon" />
			<t-radio :value="index" label="单选" icon="none" borderless />
		</view>
	</t-radio-group>
</template>

<script>
	import {
		ref,
		defineComponent
	} from 'vue';
	export default defineComponent({
		name: "DemoRadioSpecial",
		options: {
			styleIsolation: 'shared',
		},
		setup() {
			const radio = ref(0);
			const radio1 = ref(0);

			return {
				radio,
				radio1,
			}
		}
	});
</script>
<style lang="less" scoped>
	.card {
		position: relative;
		margin: 32rpx;
		border-radius: 12rpx;
		overflow: hidden;
		box-sizing: border-box;
		border: 3rpx solid #fff;
	}

	.card--active {
		border-color: #0052d9;
	}

	.card--active::after {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 0;
		border: 14px solid #0052d9;
		border-bottom-color: transparent;
		border-right-color: transparent;
	}

	.card__icon {
		color: #fff;
		position: absolute;
		left: 1.5px;
		top: 1.5px;
		z-index: 1;
	}

	/* 横向布局 */
	.horizontal-box {
		width: calc(100% - 64rpx);
		display: flex;
		align-items: center;
		margin: 32rpx;
	}

	.horizontal-box .card {
		flex: 1;
		margin: 0;
	}

	.horizontal-box .card+.card {
		margin-left: 24rpx;
	}

	.horizontal-box .card::after {
		border-width: 12px;
	}

	.horizontal-box .card__icon {
		font-size: 12px;
	}
</style>