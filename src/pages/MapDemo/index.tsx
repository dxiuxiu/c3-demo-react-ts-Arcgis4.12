import * as React from 'react'
import './index.less'
import MapContainer from '@components/MapContainer'
import { IViewConfig } from '@components/GISComs/Map'

// import mapStore from '@stores/map.store'
// import { Provider } from 'mobx-react'
// const stores = {
// 	mapStore
// }

interface IProps {
}

/**
 * @author duxx
 * @desc map 模块布局
 */
export default class Map extends React.Component<IProps> {
	viewConfig: IViewConfig
	constructor(props: IProps) {
		super(props)
	}


	render() {
		return (
			<MapContainer />
		)
	}
	// render() {
	// 	return (
	// 		<React.Fragment>
	// 			<Provider stores = {stores}>
	// 				<MapContainer />
	// 			</Provider>
	// 		</React.Fragment>
	// 	)
	// }
}