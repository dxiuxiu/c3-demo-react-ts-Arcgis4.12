

import esriLoader from 'esri-loader'
import esriConfig from '@config/esri.config'
const { arcgisVersion } = esriConfig
import { addWidgets } from '@utils/arcgis/widgets'

import {addTiandituBaseMapLayers} from '@utils/arcgis/ArcGISCommon'
// import tidituConfig from '@config/tiditu.config'
// const { tileInfo } = tidituConfig
/**
 * @author duxx
 * @desc 创建 view
 * @param map
 * @export
 * @param {*} params
 * @param {*} type
 * @returns
 */
export function constructView(params, type) {
	return new Promise((resolve, reject) => {
		esriLoader.loadModules([
			'esri/views/MapView',
			'esri/views/SceneView',
			'dojo/domReady!'], arcgisVersion).then(([
				MapView,
				SceneView,
			]) => {
				let view
				if (type === '2D') {
					view = new MapView(params)
					view.ui.components = ['zoom']
					// view.on('click', (e) => {
					// 	console.log(e)
					// 	console.log(view)
					// 	console.log(view.viewpoint)
					// })
				} else {
					view = new SceneView(params)
					view.ui.components = ['compass', 'navigation-toggle', 'zoom']
					/** click  mouse-wheel pointer-move */
					// view.on('pointer-move', (e) => {
					// 	console.log(view.viewpoint)
					// 	console.log(e)
					// })
					// view.on('mouse-wheel', (e) => {
					// 	console.log(e)
					// })
				}
				addWidgets(view)
				/**
				 * GIS 默认工具位置调整
				 *
				 * 注意 : 如果通过修改 view.ui.padding 参数来调整默认 GIS 基础工具位置
				 * 一定注意修改对应的自定义 GIS 基础组件 Full 和业务组件 FloodRouting 下 DimensionConversion 组件的展示位置
				 * 以确保默认 GIS 基础工具与自定义添加的 GIS 基础工具位置的一致性和正确性
				 * 修改入口在文件夹 MapContainerCom 下的 index.less 中
				 */
				// view.ui.padding = {
				// 	left: 15,
				// 	top: 60,
				// 	right: 15,
				// 	bottom: 15
				// }
				resolve(view)
			}).catch(err => {
				reject(err)
			})
	})
}

/**
 * @author duxx
 * @desc 创建 map 对象
 */
export function constructMap(baseMapLayers) {
	return new Promise((resolve, reject) => {
		esriLoader.loadModules([
			'esri/Map',
			'esri/layers/TileLayer',
			// 'esri/layers/support/TileInfo',
			'dojo/domReady!'], arcgisVersion).then(([
				Map,
				TileLayer,
				// TileInfo,
			]) => {
				const mapObj = new Map()

				// const tileInfoParam = new TileInfo(tileInfo)
				// 添加基础底图
				if (baseMapLayers!.length > 0) {
					baseMapLayers.forEach(item => {
						let baseLayer
						switch (item.type) {
							case 'tianditu':
								addTiandituBaseMapLayers(item).then((layer) => {
									mapObj.add(layer)
								})
								break
							case 'TileLayer':
								baseLayer = new TileLayer({
									url: item.url,
									id: item.id,
									visible: item.visible,
								})
								break
							default:
								console.error('base map type error or base map type can not add success!')
						}
						mapObj.add(baseLayer)
					})
				}
				resolve(mapObj)
			}).catch(err => {
				reject(err)
			})
	})
}




/** arcgis 初始化相关方法 */
export default {
	constructMap,
	constructView
}



