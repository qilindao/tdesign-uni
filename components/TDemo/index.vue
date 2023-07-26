<template>
	<view :class="rootClassName">
		<view v-if=" title || desc " class="demo-block__header">
			<view v-if=" title " class="demo-block__header-title">{{ title }}</view>
			<view v-if=" desc " :class="summaryClassName">{{ desc }}
			</view>
			<!-- <slot name="title-right" /> -->
		</view>
		<view :class="slotClassName">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	import {
		computed,
		defineComponent
	} from "vue"
	export default defineComponent({
		name: "TDemo",
		props: {
			title: {
				type: String,
				default: '',
			},
			desc: {
				type: String,
				default: '',
			},
			operList: Array,
			padding: {
				type: Boolean,
				default: false,
			},
		},
		setup(props) {
			const rootClassName = computed(() => [
				'demo-block',
				{
					['demo-block_notitle']: !props.title,
				},
			]);

			const summaryClassName = computed(() => [
				`demo-block__header-desc`,
				{
					['demo-block_subtitle']: !props.title,
				},
			]);



			const slotClassName = computed(() => [
				`demo-block__slot`,
				{
					['with-padding']: props.padding,
				},
			]);

			return {
				rootClassName,
				summaryClassName,
				slotClassName
			}
		}
	})
</script>

<style>
</style>