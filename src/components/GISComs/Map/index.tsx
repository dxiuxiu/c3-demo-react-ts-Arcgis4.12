import * as React from 'react'
import esriLoader from 'esri-loader'
import './index.less'
import mapStore from '@stores/map.store'
import mapConfig from '@config/map.config'
const { gisMode, defaultLayers, baseMapLayers, initViewpoint } = mapConfig // initViewpoint
import { constructMap, constructView } from '@utils/arcgis/ArcGISInit'
import { addLayerToMap } from '@utils/arcgis/ArcGISCommon' // goToCamera goToTarget goToCamera


/** view 配置参数数据结构 */
export interface IViewConfig {
	mapView: any,
	sceneView: any,
	activeView: any,
	container: any
}
interface IState {
	// viewConfigCreated: boolean

}
interface IProps {
	className?: string,
}


const localStorageIsOn = window.localStorage.getItem(mapConfig.rotationStorageKey) // 从localStorage中获取是否进行旋转
const mapInitExtent = mapConfig.initExtent
/**
 * @author duxx
 * @desc 基于Arcgis API for js v4.12 的 map 初始化组件
 */
export default class MapInit extends React.Component<IProps, IState> {
	/** map 对象 */
	map: any

	/** GIS 二三维模式标致变量，可选值为 '2D' 或 '3D' */
	gisMode = gisMode
	/**
	 * view 对象参数
	 * 用于二三维切换
	 */
	viewConfig: IViewConfig = {
		mapView: null,
		sceneView: null,
		activeView: null,
		container: null
	}

	constructor(props: IProps) {
		super(props)
	}

	componentDidMount() {
		constructMap(baseMapLayers).then((map) => {
			mapStore.onMapCreate!(map)
			this.map = map
			addLayerToMap(this.map, defaultLayers) // 在 map 对象上添加默认需要加载的图层
			let param
			if (!localStorageIsOn || (localStorageIsOn! === 'on')) {
				param = {
					container: this.viewConfig.container,
					map: this.map,
					constraints: {
						altitude: {
							min: 5000
						}
					}
				}
			} else {
				param = {
					container: this.viewConfig.container,
					map: this.map,
					extent: mapInitExtent,
					constraints: {
						altitude: {
							min: 5000
						}
					}
				}
			}

			this.createView(param, this.gisMode)

		}, (errInfo) => {
			console.error(errInfo)
		})
	}

	render() {
		const style = this.props.className ? this.props.className : 'viewContainer'
		return (
			<div className={style} >
				<div className='mapDiv' ref={node => this.viewConfig.container = node} />
			</div>
		)
	}


	/**
	 * @author duxx
	 * @param viewParam 创建 view 需要的参数
	 * @param type 类型 - 二维(2D)还是三维(3D)
	 */
	createView = (viewParam, type) => {
		const threeModeParam = viewParam
		switch (type) {
			case '2D':
				constructView(viewParam, '2D').then((mapView) => {
					this.viewConfig.mapView = mapView
					this.viewConfig.activeView = this.viewConfig.mapView
					viewParam.container = null
					constructView(threeModeParam, '3D').then((sceneView) => {
						this.viewConfig.sceneView = sceneView
						mapStore.onViewConfigCreate!(this.viewConfig)
					})
				})
				break
			case '3D':
				constructView(threeModeParam, '3D').then((sceneView) => {
					this.viewConfig.sceneView = sceneView

					/** 实现飞的效果 */
					if (!localStorageIsOn || (localStorageIsOn! === 'on')) {

						// 实现飞行效果，飞行完成，左侧功能添加
						esriLoader.loadModules([
							'esri/Viewpoint'
						]).then(([
							Viewpoint,
						]) => {
							const viewpot = initViewpoint
							const viewpoint = new Viewpoint(viewpot)
							console.log(viewpoint)
							const options = {
								speedFactor: 0.5,
								easing: 'easeOutQuad'
							}
							this.viewConfig.sceneView.goTo(viewpoint, options)
						}).catch(err => {
							console.error(err)
						})
					} else {
						this.viewConfig.sceneView.on('layerview-create', () => {
							console.log('viewCompleted')
						})
					}

					this.viewConfig.activeView = this.viewConfig.sceneView
					viewParam.container = null
					constructView(viewParam, '2D').then((mapView) => {
						this.viewConfig.mapView = mapView
						mapStore.onViewConfigCreate!(this.viewConfig)
					})
				})
				break
			default:
				console.error('ArcgisInitCom 组件中参数 this.gisMode 错误')
		}
	}


}

// MapInit.contextType = mapContext







