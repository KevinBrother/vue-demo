<template>
  <div>
    <p>This is MinePage</p>

		<label>循环
			<div id = "mine-list" v-for = "item in data">
				<div>{{item.money}}</div>
			</div>
		</label>

		<label>v-html
    	<div v-html="hMsg"></div>
		</label>

		<label>v-model 双向绑定
    	<p>{{dbBind}}</p>
			<input v-model="dbBind"/>
		</label>

		<label>v-bind 绑定属性
				<input  type="checkbox" v-model="isCheck"/>	
			<div v-bind:class="{'classN': isCheck}">
					绑定属性控制样式隐藏和显示
			</div>	
		</label>

  </div>
</template>


<script>
	export default {
		name: 'Mine',
		data() {
			return {
				data: [
					{money: 100},
					{money: 1000},
					{money: 10000}
				],

				hMsg: "v-html message!",
				dbBind: "双向绑定",
				isCheck: false
			}
			
		}
	}
	
</script>

<style>
	label {
		display: block;
		margin-top: 20px;
		border: 1px solid gray;
	}

	.classN {
		background: #444;
 		color: #eee;
	}
</style>

