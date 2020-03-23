
/** 应用程序中地图相关功能配置文件 - 开发人员使用 */
const mapConfig = {
	rotationStorageKey: 'cf_yzt_isRotateOn', // 存储地球是否旋转的 localStorage key 值 - 用于标识初始打开应用时是否有飞行动画效果
	gisMode: '3D', // 3D |2D  - 表示是使用三维平台还是二维平台
	/** 基础的底图，可进行切换，默认为影像地图 */
	baseMapLayers: [
		// 天地图矢量底图
		{
			url: `https://{subDomain}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={col}&TILEROW={row}&TILEMATRIX={level}&tk=871d4cd31ca475ac00f30fd7c563b61d`,
			subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
			id: 'tdtVec',
			isBaseMap: true, // 是否为底图，注记为非底图
			type: 'tianditu',
			visible: true,
			title: '天地图矢量',
			index: 4
		},
		// 天地图矢量注记
		{
			url: `https://{subDomain}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={col}&TILEROW={row}&TILEMATRIX={level}&tk=871d4cd31ca475ac00f30fd7c563b61d`,
			subDomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
			id: 'tdtVec_anno',
			isBaseMap: false, // 是否为底图，注记为非底图
			type: 'tianditu',
			visible: true,
			title: '天地图矢量注记',
			index: 5
		}
	],
	/** 其它默认需要加载的地图服务,如边界服务，地形数据等 */
	defaultLayers: [
		// 全球高程数据
		{
			url: 'http://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
			id: 'initElevationLayer',
			type: 'ElevationLayer',
			isDefaultMap: true,
			title: 'initElevationLayer',
			index: 8
		}
	],
	/** 不旋转时的初始化范围  */
	initExtent: {
		xmin: 12747334.649049778,
		ymin: 5072698.609858993,
		xmax: 13715515.479772516,
		ymax: 5648463.525126936,
		spatialReference: {
			wkid: 3857
		}
	},

	/** 旋转时起始范围 */
	/* startExtent: {
		xmin: 0,		
		ymin: 0,
		xmax: 0,
		ymax: 0,
		spatialReference: {
			wkid: 3857
		}
	}, */

	/**
	 * 视点
	 * 三维初始化范围
	 */
	initViewpoint: {
		'scale': 2333114.484114623,
		'targetGeometry': {
			'spatialReference': {
				'latestWkid': 3857,
				'wkid': 102100
			},
			'x': 12165400.61182073,
			'y': 4001912.043254538,
			'z': 1487.7726536830887
		},
		'camera': {
			'position': {
				'spatialReference': {
					'latestWkid': 3857,
					'wkid': 102100
				},
				'x': 12165381.747863537,
				'y': 3993820.971532919,
				'z': 878421.7299641967
			},
			'heading': 0,
			'tilt': 0
		}
	},
	// initViewpoint: {
	// 	'scale': 397481.59949832485,
	// 	'targetGeometry': {
	// 		'spatialReference': {
	// 			'latestWkid': 3857,
	// 			'wkid': 102100
	// 		},
	// 		'x': 12300534.197898502,
	// 		'y': 2855172.887746587,
	// 		'z': -7.8930303025990725
	// 	},
	// 	'camera': {
	// 		'position': {
	// 			'spatialReference': {
	// 				'latestWkid': 3857,
	// 				'wkid': 102100
	// 			},
	// 			'x': 13216618.057637345,
	// 			'y': 5367857.519671853,
	// 			'z': 784383.3421379356
	// 		},
	// 		'heading': 0,
	// 		'tilt': 0
	// 	}
	// },

}
// if (typeof (ConfigExt) !== 'undefined') {
// 	Object.assign(Config, ConfigExt)
// }

export default mapConfig
