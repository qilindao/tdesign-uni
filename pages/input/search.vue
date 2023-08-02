<template>
	<view class="input-example">
		<view class="demo-title">Search 搜索框</view>
		<view class="demo-desc">用于用户输入搜索信息，并进行页面内容搜索。</view>
		<TDemo title="01 组件类型" desc="基础搜索框">
			<view class="example-search">
				<t-search v-model="value" placeholder="搜索预设文案" @change="onChange" @blur="onBlur" @clear="onClear"
					@focus="onFocus" @submit="onSubmit" @action-click="onActionClick" />
			</view>

		</TDemo>
		<TDemo desc="获取焦点后显示取消按钮">
			<view class="example-search">
				<t-search placeholder="搜索预设文案" :center="true" :focus="true" action="取消" @change="onChange"></t-search>
			</view>
		</TDemo>
		<TDemo title="02 组件样式" desc="搜索框形状">
			<view class="example-search">
				<t-search placeholder="搜索预设文案" />
			</view>

			<view class="example-search">
				<t-search placeholder="搜索预设文案" shape="round" />
			</view>
		</TDemo>
		<TDemo title="03 组件状态" desc="默认状态其他对齐方式">
			<view class="example-search">
				<t-search v-model="value" center placeholder=" 搜索预设文案" @change="onChange" />
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
		name: "DemoInputSearch",
		components: {
			TDemo,
		},
		setup() {
			const onChange = (val) => {
				console.log('change: ', val);
			};
			const onBlur = () => {
				console.log('blur');
			};
			const onClear = () => {
				console.log('clear');
			};
			const onFocus = () => {
				console.log('focus');
			};

			const onSubmit = () => {
				console.log('submit');
			};
			const onActionClick = () => {
				console.log('action-click');
			};
			const value = ref('');
			return {
				value,
				onChange,
				onBlur,
				onClear,
				onFocus,
				onSubmit,
				onActionClick
			}
		}
	})
</script>

<style scoped>
	.example-search {
		background-color: #fff;
		padding: 16rpx 32rpx;
	}

	.example-search:not(:last-child) {
		margin-bottom: 32rpx;
	}
</style>