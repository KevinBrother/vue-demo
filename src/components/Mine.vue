<template>
  <div>
    <p>This is MinePage</p>

		<label>循环
			<div id = "mine-list" v-for = "item in items">
				<div>{{item.money}}</div>
			</div>
		</label>

		<label>v-html
    	<div v-html="hMsg"></div>
		</label>

		<label>v-model 双向绑定
    	<p>{{dbBind}}</p>
			<input v-model.trim="dbBind"/>
		</label>

		<label>v-bind 绑定属性
				<input  type="checkbox" v-model="isCheck"/>	
			<div v-bind:class="{classN: isCheck}">
					绑定属性控制样式隐藏和显示
			</div>	
		</label>
		
		<label>v-on 绑定事件
			{{hMsg}}	
			<button v-on:click="reverseMsg">点击反转</button>	
		</label>
		
		<label>ajax	
			<button v-on:click="getSid1">ajax1</button>	
			<button v-on:click="getSid2">ajax2</button>	
		</label>


  </div>
</template>

<script>
	import global from '../utils/global'

	export default {
		name: 'Mine',
		data() {
			return {
				items: [
					{money: 100},
					{money: 1000},
					{money: 10000}
				],
				hMsg: "v-html message!",
				dbBind: "双向绑定",
				isCheck: false
			}
			
		},
		methods: {
			reverseMsg: function() {
				console.log(this)
				this.hMsg = this.hMsg.split('').reverse().join('');
			},
			getSid1: function() {
				var successCallback =  (response) => {
					console.log('服务器请求成功了')
					console.log(response)
					console.log(response.data)
				}
				var errorCallback =  (response) => {
					console.log('服务器请求出错了')
				}
				this.$http.get(global.hostname + '/hotel/base/sid').then(successCallback,errorCallback);
			},	

			getSid2: function() {
				this.$http.get(this.global.hostname + "/hotel/base/sid").then(function(res){
					document.write(JSON.stringify(res.body));  	
				},function() {
					console.log("请求处理失败！");
				})
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

