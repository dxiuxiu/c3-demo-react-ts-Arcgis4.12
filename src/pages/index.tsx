import * as React from 'react'
const { Fragment, Suspense, lazy } = React
import { HashRouter as Router, Route, Switch, } from 'react-router-dom' // Redirect
import { Spin } from 'antd'
import stores from '@stores/index.store'
import { Provider } from 'mobx-react'
const Pages = () => {
	return (
		<Provider stores={stores}>
			<Router>
				<Suspense fallback={<Spin />}>
					<Fragment>
						<Switch>
							{/* Map Home */}
							<Route exact path='/' component={Map} /> 
							<Route path='/test' component={TestPage} />
							<Route path='/map' component={Home} />
							<Route path='/mobx' component={TodoList} />
							{/* <Redirect to={`/`} /> */}
						</Switch>
					</Fragment>
				</Suspense>
			</Router>
		</Provider>

	)
}

export default Pages

const Home = lazy(() => import('@pages/home')) // 首页
const Map = lazy(() => import('@pages/mapDemo')) // Map 组件简单使用页
const TestPage = lazy(() => import('@pages/test')) // 练习页面
const TodoList = lazy(() => import('./test/mobxTodoList'))

