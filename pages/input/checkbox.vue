<template>
	<view class="input-example">
		<view class="demo-title">Checkbox 多选框</view>
		<view class="demo-desc">用于预设的一组选项中执行多项选择，并呈现选择结果。</view>
		<TDemo title="01 组件类型" desc="纵向多选框">
			<t-checkbox-group v-model:value="current" :options="options" @change="checkboxGroupChange" />
		</TDemo>
		<TDemo desc="横向多选框">
			<t-checkbox-group class="box" v-model="demoCheckboxMax" :default-value="demoCheckboxMax"
				@change="checkboxGroupChange">
				<t-checkbox :block="false" value="checkbox1" label="多选标题" />
				<t-checkbox :block="false" value="checkbox2" label="多选标题" />
				<t-checkbox :block="false" value="checkbox3" label="上限四字" />
			</t-checkbox-group>
		</TDemo>
		<TDemo desc="带全选多选框">
			<CheckboxAll />
		</TDemo>
		<TDemo title="02 组件状态" desc="多选框状态">
			<t-checkbox-group :default-value="['checkbox1']" disabled>
				<t-checkbox value="checkbox1" label="选项禁用-已选" />
				<t-checkbox value="checkbox2" label="选项禁用-默认" />
			</t-checkbox-group>
		</TDemo>
		<TDemo title="03 组件样式" desc="勾选样式">
			<t-checkbox label="多选" icon="line" default-checked />
			<view style="height: 16px"></view>
			<t-checkbox label="多选" icon="rectangle" default-checked />
			<view style="height: 16px"></view>
			<t-checkbox value="checkbox1" label="图片图标"
				:icon="['https://tdesign.gtimg.com/miniprogram/checkbox-checked.png', 'https://tdesign.gtimg.com/miniprogram/checkbox.png']" />
		</TDemo>
		<TDemo desc="勾选显示位置">
			<t-checkbox value="1" label="多选" default-checked />
			<view style="height: 16px" />
			<t-checkbox value="2" label="多选" placement="right" default-checked />
		</TDemo>
		<TDemo desc="非通栏多选样式">
			<t-checkbox-group class="theme-card" :default-value="['1', '2']">
				<t-checkbox value="1" label="多选" />
				<t-checkbox value="2" label="多选" />
				<t-checkbox value="3" label="多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行多选标题" />
			</t-checkbox-group>
		</TDemo>
		<TDemo title="04 组件规格" desc="多选框尺寸规格">
			<CheckboxSpecial />
		</TDemo>
	</view>
</template>

<script>
	import {
		ref,
		watch,
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	import CheckboxAll from "./components/CheckboxAll"
	import CheckboxSpecial from "./components/CheckboxSpecial"

	export default defineComponent({
		name: "DemoCheckbox",
		components: {
			TDemo,
			CheckboxAll,
			CheckboxSpecial
		},
		setup() {

			const current = ref(['checkbox1', 'checkbox2']);
			const options = ref([{
					label: '多选',
					value: 'checkbox1'
				},
				{
					label: '多选',
					value: 'checkbox2'
				},
				{
					label: '多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行多选标题多行',
					value: 'checkbox3',
					maxLabelRow: 2,
				},
				{
					label: '多选',
					value: 'checkbox4',
					content: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息',
					maxContentRow: 2,
				},
			]);

			watch(
				() => current.value,
				(val) => {
					console.log('current:', val);
				},
			);

			const checkboxGroupChange = (value, context) => {
				console.log('value:', value);
				console.log('Event:', context);
			};

			const demoCheckboxMax = ref(['checkbox1', 'checkbox2']);

			return {
				current,
				options,
				checkboxGroupChange,
				demoCheckboxMax
			}
		}
	})
</script>

<style lang="less" scoped>
	.box {
		padding: 16px;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
	}

	.theme-card {
		border-radius: 12px;
		margin: 0 16px;
		overflow: hidden;
	}
</style>