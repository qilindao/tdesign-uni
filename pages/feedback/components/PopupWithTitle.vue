<template>
	<view class="popup-demo">
		<t-button block variant="outline" theme="primary" size="large" @click="visible = true">底部弹出层-带标题及操作</t-button>
		<t-popup v-model="visible" placement="bottom">
			<view class="block">
				<view class="header">
					<view class="btn btn--cancel" @click="onHide">取消</view>
					<view class="title">标题文字</view>
					<view class="btn btn--confirm" @click="onHide">确定</view>
				</view>
			</view>
		</t-popup>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const visible = ref(false);
	const onHide = () => (visible.value = false);
</script>

<style lang="less" scoped>

	.block {
		width: 100vw;
		height: 240px;
		background: #fff;
		border-top-left-radius: 16rpx;
		border-top-right-radius: 16rpx;
	}

	.header {
		display: flex;
		align-items: center;
		height: 116rpx;
	}

	.title {
		flex: 1;
		text-align: center;
		font-weight: 600;
		font-size: 18px;
	}

	.btn {
		font-size: 16px;
		padding: 16px;
	}

	.btn--cancel {
		color: rgba(0, 0, 0, 0.6);
	}

	.btn--confirm {
		color: #0052d9;
	}
</style>