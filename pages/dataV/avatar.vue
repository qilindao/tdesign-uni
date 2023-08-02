<template>
	<view class="demo">
		<view class="demo-title">Avatar 头像</view>
		<view class="demo-desc">用于告知用户，该区域的状态变化或者待处理任务的数量。</view>
		<TDemo title="01 组件类型" desc="图片头像" padding>
			<t-avatar class="avatar-example" :image="image" />
			<t-avatar class="avatar-example" shape="round" :image="image" />
		</TDemo>
		<TDemo desc="字符头像" padding>
			<t-avatar class=" custom">A</t-avatar>
			<t-avatar class=" custom" shape="round">A</t-avatar>
		</TDemo>
		<TDemo desc="图标头像" padding>
			<t-avatar class="avatar-example" icon="user" />
			<t-avatar class="avatar-example" shape="round" icon="user" />
		</TDemo>

		<TDemo title="02 组件样式" desc="纯展示" padding>
			<t-avatar-group :max="3" collapseAvatar="+5">
				<t-avatar v-for="(item,index) in pics" :key="index" :image="item" />
			</t-avatar-group>

		</TDemo>
		<TDemo desc="带操作" padding>
			<t-avatar-group cascading="right-up" max="5">
				<t-avatar v-for="(item,index) in pics" :key="index" :image="item" />
			</t-avatar-group>
		</TDemo>
		<TDemo desc="徽标头像" padding>
			<t-avatar class="avatar-example" :image="image" :badge-props="{dot: true, offset: [4, 4] }" />
			<t-avatar class="avatar-example" t-class-content="external-class-content"
				:badge-props=" {count: 8, offset: [6, 6] }">A</t-avatar>
			<t-avatar class="avatar-example" icon="user" :badge-props=" {count: 12,  offset: [6, 6] }" />
		</TDemo>

		<TDemo title="03 组件尺寸" desc=" large/medium/small 尺寸" padding>
			<view class="size-avatar-example">
				<t-avatar class="avatar-example--large" :image="image" size="large" />
				<t-avatar class="avatar-example--large custom" size="large">A</t-avatar>
				<t-avatar class="avatar-example--large" icon="user" size="large" />
			</view>

			<view class="size-avatar-example">
				<t-avatar class="avatar-example--medium" :image="image" />
				<t-avatar class="avatar-example--medium custom" size="medium">A</t-avatar>
				<t-avatar class="avatar-example--medium" icon="user" size="medium" />
			</view>

			<view class="size-avatar-example">
				<t-avatar class="avatar-example--small" :image="image" size="small" />
				<t-avatar class="avatar-example--small custom" size="small">A</t-avatar>
				<t-avatar class="avatar-example--small" icon="user" size="small" />
			</view>
		</TDemo>
	</view>
</template>


<script>
	import {
		defineComponent,
		reactive,
		ref
	} from "vue"
	import TDemo from '@/components/TDemo'
	export default defineComponent({
		name: "DemoAvatar",
		components: {
			TDemo,
		},
		setup() {
			const image = ref('https://tdesign.gtimg.com/miniprogram/images/avatar1.png');
			const pics = reactive([
				'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
				'https://tdesign.gtimg.com/miniprogram/images/avatar2.png',
				'https://tdesign.gtimg.com/miniprogram/images/avatar3.png',
				'https://tdesign.gtimg.com/miniprogram/images/avatar4.png',
				'https://tdesign.gtimg.com/miniprogram/images/avatar5.png',
				'https://tdesign.gtimg.com/miniprogram/images/avatar1.png',
			])
			return {
				image,
				pics
			}
		}
	})
</script>

<style lang="less" scoped>
	page {
		background: #fff;
	}

	.demo-avatar {
		margin: 0 32rpx;
	}

	.desc {
		margin: 10rpx 32rpx;
		color: #999;
		font-size: 26rpx;
		line-height: 36rpx;
	}

	.avatar-example {
		margin-right: 64rpx;
	}

	.avatar-example:not(:last-child) {
		margin-right: 64rpx;
	}

	.external-class-content {
		color: #fff;
		background-color: #0052d9;
		font-weight: 400;
	}

	.custom {
		margin-right: 64rpx;

		:deep(.t-avatar__text) {
			background-color: #0052d9;
			color: #fff;
		}
	}

	.size-avatar-example {
		display: flex;
		margin-bottom: 32rpx;
	}


	.avatar-example--small:not(:last-child) {
		margin-right: 112rpx;
	}

	.avatar-example--medium:not(:last-child) {
		margin-right: 96rpx;
	}

	.avatar-example--large:not(:last-child) {
		margin-right: 64rpx;
	}
</style>