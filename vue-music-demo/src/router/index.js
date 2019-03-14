import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/components/IndexPage'
import SongList from '@/components/SongList'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
	// mode: 'hash',
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
		}
	]
})
