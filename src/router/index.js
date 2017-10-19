import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/main'
import MovieList from '@/view/movie_hot'
import MovieDetail from '@/view/movie_detail'
import BookDetail from '@/view/book_detail'
import Celebrity from '@/view/celebrity'
import Comments from '@/components/comments'
import Discuss from '@/components/discuss'
import discussDetail from '@/components/discuss_detail'
import MoreWorks from '@/view/more_works'
import Ranks from '@/view/ranks'
import Top250 from '@/view/top_250'
import Weekly from '@/view/weekly'
import New from '@/view/new_movies'
import usBox from '@/view/us_box'
import About from '@/view/about'
import Setting from '@/view/setting'
import Search from '@/view/search'
import Sort from '@/view/sort'
import Book from '@/view/book'
import SortBook from '@/view/sortbook'
import SearchBook from '@/view/searchbook'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/',
      component: Main,
      children:[
      	{
      		path:'/',
	      	name:'book',
	      	component:Book
      	},
        {
          path:'/rank',
          name:'ranks',
          component:Ranks
        },{
          path:'/about',
          name:'about',
          component:About
        },
        {
          path:'/movieList',
          name:'MovieList',
          component:MovieList
        },
        {
      		path:'/book',
	      	name:'book',
	      	component:Book
      	},
      ]
    },
    {
    	path:'/detail/:id',
    	name:'detail',
    	component:MovieDetail
    },
    {
      path:'/detail/:id/comments',
      name:'comments',
      component:Comments
    },
    {
      path:'/detail/:id/discuss',
      name:'discuss',
      component:Discuss
    },{
      path:'/detail/review/:id',
      name:'discuss_detail',
      component:discussDetail
    },{
      path:'/bookdetail/:id',
    	name:'bookdetail',
    	component:BookDetail
    },{
      path:'/celebrity/:id',
      name:'celebrity',
      component:Celebrity
    },{
      path:'/more/:id',
      name:'moreworks',
      component:MoreWorks
    },
    {
      path:'/rank/top250',
      name:'top250',
      component:Top250
    },{
      path:'/rank/weekly',
      name:'weekly',
      component:Weekly
    },
    {
      path:'/rank/new',
      name:'new',
      component:New
    },{
      path:'/rank/us_box',
      name:'us_box',
      component:usBox
    },
    {
      path:'/setting',
      name:'setting',
      component:Setting
    },{
      path:"/search",
      name:'search',
      component:Search
    },{
      path:"/search/sort/:id",
      name:'sort',
      component:Sort
    },
    {
      path:"/searchbook",
      name:'searchbook',
      component:SearchBook
    }
    ,{
      path:"/searchbook/sortbook/:id",
      name:'sortbook',
      component:SortBook
    },

  ]
})
