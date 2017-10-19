<template>
	<div>
		<detail-header :title='title'></detail-header>
		  <div v-infinite-scroll="getSortAll" infinite-scroll-distance="200">
	        <searchbook-item v-for='item in data' :searchs='item.books' :key="2"></searchbook-item>
	    </div>

    <div v-if="!data.length">
      <p class="loading">热情加载中，请耐心等待...</p>
    </div>

	</div>
</template>
<script>
	import Api from '../assets/js/api'
	import detailHeader from '../components/detail_header'
	import searchbookItem from '../components/searchbook_item'
	import Vue from 'vue';
    //滚动
	import infiniteScroll from 'vue-infinite-scroll'
	Vue.use(infiniteScroll);
	export default{
		components:{
			detailHeader,
			searchbookItem
		},
		data(){
			return{
				title:'关于'+this.$route.params.id+'的书籍',
				data:[],
				start:0
			}
		},
		methods:{
			getSortAll(){
				var self=this;
        this.$http.jsonp(Api.url+'/v2/book/search?q='+this.$route.params.id+'&apikey=0b2bdeda43b5688921839c8ecb20399b&start='+self.start+'&count=20').then(function(response){
          self.data.push(response.body);
					self.start+=20;
					console.log(self.data[0].books[0].title)
        });
			}
		}
	}
</script>
<style>
  .loading{
    text-align: center;
    line-height:4;
    color: #888;
  }
</style>
