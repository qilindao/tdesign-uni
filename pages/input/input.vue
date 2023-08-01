<template>
	<view class="input-example">
		<view class="demo-title">Input 输入框</view>
		<view class="demo-desc">用于单行文本信息输入。</view>
		<TDemo title="01 组件类型" desc="基础输入框">
			<t-input label="标签文字" placeholder="请输入文字"></t-input>

			<t-input label="标签文字" placeholder="请输入文字(选填)" />

			<t-input placeholder="请输入文字" />

			<t-input label="标签文字" placeholder="请输入文字" tips="辅助说明" />
		</TDemo>
		<TDemo desc="带字数限制输入框">
			<t-input label="标签文字" placeholder="请输入文字" tips="最大输入10个字符" :maxlength="10" />
			<t-input label="标签文字" v-model="iptMax" placeholder="请输入文字" tips="最大输入10个字符，汉字算两个" :maxcharacter="10" />
		</TDemo>
		<TDemo desc="带操作输入框">
			<t-input label="标签文字" placeholder="请输入文字">
				<template #suffixIcon>
					<t-icon name="error-circle-filled" size="48rpx" />
				</template>
			</t-input>
			<t-input label="标签文字" placeholder="请输入手机号码">
				<template #suffix>
					<t-button theme="primary"> 操作按钮 </t-button>
				</template>
			</t-input>
			<t-input label="标签文字" placeholder="请输入文字" suffixIcon="user-avatar">

			</t-input>
		</TDemo>
		<TDemo desc="带图标输入框">
			<t-input label="标签文字" placeholder="请输入文字">
				<template #prefixIcon>
					<t-icon name="app" size="48rpx" />
				</template>
			</t-input>
			<t-input placeholder="请输入文字" prefixIcon="app">

			</t-input>

			<t-input placeholder="请输入文字">
				<template #prefixIcon>
					<t-icon name="app" size="48rpx" />
				</template>
			</t-input>
		</TDemo>
		<TDemo desc="特定类型输入框">
			<InputSpecial />
		</TDemo>
		<TDemo title="02 组件状态" desc="输入框状态">
			<t-input v-model="text1" label="标签文字" placeholder="请输入文字" status="error" tips="辅助说明" />
			<t-input v-model="text2" label="不可编辑" disabled />
		</TDemo>
		<TDemo desc="信息超长状态">
			<t-input label="标签超长时最多十个字" placeholder="请输入文字" />
		</TDemo>
		<TDemo title="03 组件样式" desc="内容位置">
			<t-input label="左对齐" placeholder="请输入文字" />
			<t-input label="居中" placeholder="请输入文字" align="center" />
			<t-input label="右对齐" placeholder="请输入文字" align="right" />
		</TDemo>
		<TDemo desc="竖排样式">
			<t-input label="标签文字" layout="vertical" placeholder="请输入文字">
				<template #suffixIcon>
					<t-icon name="error-circle-filled" size="48rpx" />
				</template>
			</t-input>
		</TDemo>
		<TDemo desc="非通栏样式">
			<t-input style="border-radius: 6px; margin: 0 16px;" label="标签文字" placeholder="请输入文字" />
		</TDemo>
		<TDemo desc="标签外置样式">
			<InputBordered />
		</TDemo>
		<TDemo desc="自定义样式输入框">
			<view class="input-demo">
				<t-input label="标签文字" placeholder="请输入文字" />
			</view>
		</TDemo>
	</view>
</template>

<script>
	import {
		ref,
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	import InputSpecial from "./components/InputSpecial"
	import InputBordered from "./components/InputBordered"

	export default defineComponent({
		name: "DemoInput",
		components: {
			TDemo,
			InputSpecial,
			InputBordered
		},
		setup() {

			const iptMax = ref('')
			const text1 = ref('已输入文字');
			const text2 = ref('不可编辑文字');

			return {
				iptMax,
				text1,
				text2
			}
		}
	})
</script>

<style scoped>
	.input-example {
		padding-bottom: constant(safe-area-inset-bottom);
		/* 兼容 iOS < 11.2 */
		padding-bottom: env(safe-area-inset-bottom);
		/* 兼容 iOS >= 11.2 */
	}

	.t-input {
		margin-bottom: 32rpx;
	}

	.input-demo {
		padding-bottom: 48rpx;

		--td-input-bg-color: rgba(44, 44, 44, 1);
		--td-input-border-color: rgba(75, 75, 75, 1);
		--td-input-default-text-color: rgba(255, 255, 255, 1);
		--td-input-placeholder-text-color: rgba(255, 255, 255, 0.35);
		--td-input-label-text-color: rgba(255, 255, 255, 1);
	}
</style>