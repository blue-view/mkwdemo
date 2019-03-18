import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage'
import SongList from '@/components/SongList'
import Search from '@/components/Search'
import BillBoard from '@/components/BillBoard'

import IndexPageDetail from '@/components/IndexPageDetail'

Vue.use(Router)

export default new Router({
	// mode: 'hash',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	},
	routes: [
		{
			path: '/',
			name: 'index',
			component: IndexPage
		},
		{
			path: '/songList',
			name: 'songList',
			component: SongList
		},
		{
			path: '/search',
			name: 'search',
			component: Search
		}, {
			path: '/billBoard',
			name: 'billboard',
			component: BillBoard,

		}, {
			path: '/indexpagedetail/:PlayListDetailId/:picUrl/:name:/:playCount',
			name: 'indexpagedetail',
			component: IndexPageDetail,
		}
	]
})
