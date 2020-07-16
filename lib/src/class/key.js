'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Key = void 0
const verifys_1 = require('../function/verifys')
class Key {
	constructor(options) {
		this.key = options.key
		this._data = verifys_1.isKeyData(options.data) ? options.data : {}
		this._send = verifys_1.isSend(options.send) ? options.send : () => {}
	}
	set(field, value) {
		if (verifys_1.isField(field) && verifys_1.isSBNtype(value)) {
			this._data[field] = value
		}
	}
	get(field) {
		if (verifys_1.isField(field)) {
			return this._data[field]
		}
	}
	remove(field) {
		if (verifys_1.isField(field) && this._data[field]) {
			delete this._data[field]
		}
	}
	setData(data) {
		if (verifys_1.isKeyData(data)) {
			this._data = data
			return this._data
		}
	}
	getData() {
		return this._data
	}
	clear() {
		Object.keys(this._data).forEach((_key) => {
			this.remove(_key)
		})
	}
	send() {
		let sendData = { ...this._data }
		this._send(this.key, sendData)
		this.clear()
		return sendData
	}
}
exports.Key = Key