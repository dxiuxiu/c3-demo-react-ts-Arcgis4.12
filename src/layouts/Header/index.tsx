import * as React from 'react'
import './index.less'
import { Menu, Icon } from 'antd'
import { NavLink } from 'react-router-dom'
// import logo from './img/logo.png'

interface IState {
	current?: string
}
export interface IProps {
	empty?: any
	height?: string
	theme?: any
	// style?: any
}

/**
 * @author duxx
 * @desc 导航栏
 */
export default class NavBar extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		const tab = /\/(\w+)[\/]?$/.exec(window.location.href)
		this.state = {
			current: (tab !== null && (tab as string[]).length > 0) ? (tab as string[])[1] : 'home'
		}
	}
	handleClick = (e) => {
		this.setState({
			current: e.key,
		})
	}
	render() {
		const menuStyle = {
			height: this.props.height!,       // 自定义导航栏高度
			lineHeight: this.props.height!    // 确保在自定义高度下导航内容保持在导航条内部上下居中
		}
		return (
			<Menu
				theme={this.props.theme}
				style={menuStyle}
				onClick={this.handleClick}
				selectedKeys={[this.state.current!]}
				mode='horizontal'
			>
				{/* <Menu.Item key='home1'> */}
				{/* <NavLink to=''> */}
				{/* <img className='logo' src={logo} alt={Config.projectName} /> */}
				{/* <img className='logo' src={logo} /> */}
				{/* </NavLink> */}
				{/* </Menu.Item> */}
				<Menu.Item key='home'>
					<NavLink to='/'>
						<Icon type='home' />
						首页
            		</NavLink>
				</Menu.Item>
				<Menu.Item key='test'>
					<NavLink to='/test'>
						<Icon type='question-circle' />
						测试
            		</NavLink>
				</Menu.Item>
				<Menu.Item key='map'>
					<NavLink to='/map'>
					<Icon type='check-circle' />
						map
            		</NavLink>
				</Menu.Item>
				<Menu.Item key='mobx'>
					<NavLink to='/mobx'>
					<Icon type='check-circle' />
					mobx
            		</NavLink>
				</Menu.Item>
			</Menu>
		)
	}
}
