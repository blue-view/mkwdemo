import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '@/pages/Index'
import CoursePage from '@/pages/Course'
import SpecialColumn from '@/pages/SpecialColumn'
import EmploymentClass from '@/pages/EmploymentClass'
import EmploymentClassDetail from '@/pages/EmploymentClassDetail'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path:'/',
			name: 'index',
			components: {
				default:IndexPage,
				header1:Layout
			}
		},
		{
			path: '/course',
			name: 'course',
			components: {
				default:CoursePage,
				header1:Layout
			}
		},
		{
			path: '/specialColumn',
			name: 'specialColumn',
			components: {
				default:SpecialColumn,
				header1:Layout
			}
		},
		{
			path: '/employmentClass',
			name: 'employmentClass',
			components: {
				default:EmploymentClass,
				header1:Layout
			}
		},
		{
			path:'/employmentClass/detail',
			name:'employmentClassDetail',
			components: {
				default:EmploymentClassDetail
			},
		}

	]
})
