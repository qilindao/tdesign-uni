<template>
	<t-input label="输入密码" type="password" default-value="520 TDesign" clearable />
	<t-input placeholder="输入验证码" label="验证码">
		<template #suffix>
			<view class="suffix">
				<view class="suffix--line"></view>
				<image class="image" src="https://wwcdn.weixin.qq.com/node/wework/images/202010241547.ac6876be9c.png"
					mode="heightFix" aria-role="img" aria-label="验证码" />
			</view>
		</template>
	</t-input>
	<t-input v-model="phoneNumber" label="手机号" status="error"  placeholder="输入手机号码" :tips="tips">
		<template #suffix>
			<view style="display: flex; align-items: center">
				<view class="suffix--line"></view>
				<view class="verify" aria-role="button">发送验证码</view>
			</view>
		</template>
	</t-input>
	<t-input label="价格" align="right" placeholder="0.00" suffix="元" />
	<t-input label="数量" align="right" placeholder="填写个数" suffix="个" />
</template>

<script>
	import {
		ref,
		computed,
		defineComponent
	} from 'vue';
	export default defineComponent({
		name: "InputSpecial",
		setup() {


			const phoneNumber = ref('17600600600');

			const isPhoneNumber = computed(() => {
				if (/^[1][3,4,5,7,8,9][0-9]{9}$/.test(phoneNumber.value)) {
					return '';
				}
				return 'error';
			});

			const tips = computed(() => {
				if (!isPhoneNumber.value) {
					return '';
				}
				return '手机号输入不正确';
			});

			return {
				phoneNumber,
				tips
			}
		}
	})
</script>

<style lang="less">
	.suffix {
		display: flex;
		align-items: center;
	}

	.suffix--line {
		width: 1px;
		height: 24px;
		background-color: #f6f6f6;
		margin-right: 16px;
	}

	.image {
		width: 72px;
		height: 36px;
		display: block;
		margin-top: -6px;
		margin-bottom: -6px;
	}

	.verify {
		color: rgba(0, 82, 217, 1);
		font-size: 16px;
	}
</style>