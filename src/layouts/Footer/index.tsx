import * as React from 'react'
import './index.less'
import { Layout } from 'antd'

const { Footer } = Layout

export default class BasicFooter extends React.Component {
	render() {
		return (
			<Footer className='footer'>
				<span>© 2020 sarinaDu</span>
			</Footer>
		)
	}
}
