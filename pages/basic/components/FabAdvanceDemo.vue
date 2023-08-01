<template>
	<t-fab icon="add" @tap="handleClick" text="获取手机号"></t-fab>
</template>

<script>
	import {
		defineComponent
	} from "vue"
	export default defineComponent({
		name: 'FabAdvanceDemo',
		setup() {
			const handleClick = () => {
				console.log('click Fab');
			}
			return {
				handleClick
			}
		}
	})
</script>

<style>
</style>