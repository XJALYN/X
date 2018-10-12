const net = require('./profile_net');
const event = require('./profile_event_new');
const extend = require("../../utils/extend.js")

const app = getApp()

const options = {
	data: {
		contact: '',
		idnumber: '',
		email: '',
		address: '',
		areaInfo: [[], [], []],
		region: [null, null, null], // 省市区,
		showRegion: '请选择省市区',
		isiOS: true
	},
	onLoad(optons) {
		const { from, id, type } = optons; // 来自支付页面，保存后返回支付页面
		this.from = from;
		this.orderId = id;
		this.orderType = type;

		wx.util.showLoading(this);
		this.getUserInfo().then(res => {
			const {
				code,
				data
			} = res;
			if (+code === 200) {
				this.setData({
					contact: data.contact || '',
					idnumber: data.idnumber || '',
					email: data.email || '',
					address: data.address || '',
					// region: [(data.province || '-'), (data.city || '-'), (data.district || '-')],
				})

				if (data.province || data.city || data.district) {
					this.setData({
						showRegion: `${data.province || ''} ${data.city || ''} ${data.district}`
					})
				}
				this.initAreaInfo(data.provinceId, data.cityId, data.districtId); // 初始化地区信息
				wx.util.hideLoading(this);
			}
		})

		const res = wx.getSystemInfoSync();
		this.setData({
			isiOS: res.system.toLocaleUpperCase().indexOf('IOS') !== -1
		})
	},
}

Page(extend(options, event, net))
