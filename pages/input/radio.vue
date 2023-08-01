<template>
	<view class="input-example">
		<view class="demo-title">Radio 单选框</view>
		<view class="demo-desc">用于在预设的一组选项中执行单项选择，并呈现选择结果。</view>
		<TDemo title="01 组件类型" desc="纵向单选框">
			<t-radio-group @change="groupChangeFn" v-model="curRadio" :options="options" />
		</TDemo>
		<TDemo desc="横向单选框">
			<t-radio-group class="boxRadioWrap" v-model="curRadio" borderless @change="groupChangeFn">
				<t-radio :block="false" name="radio" :value="1" label="单选标题" />
				<t-radio :block="false" name="radio" :value="2" label="单选标题" />
				<t-radio :block="false" name="radio" :value="3" label="单选标题" />
			</t-radio-group>
		</TDemo>

		<TDemo title="02 组件状态" desc="单选框状态">
			<t-radio-group v-model="radio1" disabled :options="statusOptions" class="radio-group-demo space" />
		</TDemo>

		<TDemo title="03 组件样式" desc="勾选样式">
			<t-radio :default-checked="true" icon="line" label="单选" />

			<view class="gutter" style="height: 32rpx"></view>

			<t-radio :default-checked="true" icon="dot" label="单选" />
		</TDemo>
		<TDemo desc="勾选显示位置">
			<t-radio label="单选" default-checked />

			<view style=" height: 32rpx;"></view>

			<t-radio label="单选" placement="right" default-checked />
		</TDemo>
		<TDemo desc="非通栏单选样式">
			<t-radio-group class="theme-card" v-model="radio2" @change="groupChangeFn">
				<t-radio name="radio3" value="1" label="单选" />
				<t-radio name="radio3" value="2" label="单选" />
				<t-radio name="radio3" value="4" label="单选标题多行单选标题多行单选标题多行单选标题多行单选标题多行" />
			</t-radio-group>
		</TDemo>

		<TDemo title="04 特殊样式" desc="纵向卡片单选框">
			<RadioSpecial />
		</TDemo>
	</view>
</template>

<script>
	import {
		ref,
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	import RadioSpecial from "./components/RadioSpecial"

	export default defineComponent({
		name: "DemoRadio",
		components: {
			TDemo,
			RadioSpecial
		},
		setup() {
			const curRadio = ref('3');
			const options = ref([{
					value: 0,
					label: '单选'
				},
				{
					value: 1,
					label: '单选'
				},
				{
					value: 2,
					label: '单选单选单选单选单选单选单选单选单选单选单选单选单选单选'
				},
				{
					value: 3,
					label: '单选',
					content: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
				},
			]);
			const groupChangeFn = (value, context) => {
				console.log(value, context);
			};

			const radio1 = ref('1');

			const statusOptions = [{
					value: '1',
					label: '选项禁用-已选',
				},
				{
					value: '2',
					label: '选项禁用-默认',
				},
			];


			const radio2 = ref('1');

			return {
				curRadio,
				options,
				groupChangeFn,
				radio1,
				statusOptions,
				radio2
			}
		}
	})
</script>

<style scoped>
	.t-radio-padding {
		padding: 24rpx 32rpx !important;
	}

	.t-radio-demo {
		margin-top: 16px;
	}

	.disable-border {
		display: none;
	}

	.boxRadioWrap {
		padding: 32rpx;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
	}

	.theme-card {
		border-radius: 24rpx;
		margin: 32rpx;
		overflow: hidden;
	}
</style>