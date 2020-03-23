import * as React from 'react'
import './index.less'
import Header from '@layouts/Header'
// import globalConsts from '@global/index'

interface IState {
	/** map 对象是否成功创建 */
	mapLoaded?: boolean
}

interface IProps {
}

/**
 * @author duxx
 * @desc 首页
 */
export default class Home extends React.Component<IProps, IState> {

	map: any // 保存 map 对象
	constructor(props: IProps) {
		super(props)
		this.state = {
			mapLoaded: false
		}
	}
	componentDidMount() {
        console.log(global.map)

	}

	render() {
		return (
			<React.Fragment>
				<Header />
				<div className='home-container'>
					首页
				{/* {globalConsts.views} */}

				</div>
			</React.Fragment>
		)
	}
}
