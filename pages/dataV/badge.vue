<template>
	<view class="demo">
		<view class="demo-title">Badge 徽标</view>
		<view class="demo-desc">用于告知用户，该区域的状态变化或者待处理任务的数量。</view>
		<TDemo title="01 组件类型">
			<view class="demo-desc">红点徽标</view>
			<view class="demo-wrapper">
				<t-badge dot :offset=" [-4, 4] " class="wrapper" content="消息" />
				<t-badge dot :offset=" [1, -1] " class="wrapper">
					<template #content>
						<t-icon name="notification" size="24" />
					</template>
				</t-badge>
				<t-badge dot :offset=" [1, 1] " class="wrapper">
					<template #content>
						<t-button>按钮</t-button>
					</template>
				</t-badge>
			</view>

			<view class="demo-desc">数字徽标</view>
			<view class="demo-wrapper">
				<t-badge count="8" content="消息" :offset=" [-8] " class="wrapper" />
				<t-badge count="2" :offset=" [-2, -2] " class="wrapper">
					<template #content>
						<t-icon name="notification" size="24" />
					</template>
				</t-badge>
				<t-badge count="8" :offset=" [2, 2] " class="wrapper">
					<template #content>
						<t-button>按钮</t-button>
					</template>
				</t-badge>
			</view>

			<view class="demo-desc">自定义徽标</view>
			<view class="demo-wrapper">
				<t-badge count="NEW" :offset=" [0, 2] " ariaRole="button">
					<template #content>
						<t-button icon="notification" shape="square" size="large" />
					</template>
				</t-badge>
			</view>

		</TDemo>
		<TDemo title="02 组件样式">
			<view class="demo-desc">圆形徽标</view>
			<view class="demo-wrapper">
				<t-badge count="2" :offset=" [-2, -2] ">
					<template #content>
						<t-icon name="notification" size="24" />
					</template>
				</t-badge>
			</view>

			<view class="demo-desc">方形徽标</view>
			<view class="demo-wrapper">
				<t-badge count="2" shape="square" :offset=" [-2, -2] ">
					<template #content>
						<t-icon name="notification" size="24" />
					</template>
				</t-badge>
			</view>

			<view class="demo-desc">气泡徽标</view>
			<view class="demo-wrapper">
				<t-badge count="领积分" shape="bubble" ariaRole="button">
					<template #content>
						<t-button icon="shop" ariaLabel="商店" shape="square" size="large" />
					</template>
				</t-badge>
			</view>

			<view class="demo-desc" style="margin-bottom: 32rpx">角标</view>
			<t-cell title="单行标题">
				<template #note>
					<t-badge count="New" :offset="[0, 0]" shape="ribbon" />
				</template>
			</t-cell>
		</TDemo>
		<TDemo title="03 组件尺寸">
			<view class="demo-desc">Large</view>

			<view class="block">

			</view>

			<view class="demo-desc">Middle</view>

			<view class="block">

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
		name: "DemoBadge",
		components: {
			TDemo,
		},
		setup() {
			return {}
		}
	})
</script>

<style scoped>
	.wrapper {
		margin-right: 48px;
	}

	.demo-wrapper {
		display: flex;
		margin-left: 32rpx;
		margin-top: 28px;
		margin-bottom: 24px;
		align-items: center;
	}
</style>