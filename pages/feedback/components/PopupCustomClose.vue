<template>
	<view class="popup-demo">
		<t-button block variant="outline" theme="primary" size="large" @click="visible = true">居中弹出层-带自定义关闭按钮</t-button>
		<t-popup v-model="visible" placement="center">
			<view class="block">
				<t-icon class="close-btn" name="close-circle" size="32" color="#fff" @click="onClose" />
			</view>
		</t-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const visible = ref(false);
	const onClose = () => (visible.value = false);
</script>

<style lang="less">

	.block {
		position: relative;
		width: 240px;
		height: 240px;
		background: #fff;
		border-radius: 16rpx;
	}

	.close-btn {
		position: absolute;
		left: 50%;
		margin-left: -32rpx;
		bottom: calc(-1 * (48rpx + 64rpx));
	}

	.wrapper {
		margin: 32rpx;
		display: block;
	}
</style>