<template>
	<view class="demo-rate">
		<view class="demo-rate__title">带描述评分</view>
		<!-- 自定义带描述评分，设置属性：texts -->
		<t-rate v-model="value1" show-text :texts="texts" variant="filled" />
	</view>
	<view class="demo-rate">
		<view class="demo-rate__title">带描述评分</view>
		<!-- 带描述评分，设置属性：showText-->
		<t-rate v-model="value2" show-text variant="filled" />
	</view>

	<view class="demo-rate">
		<view class="demo-rate__title">带描述评分</view>
		<t-rate v-model="value3" show-text variant="filled" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const value1 = ref(3);
	const value2 = ref(5);
	const value3 = ref(0);
	const texts = ref(['很差', '差', '一般', '好评', '优秀']);
</script>

<style scoped>
	.demo-rate {
		background-color: #fff;

		height: 96rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 32rpx;
		border-bottom: solid 1rpx #f0f0f0;
		border-top: solid 1rpx #f0f0f0;
		margin-top: 32rpx;
		margin-bottom: 32rpx;
	}

	.demo-rate__title {
		width: 200rpx;
	}

	.demo-rate__transparent {
		background-color: transparent;
		padding-left: 32rpx;
		border: 0;
	}
</style>