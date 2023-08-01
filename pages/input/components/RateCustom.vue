<template>
	<view class="demo-rate">
		<view class="demo-rate__title">自定义评分</view>
		<t-rate v-model="value" icon="thumb-up" @change="changeValue" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const changeValue = (val) => {
		console.log('current value is', val);
	};
	const value = ref(3);
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