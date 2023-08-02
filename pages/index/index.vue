<template>
	<view class="demo">
		<view class="demo-title">TDesign for UniApp</view>
		<view class="demo-desc">TDesign 适配uniApp的组件库，只支持 vue 3 技术栈。</view>
		<t-cell-group title="基础">
			<t-cell url='/pages/basic/button' title="Button 按钮" hover arrow></t-cell>
			<t-cell url='/pages/basic/divider' title="Divider 分割线" hover arrow></t-cell>
			<t-cell url='/pages/basic/fab' title="Fab 悬浮按钮" hover arrow></t-cell>
			<t-cell url='/pages/basic/col' title="Layout 布局" hover arrow></t-cell>
			<t-cell url='/pages/basic/icon' title="Icon 图标" hover arrow></t-cell>
			<t-cell url='/pages/basic/link' title="Link 链接" hover arrow></t-cell>
			<t-cell url='/pages/basic/transition' title="Transition 过渡" hover arrow></t-cell>
		</t-cell-group>
		<t-cell-group title="输入">
			<t-cell url='/pages/input/form' title="Form 表单" hover arrow></t-cell>
			<t-cell url='/pages/input/input' title="Input 输入框" hover arrow></t-cell>
			<t-cell url='/pages/input/textarea' title="Textarea 多行文本框" hover arrow></t-cell>
			<t-cell url='/pages/input/checkbox' title="Checkbox 多选框" hover arrow></t-cell>
			<t-cell url='/pages/input/radio' title="Radio 单选框" hover arrow></t-cell>
			<t-cell url='/pages/input/switch' title="Switch 开关" hover arrow></t-cell>
			<t-cell url='/pages/input/search' title="Search 搜索框" hover arrow></t-cell>
			<t-cell url='/pages/input/stepper' title="Stepper 步进器" hover arrow></t-cell>
			<t-cell url='/pages/input/rate' title="Rate 评分" hover arrow></t-cell>
		</t-cell-group>
		<t-cell-group title="数据展示">
			<t-cell url='/pages/dataV/avatar' title="Avatar 头像" hover arrow></t-cell>
			<t-cell url='/pages/dataV/badge' title="Badge 徽标" hover arrow></t-cell>
			<t-cell url='/pages/dataV/cell' title="Cell 单元格" hover arrow></t-cell>
			<t-cell url='/pages/dataV/image' title="Image 图片" hover arrow></t-cell>
		</t-cell-group>
		<t-cell-group title="反馈">

			<t-cell url='/pages/feedback/loading' title="Loading 加载中" hover arrow></t-cell>
			<t-cell url='/pages/feedback/overlay' title="Overlay 遮罩层" hover arrow></t-cell>
			<t-cell url='/pages/feedback/popup' title="Popup 弹出层" hover arrow></t-cell>
		</t-cell-group>
	</view>
</template>

<script>
	import {
		defineComponent,
		ref
	} from "vue"
	import TDemo from '@/components/TDemo'
	export default defineComponent({
		components: {
			TDemo
		},
		setup() {


			const goNavigate = (url) => {
				uni.navigateTo({
					//保留当前页面，跳转到应用内的某个页面
					url
				})
			}



			return {

				goNavigate
			}
		}
	})
</script>

<style>

</style>