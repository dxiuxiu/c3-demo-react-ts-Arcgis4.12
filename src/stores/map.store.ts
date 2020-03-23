
import {
    observable,
    action,
    // computed
} from 'mobx'


class MapStore {

    /**
     * @desc map 对象是否创建成功
     *
     * @type {boolean}
     * @memberof MapStore
     */
    @observable
    mapLoaded: boolean = false

    /**
     * @desc view 相关参数创建
     *
     * @type {boolean}
     * @memberof MapStore
     */
    @observable
    viewConfigLoaded: boolean = false


    @action
    onMapCreate = (mapParam) => {
        global.map = mapParam
        this.mapLoaded = true
    }
    @action
    onViewConfigCreate = (viewConfig) => {
        global.viewConfig = viewConfig
        this.viewConfigLoaded = true
    }
}

export default new MapStore()