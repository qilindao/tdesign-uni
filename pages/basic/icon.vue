<template>
	<view class="demo">
		<view class="demo-title">Icon 图标</view>
		<view class="demo-desc">用于界面中的操作、入口、功能、服务等视觉表达，icon风格与品牌风格需要保持一致的感受，从而增加一致性</view>
		<TDemo title="01 基础组件图标">
			<view class="demo__list">
				<view class="demo__card" v-for="(item,index) in icons" :key="index" @click="handleClick(item)">
					<t-icon :name="item" size="48rpx" />
					<view class="demo__card-name">{{item}}</view>
				</view>
			</view>
		</TDemo>
		<TDemo title="02 自定义组件图标">
			<view class="demo__list">
				<view class="demo__card" v-for="(item,index) in prefixIcons" :key="index">
					<t-icon :name="item" size="48rpx" prefix="icon" @click="handleClick(item)" />
					<view class="demo__card-name">{{item}}</view>
				</view>
			</view>

		</TDemo>
		<TDemo title="03 图片链接">
			<view class="demo__list">
				<view class="demo__card" v-for="(item,index) in imageIconList" :key="index">
					<t-icon :name="item" size="24" @click="handleClick(item)" />
				</view>
			</view>
		</TDemo>
	</view>

</template>

<script>
	import {
		defineComponent,
		reactive
	} from "vue"
	import TDemo from '@/components/TDemo'
	export default defineComponent({
		name: "DemoIcon",
		components: {
			TDemo
		},
		setup() {
			const prefixIcons = reactive(['a-0', 'a-1h', 'a-2h', 'a-3h']);
			const imageIconList = reactive([
				'https://tdesign.gtimg.com/miniprogram/images/icon1.png',
				'https://tdesign.gtimg.com/miniprogram/images/icon2.png'
			])
			const icons = reactive([
				'add-circle',
				'add-rectangle',
				'add',
				'app',
				'arrow-down-rectangle',
				'arrow-down',
				'arrow-left',
				'arrow-right',
				'arrow-up',
				'attach',
				'backtop-rectangle',
				'backtop',
				'backward',
				'barcode',
				'books',
				'browse-off',
				'browse',
				'bulletpoint',
				'calendar',
				'call',
				'caret-down-small',
				'caret-down',
				'caret-left-small',
				'caret-left',
				'caret-right-small',
				'caret-right',
				'caret-up-small',
				'caret-up',
				'cart',
				'chart-bar',
				'chart-bubble',
				'chart-pie',
				'chart',
				'chat',
				'check-circle-filled',
				'check-circle',
				'check-rectangle-filled',
				'check-rectangle',
				'check',
				'chevron-down-circle',
				'chevron-down-rectangle',
				'chevron-down',
				'chevron-left-circle',
				'chevron-left-double',
				'chevron-left-rectangle',
				'chevron-left',
				'chevron-right-circle',
				'chevron-right-double',
				'chevron-right-rectangle',
				'chevron-right',
				'chevron-up-circle',
				'chevron-up-rectangle',
				'chevron-up',
				'circle',
				'clear',
				'close-circle-filled',
				'close-circle',
				'close-rectangle',
				'close',
				'cloud-download',
				'cloud-upload',
				'cloud',
				'code',
				'control-platform',
				'creditcard',
				'dashboard',
				'delete',
				'desktop',
				'discount-filled',
				'discount',
				'download',
				'edit-1',
				'edit',
				'ellipsis',
				'enter',
				'error-circle-filled',
				'error-circle',
				'error',
				'file-add',
				'file-copy',
				'file-excel',
				'file-icon',
				'file-image',
				'file-paste',
				'file-pdf',
				'file-powerpoint',
				'file-unknown',
				'file-word',
				'file',
				'filter-clear',
				'filter',
				'flag',
				'folder-add',
				'folder-open',
				'folder',
				'fork',
				'format-horizontal-align-bottom',
				'format-horizontal-align-center',
				'format-horizontal-align-top',
				'format-vertical-align-center',
				'format-vertical-align-left',
				'format-vertical-align-right',
				'forward',
				'fullscreen-exit',
				'fullscreen',
				'gender-female',
				'gender-male',
				'gift',
				'heart-filled',
				'heart',
				'help-circle-filled',
				'help-circle',
				'help',
				'history',
				'home',
				'hourglass',
				'image-error',
				'image',
				'info-circle-filled',
				'info-circle',
				'internet',
				'jump',
				'laptop',
				'layers',
				'link-unlink',
				'link',
				'loading',
				'location',
				'lock-off',
				'lock-on',
				'login',
				'logo-android',
				'logo-apple-filled',
				'logo-apple',
				'logo-chrome-filled',
				'logo-chrome',
				'logo-codepen',
				'logo-github-filled',
				'logo-github',
				'logo-ie-filled',
				'logo-ie',
				'logo-qq',
				'logo-wechat',
				'logo-wecom',
				'logo-windows-filled',
				'logo-windows',
				'logout',
				'mail',
				'menu-fold',
				'menu-unfold',
				'minus-circle-filled',
				'minus-circle',
				'minus-rectangle',
				'mirror',
				'mobile-vibrate',
				'mobile',
				'money-circle',
				'more',
				'move',
				'next',
				'notification-filled',
				'notification',
				'order-adjustment-column',
				'order-ascending',
				'order-descending',
				'page-first',
				'page-last',
				'pause-circle-filled',
				'photo',
				'pin-filled',
				'pin',
				'play-circle-filled',
				'play-circle-stroke',
				'play-circle',
				'play',
				'poweroff',
				'precise-monitor',
				'previous',
				'print',
				'qrcode',
				'queue',
				'rectangle',
				'refresh',
				'relativity',
				'remove',
				'rollback',
				'rollfront',
				'root-list',
				'rotation',
				'round',
				'save',
				'scan',
				'search',
				'secured',
				'server',
				'service',
				'setting',
				'share',
				'shop',
				'slash',
				'sound',
				'star-filled',
				'star',
				'stop-circle-1',
				'stop-circle-filled',
				'stop-circle',
				'stop',
				'swap-left',
				'swap-right',
				'swap',
				'thumb-down',
				'thumb-up',
				'time-filled',
				'time',
				'tips',
				'tools',
				'unfold-less',
				'unfold-more',
				'upload',
				'usb',
				'user-add',
				'user-avatar',
				'user-circle',
				'user-clear',
				'user-talk',
				'user',
				'usergroup-add',
				'usergroup-clear',
				'usergroup',
				'video',
				'view-column',
				'view-list',
				'view-module',
				'wallet',
				'wifi',
				'zoom-in',
				'zoom-out',
			])

			const handleClick = (item) => {
				uni.showToast({
					title: item
				})
			}

			return {
				icons,
				prefixIcons,
				imageIconList,
				handleClick
			}
		}
	})
</script>

<style scoped>
	.demo__list {
		display: flex;
		flex-wrap: wrap;
		padding: 16rpx 32rpx;
	}

	.demo__card {
		flex: 0 0 25%;
		text-align: center;
		margin-bottom: 30rpx;
	}

	.demo__card-name {
		font-size: 24rpx;
		color: #999;
	}

	
</style>
<style>
	/* 自定义图标 */
	@font-face {
		font-family: 'icon';
		/* Project id 3144196 */
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPUAAsAAAAACGAAAAOFAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDGgqEPIQBATYCJAMUCwwABCAFhDcHQhtVBxHVmy/JfhzGjunMd9u7ZdNoJGL95+B5ckPfvzsIgZjoVHHRKe1qNlEdfUoAPFpzlgKhvLdV7dpf4MyYhRbmw1+ObxM9+wDSmJP2okWn0XkEe1sWSOAJJR4mYA3TSx7kD48ggEsZ9VFNm7ftSsjYQVPHk4DBlwpUtTJ21IhBONyBmagVHAR76U6DbMQCtUo9BzZk75cfVIgDCkvjn9NxeLOhPPTb+R31wtqF6PckEgQ4WwEWoIGih7mk93SgK7pIF6FxhwKGPDTZIOB3rK312yWKZ//hgaDQGBAbvzoIgIYwY8BvFxEI+O0JFPgdCDT4HVVfpN0CwAWWfQ68w1yWUQUvFRUUEJMZ0zBmzKILZ26suXbqHGrh2ZNXV18/fV68hafWnInRi06vPskQ3VV6eKqH9vB2nPDWbNu2C1xZtH31VhgiPfbE7kmo2ba78+R9oy6cueOtuXVuHwt3+kNEdfVYNWfEmhMii067q3cK6kYqetu26F2w6GjUtlO79uXprVE7b7r38YsHl62wxmwPBrvdDvyl7A2Os2v65berseOS461n/fL6PbPim4dlpFSGJIdmpmSGMm3NvmaVrZtVNPePPcwtGCU9i0KcX3dKyKGCTUFnY9aHrCNjTeN5PzcGxQd6498Eh4WH5zXPjbbvdIxJHLz4dnx4QLNlC4Y/nd98/MZvwLSjqfOTGoRGhEX8dfOa50XbtyfEJHVbM+JAnW7F8SnLQr7+lxVUpFRN6PF4ZnpY62/ZybnNs8Ki0qIimiWf7HroYciPBM85E3+uGqdmAKjPamomzPiEAAJN2zkJA0Lr/nY8A8DHwLJq4DAszzgoYIrfbuy7UNRYGTKaoc7Ih2BddD9goQJcXKDWj0Tw8RhT5OIkCKahZFAEEAuNIYUyXAYsPHJgYyiHSyHV+z0iGYhGTCCQwxQAwWEXFCEcgsbhAmW4G7CI4QFsHF7AxXn+ZQ85QYZDxpFxgekHag6eQj1npVcULztmKY8ST8xFwTh0dVvPXdBjXrOmvEXPTEA5ODhvvQ+tDRBz0DhzLZnjvmlo6Cn1HNzqkHFkXIDpB6g5eEos3Fx+RfGyYx5QZ74nQl3hclgPdNS0E9TF4Ce7XrS+vEUPMwFkq4MDzlf70AbpAMThaRpnrpEbknFPg8RoqaG+1uTekpz14a+2RIkWI5bYbAdV7S6ydTKm+/ggVysAAAA=') format('woff2'),
			url('//at.alicdn.com/t/font_3144196_s14ifjx2cyi.woff?t=1642299317916') format('woff'),
			url('//at.alicdn.com/t/font_3144196_s14ifjx2cyi.ttf?t=1642299317916') format('truetype');
	}
	
	.icon {
		font-family: 'icon' !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.icon-a-0:before {
		content: '\e64d';
	}
	
	.icon-a-1h:before {
		content: '\e64e';
	}
	
	.icon-a-2h:before {
		content: '\e64f';
	}
	
	.icon-a-3h:before {
		content: '\e650';
	}
</style>