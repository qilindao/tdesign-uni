<template>
	<view class="demo-rate custom-color">
		<view class="demo-rate__title">填充评分</view>
		<t-rate v-model="value1" variant="filled" allow-half :color="['#FFC51C', '#E8E8E8']" />
	</view>
	<view class="demo-rate">
		<view class="demo-rate__title">线描评分</view>
		<t-rate v-model="value" :icon="['star-filled', 'star'] " allow-half color="#00A870" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const value = ref(2);
	const value1 = ref(3);
</script>

<style scoped>
	.custom-color {
		--td-rate-selected-color: #f96102;
		--td-rate-unselected-color: #bbbbbb;
	}

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