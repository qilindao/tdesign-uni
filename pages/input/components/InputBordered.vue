<template>
	<view class="input-border-example">
		<view class="input-example__label"> 标签文字 </view>
		<t-input style="border: 2rpx solid rgba(220,220,220,1);border-radius: 12rpx;" placeholder="请输入文字" suffixIcon="error-circle-filled" :borderless="true">

		</t-input>
	</view>
</template>

<script>
</script>

<style lang="less">
.input-border-example {
  --td-input-vertical-padding: 24rpx;

  background-color: #fff;
  padding: 32rpx 32rpx 16rpx;
}

.input-example__label {
  color: rgba(0, 0, 0, 0.9);
  font-size: 24rpx;
  line-height: 40rpx;
  margin: 0 8rpx 16rpx;
}
</style>