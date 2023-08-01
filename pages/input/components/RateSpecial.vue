<template>
	<view class="demo-rate">
		<view class="rate-wrapper">
			<t-rate v-model="value" size="30" variant="filled" :texts="texts" />
		</view>
		<view class="desc desc--{{value > 3 ? 'active' : ''}}">{{texts[value - 1]}}</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const value = ref(4);
	const texts = ref(['非常糟糕', '有些糟糕', '可以尝试', '可以前往', '推荐前往']);
</script>

<style scoped>
	.demo-rate {
		background-color: #fff;
		padding: 32rpx;
		border-bottom: solid 1rpx #f0f0f0;
		border-top: solid 1rpx #f0f0f0;
		margin-top: 32rpx;
		margin-bottom: 32rpx;
	}

	.rate-wrapper {
		display: flex;
		justify-content: center;
	}

	.desc {
		text-align: center;
		margin-top: 24rpx;
	}

	.desc--active {
		color: #ED7B2F;
		font-weight: 600;
	}
</style>