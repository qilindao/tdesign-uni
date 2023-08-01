<template>
	<view class="demo-rate">
		<view class="demo-rate__title">大尺寸 24</view>
		<t-rate v-model="value1" variant="filled" />
	</view>
	<view class="demo-rate">
		<view class="demo-rate__title">小尺寸 20</view>
		<t-rate v-model="value" variant="filled" size="20" />
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const value = ref(3);
	const value1 = ref(3);
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