<template>
	<div>
		<router-link class='search_item_box' tag='div' :to="{name:'bookdetail',params:{id:book.id}}" v-for='book in books' :key='book.id'>
          <img :src="book.images.small">
          <div class="item_info">
            <h3>{{book.title}}</h3>
            <p><span>作者:</span> {{book.author[0]}} </p>
			<p> <span>出版社:</span> {{book.publisher}}</p>
          </div>
        </router-link>
	</div>
</template>
<script>
	export default{
		props:['books']
		
	}
	
</script>
<style scoped>
	.search_item_box{
		width: 100%;
		padding: 20px;
		border-bottom: 1px solid #f1f1f1;
		box-sizing: border-box;
		overflow: hidden;
	}
	.search_item_box img{
		float: left;
		width:60px;
		overflow: hidden;
	}
	.item_info{
		margin-left: 80px;
		color: #888;
		font-size: 12px;
		line-height: 2;
	}
	.item_info h3{
		font-size: 16px;
		color: #140303
	}
	.item_info span{
		color: #303033;
		font-size: 13px;
	}
</style>