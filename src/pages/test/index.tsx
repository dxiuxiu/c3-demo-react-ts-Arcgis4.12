import * as React from 'react'
import Header from '@layouts/Header'
interface IState {

}

interface IProps {
}

/**
 * @author duxx
 * @desc map相关功能的加载组件
 */
export default class Demo extends React.Component<IProps, IState> {

	
	render() {
		return (
			<div>
				<Header />
				test page
			</div>
		)
	}
}
