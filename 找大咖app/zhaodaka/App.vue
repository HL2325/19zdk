<script>
	export default {
		onLaunch: function() {
			// #ifdef APP-PLUS
			// 锁定屏幕方向
			plus.screen.lockOrientation('portrait-primary'); //锁定
			
			// #endif
		},
		onShow: function() {
			// console.log('App Show')
			uni.reLaunch({
				url: '/pages/welcome/welcome'
			});
			uni.hideTabBar()
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
		@import './common/uni.css';
</style>
