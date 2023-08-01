<template>
	<view class="input-example">
		<view class="demo-title">Switch 开关</view>
		<view class="demo-desc">用于控制某个功能的开启和关闭。</view>
		<TDemo title="01 组件类型" desc="基础开关">
			<t-cell title="基础开关" :bordered="false">
				<template #rightIcon>
					<t-switch v-model="checked"  />
				</template>
			</t-cell>
		</TDemo>
		<TDemo desc="带描述开关">
			<t-cell title="带文字开关">
				<template #rightIcon>
					<t-switch :default-value="true" :label="['开', '关']" />
				</template>
			</t-cell>

			<t-cell title="带图标开关" :bordered="false">
				<template #rightIcon>
					<t-switch :default-value="true" :icon="['check', 'close']" />
				</template>
			</t-cell>

		</TDemo>
		<TDemo desc="自定义颜色开关">
			<t-cell title="自定义颜色开关">
				<template #rightIcon>
					<t-switch :default-value="true" class="custom-color" />
				</template>
			</t-cell>
		</TDemo>
		<TDemo title="02 组件状态">
			<SwitchStatus />
		</TDemo>

		<TDemo title="03 组件样式" desc="开关尺寸">
			<SwitchSize />
		</TDemo>

	</view>
</template>

<script>
	import {
		ref,
		defineComponent
	} from "vue"
	import TDemo from '@/components/TDemo'
	import SwitchStatus from './components/SwitchStatus'
	import SwitchSize from './components/SwitchSize'

	export default defineComponent({
		name: "DemoSwitch",
		components: {
			TDemo,
			SwitchStatus,
			SwitchSize
		},
		setup() {
			const checked = ref(true);
			const handleChange1 = (val) => {
				checked.value = val;
			}

			return {
				checked,
				handleChange1
			}
		}
	})
</script>

<style scoped>
	.custom-color {
		--td-switch-checked-color: #00a870;
	}
</style>