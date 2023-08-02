<template>
	<view class="input-example">
		<view class="demo-title">Stepper 步进器</view>
		<view class="demo-desc">用于数量的增减。</view>
		<TDemo title="01 组件类型" desc="基础步进器">
			<view class="stepper-example">
				<t-stepper v-model="number" theme="filled" />
			</view>
		</TDemo>
		<TDemo title="02 组件状态" desc="最大最小状态">
			<view class="stepper-example_one">
				<t-stepper default-value="0" theme="filled" />
				<t-stepper v-model="numberOne" theme="filled" :step="1" :min="0" :max="10" @overlimit="onOverlimit"
					@change="onChange" @blur="onBlur" />
				<t-stepper default-value="999" theme="filled" :max="999" />
			</view>
		</TDemo>
		<TDemo desc="禁用状态">
			<view class="stepper-example">
				<t-stepper disabled theme="filled" />
			</view>
		</TDemo>
		<TDemo title="03 组件样式" desc="步进器样式">
			<view class="stepper-example_one">
				<t-stepper default-value="3" theme="filled" />
				<t-stepper default-value="3" theme="outline" />
				<t-stepper default-value="3" />
			</view>
		</TDemo>

		<TDemo desc="步进器尺寸">
			<view class="stepper-example_one">
				<t-stepper v-model="value" size="large" theme="filled" @change="handleChange" />
				<t-stepper default-value="3" :max="99" theme="filled" />
				<t-stepper default-value="3" size="small" theme="filled" />
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
		name: "DemoStepper",
		components: {
			TDemo,
		},
		setup() {
			const number = ref(3);

			const numberOne = ref(0);
			const onChange = ($event) => {
				console.log(`change to ${$event}`);
			};
			const onBlur = ($event) => {
				console.log(`blur to ${$event}`);
			};
			const onOverlimit = ($type) => {
				console.log(`onOverlimit ${$type}`);
			};
			const value = ref(3);

			const handleChange = ($event) => {
				console.log(`change to ${$event}`);
			};

			return {
				number,
				numberOne,
				onChange,
				onBlur,
				onOverlimit,
				value,
				handleChange
			}
		}
	})
</script>

<style scoped>
	.stepper-example {
		padding: 32rpx;
		background-color: #fff;
	}

	.stepper-example_one {
		padding: 32rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 64rpx;
		background-color: #fff;
	}
</style>