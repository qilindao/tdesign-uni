<template>

	<view class="demo">
		<view class="demo-title">Button 按钮</view>
		<view class="demo-desc">用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等。</view>

		<TDemo title="01 组件类型" desc="基础按钮">
			<view class="button-example">
				<t-button theme="primary" size="large">填充按钮</t-button>
				<t-button theme="light" size="large">填充按钮</t-button>
				<t-button size="large">填充按钮</t-button>
			</view>

			<view class="button-example">
				<t-button theme="primary" size="large" variant="outline">描边按钮</t-button>
				<t-button theme="primary" size="large" variant="text">文字按钮</t-button>
			</view>
		</TDemo>
		<TDemo desc="图标按钮">
			<view>
				<t-button theme="primary" icon="app" content="填充按钮" size="large" class="margin"></t-button>
				<t-button theme="primary" size="large" loading class="margin">加载中</t-button>
				<t-button theme="primary" icon="search" shape="square" class="margin" size="large"
					aria-label="搜索"></t-button>
			</view>
		</TDemo>
		<TDemo desc="幽灵按钮">
			<view class="ghost-example">
				<t-button theme="primary" ghost size="large">幽灵按钮</t-button>
				<t-button theme="danger" ghost size="large">幽灵按钮</t-button>
				<t-button ghost size="large">幽灵按钮</t-button>
			</view>
		</TDemo>
		<TDemo desc="组合按钮">
			<view class="button-example">
				<t-button theme="light" block size="large">填充按钮</t-button>
				<t-button theme="primary" block size="large">填充按钮</t-button>
			</view>
		</TDemo>
		<TDemo desc="通栏按钮">
			<view class="block-example">
				<t-button theme="primary" size="large" block>填充按钮</t-button>
			</view>
		</TDemo>
		<TDemo title="02 组件状态" desc="按钮禁用态">
			<view class="button-example">
				<t-button theme="primary" size="large" disabled>填充按钮</t-button>
				<t-button theme="light" size="large" disabled>填充按钮</t-button>
				<t-button size="large" disabled>填充按钮</t-button>
			</view>

			<view class="button-example">
				<t-button theme="primary" size="large" variant="outline" disabled>描边按钮</t-button>
				<t-button theme="primary" size="large" variant="text" disabled>文字按钮</t-button>
			</view>
		</TDemo>

		<TDemo title="03 组件样式" desc="按钮尺寸">
			<view class="size-example">
				<t-button theme="primary" size="large">按钮48</t-button>
				<t-button theme="primary">按钮40</t-button>
				<t-button theme="primary" size="small">按钮32</t-button>
				<t-button theme="primary" size="extra-small">按钮28</t-button>
			</view>
		</TDemo>
		<TDemo desc="按钮形状">
			<view class="size-example">
				<t-button theme="primary" size="large">填充按钮</t-button>
				<t-button theme="primary" size="large" icon="search" shape="square" aria-label="搜索"></t-button>
				<t-button theme="primary" size="large" shape="round">填充按钮</t-button>
				<t-button theme="primary" size="large" icon="search" shape="circle" aria-label="搜索"></t-button>
			</view>
			<view style="margin-top: 10rpx;">
				<t-button theme="primary" size="large" block class="rectangle-button">填充按钮</t-button>
			</view>
		</TDemo>
		<TDemo desc="按钮主题">
			<view class="button-example">
				<t-button size="large">填充按钮</t-button>
				<t-button size="large" variant="outline">描边按钮</t-button>
				<t-button size="large" variant="text">文字按钮</t-button>
			</view>

			<view class="button-example">
				<t-button size="large" theme="primary">填充按钮</t-button>
				<t-button size="large" theme="primary" variant="outline">描边按钮</t-button>
				<t-button size="large" theme="primary" variant="text">文字按钮</t-button>
			</view>

			<view class="button-example">
				<t-button size="large" theme="danger">填充按钮</t-button>
				<t-button size="large" theme="danger" variant="outline">描边按钮</t-button>
				<t-button size="large" theme="danger" variant="text">文字按钮</t-button>
			</view>

			<view class="button-example">
				<t-button size="large" theme="light">填充按钮</t-button>
				<t-button size="large" theme="light" variant="outline">描边按钮</t-button>
				<t-button size="large" theme="light" variant="text">文字按钮</t-button>
			</view>
		</TDemo>
	</view>


</template>

<script>
	import {
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	// import TButton from '@/uni_modules/tdesign-uni/components/button'
	export default defineComponent({
		name: "DemoButton",
		components: {
			TDemo,
			// TButton
		},
		setup() {}
	})
</script>

<style scoped>
	.button-example {
		margin: 0 32rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 32rpx;
	}

	.block-example {
		margin: 0 32rpx;
	}

	.size-example {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin: 0 32rpx;
	}

	.ghost-example {
		display: flex;
		justify-content: space-between;
		background-color: #181818;
		padding: 32rpx;
	}

	.rectangle-button {
		border-radius: 0;
	}

	.button-example:not(:last-child) {
		margin-bottom: 32rpx;
	}

	.margin {
		margin-left: 32rpx;
	}
</style>