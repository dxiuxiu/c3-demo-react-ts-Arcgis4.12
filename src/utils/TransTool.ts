/**
 * @author duxx
 * @desc 一些列转换工具
 */
export default {
	timeTrans: (timeStamp) => {
		const date = new Date(timeStamp)
		const Y = date.getFullYear()
		const M = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
		const D = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()
		const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
		const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
		const s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
		return `${Y}-${M}-${D} ${h}:${m}:${s}`
	},
	/**
	 * @desc 去除字符中空格
	 * @param str 操作对象
	 * @param global 是否去除全部空格： true - 去掉全部, false - 去掉两端
	 */
	trim: (str: string, global = true) => {
		let result
		result = str.replace(/(^\s+)|(\s+$)/g, '')
		if (global) {
			result = result.replace(/\s/g, '')
		}
		return result
	},
}
