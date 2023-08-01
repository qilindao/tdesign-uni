<template>
	<view class="demo-rate">
		<view class="demo-rate__title">自定义评分数量</view>
		<!-- 自定义评分数量，设置属性：count-->
		<t-rate v-model="value" :count="3" variant="filled" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const value = ref(2);
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
		width: 240rpx;
	}

	.demo-rate__transparent {
		background-color: transparent;
		padding-left: 32rpx;
		border: 0;
	}
</style>