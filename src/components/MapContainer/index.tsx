import * as React from 'react'
import './index.less'
import ArcgisInitCom from '@components/GISComs/Map'
import mapConfig from '@config/map.config'
import { observer, inject } from 'mobx-react'
import Measure from '@components/GISComs/GISTools/Measure'
import DrawTools from '@components/GISComs/GISTools/DrawTools'
import Clear from '@components/GISComs/GISTools/Clear'
import DisplayCoordinate from '@components/GISComs/GISTools/DisplayCoordinate'
const { gisMode } = mapConfig

interface IProps {
	viewConfigLoaded?: boolean
	stores?: any
}

/**
 * @author duxx
 * @desc 地图容器组件
 */
@inject('stores')
@observer
export default class MapContainerCore extends React.Component<IProps> {
	gisMode = gisMode
	stores = this.props.stores
	view: any // view 对象
	constructor(props: IProps) {
		super(props)
	}

	/**
	 * @author duxx
	 * @desc 创建测量组件 
	 * @memberof MapContainerCore
	 */
	createMeasure = () => {
		return <Measure />
	}
	/**
	 * @author duxx
	 * @desc 创建绘制组件 
	 * @memberof MapContainerCore
	 */
	createDrawTools = () => {
		return <DrawTools />
	}
	/**
	 * @author duxx
	 * @desc 创建清除工具 
	 * @memberof MapContainerCore
	 */
	createClear = () => {
		return <Clear view={this.view} />
	}

	/**
	 * @author duxx
	 * @desc 创建 DisplayCoordinate 工具 - 用于实时显示鼠标所在位置坐标
	 * @memberof MapContainerCore
	 */
	createDisplayCoordinate = () => {
		return <DisplayCoordinate view={this.view} />
	}

	render() {
		let measure, drawTools, clear, displayCoordinate
		const { mapStore } = this.stores
		if (mapStore.viewConfigLoaded) {
			this.view = global.viewConfig.activeView
			measure = this.createMeasure()
			drawTools = this.createDrawTools()
			clear = this.createClear()
			displayCoordinate = this.createDisplayCoordinate()
		}
		return (
			<div className='map-container'>
				<ArcgisInitCom />
				<div className='position-measure'>
					{measure}
				</div>
				<div className='position-drawTools'>
					{drawTools}
				</div>
				<div className='position-clear'>
					{clear}
				</div>
				<div className='position-displayCoordinate'>
					{displayCoordinate}
				</div>
			</div>
		)
	}
}

