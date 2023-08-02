<template>
	<view class="demo">
		<view class="demo-title">Image 图片</view>
		<view class="demo-desc">用于展示效果，主要为上下左右居中裁切、拉伸、平铺等方式。</view>
		<TDemo title="01 组件类型">
			<view class="tr">
				<view class="col">
					<view class="text">裁切</view>
					<t-image :src="imageSrc" mode="aspectFill" width="72" height="72" />
				</view>
				<view class="col">
					<view class="text">适应高</view>
					<t-image :src="imageSrc" mode="heightFix" width="72" height="72" />
				</view>
				<view class="col">
					<view class="text">拉伸</view>
					<t-image :src="imageSrc" width="72" height="72" />
				</view>
			</view>

			<view class="tr">
				<view class="col">
					<view class="text">方形</view>
					<t-image :src="imageSrc" mode="aspectFill" width="72" height="72" />
				</view>
				<view class="col">
					<view class="text">圆角方形</view>
					<t-image :src="imageSrc" width="72" height="72" shape="round" />
				</view>
				<view class="col">
					<view class="text">圆形</view>
					<t-image :src="imageSrc" width="72" height="72" shape="circle" />
				</view>
			</view>
		</TDemo>

		<TDemo title="02 组件状态">
			<view class="tr">
				<view class="col">
					<view class="text">加载默认提示</view>
					<t-image shape="round" width="72" height="72" />
				</view>
				<view class="col">
					<view class="text">加载自定义提示</view>
					<t-image shape="round" loading="slot" width="72" height="72">
						<template #loading>
							<t-loading slot="loading" theme="circular" size="40rpx" loading />
						</template>

					</t-image>
				</view>
			</view>

			<view class="tr">
				<view class="col">
					<view class="text">失败默认提示</view>
					<t-image shape="round" src="x" width="72" height="72" />
				</view>
				<view class="col">
					<view class="text">失败自定义提示</view>
					<t-image src="x" shape="round" error="slot" width="72" height="72">
						<template #error>
							<text class="error-tips" slot="error">加载失败</text>
						</template>
					</t-image>
				</view>
			</view>

		</TDemo>
	</view>

</template>

<script>
	import {
		defineComponent,
		ref
	} from "vue"
	import TDemo from '@/components/TDemo'
	export default defineComponent({
		name: "DemoImage",
		components: {
			TDemo,
		},
		setup() {
			const imageSrc = ref('https://tdesign.gtimg.com/miniprogram/images/image1.jpeg');
			return {
				imageSrc
			}
		}
	})
</script>

<style lang="less" scoped>
	page {
		background: #fff;
	}

	.title {
		margin: 0rpx 32rpx;
		padding-top: 48rpx;
		font-size: 44rpx;
		font-weight: bold;
		line-height: 64rpx;
	}

	.desc {
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		margin-left: 32rpx;
		margin-right: 32rpx;
		color: #999;
		font-size: 26rpx;
		line-height: 36rpx;
	}

	.row {
		display: flex;
		align-items: flex-end;
	}

	.gutter-row {
		height: 32rpx;
	}

	.gutter-column-24 {
		width: 24rpx * 2;
		display: inline-block;
	}

	.gutter-column-32 {
		width: 32rpx * 2;
		display: inline-block;
	}

	.image-example {
		display: flex;
		align-items: center;
		flex-direction: column;

		.text {
			margin-top: 8rpx * 2;
			font-size: 24rpx;
			color: rgba(0, 0, 0, 0.4);
		}
	}

	.bottom-row {
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tr {
		display: flex;
	}

	.col {
		margin: 0 32rpx;
	}

	.tr+.tr {
		margin-top: 48rpx;
	}

	.text {
		font-size: 28rpx;
		color: rgba(0, 0, 0, .6);
		line-height: 44rpx;
		margin-bottom: 32rpx;
	}

	.error-tips {
		color: rgba(0, 0, 0, 0.4);
		font-size: 10px;
	}
</style>