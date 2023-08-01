<template>
	<t-fab :buttonProps="{theme:'danger'}" icon="add" @tap="handleClick"></t-fab>
</template>

<script>
	import {
		defineComponent
	} from "vue"
	export default defineComponent({
		name: 'FabBaseDemo',
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