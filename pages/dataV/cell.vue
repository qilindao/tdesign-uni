<template>

	<view class="demo">
		<view class="demo-title">Cell 单元格</view>
		<view class="demo-desc">用于各个类别行的信息展示。</view>

		<TDemo title="01 组件类型" desc="单行单元格">
			<t-cell title="单行标题" hover arrow />
			<t-cell title="单行标题" hover required arrow />
			<t-cell title="单行标题" hover arrow desc="单行标题，有16条消息">
				<template #note>
					<t-badge :count="160" slot="note" />
				</template>
			</t-cell>
			<t-cell title="单行标题" hover note="辅助信息" arrow />
			<t-cell title="单行标题" hover arrow leftIcon="lock-on" :bordered="false" />

		</TDemo>
		<TDemo desc="多行单元格">
			<t-cell title="单行标题" description="一段很长很长的内容文字" hover arrow />
			<t-cell title="单行标题" description="一段很长很长的内容文字" hover arrow required />
			<t-cell title="单行标题" description="一段很长很长的内容文字1" hover arrow>
				<template #note>
					<t-badge :count="16" slot="note" />
				</template>
			</t-cell>
			<t-cell title="单行标题" description="一段很长很长的内容文字" note="辅助信息" hover arrow />
			<t-cell title="单行标题" description="一段很长很长的内容文字" leftIcon="lock-on" hover arrow />
			<t-cell title="多行标题" description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容" hover />
			<t-cell title="多行带图片" description="一段很长很长的内容文字" align="top"
				image="https://tdesign.gtimg.com/miniprogram/images/cell1.png" hover :bordered="false" />


		</TDemo>
		<TDemo title="02 组件样式" desc="卡片单元格">
			<t-cell-group theme="card">
				<t-cell title="单行标题" leftIcon="service" hover arrow />
				<t-cell title="单行标题" leftIcon="internet" hover arrow />
				<t-cell title="单行标题" leftIcon="lock-on" hover arrow />
			</t-cell-group>
		</TDemo>

	</view>


</template>

<script>
	import {
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	export default defineComponent({
		name: "DemoCell",
		components: {
			TDemo,
		},
		setup() {}
	})
</script>

<style scoped>

</style>