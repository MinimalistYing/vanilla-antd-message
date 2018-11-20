import 'core-js/fn/promise'
import qs from 'query-string'
import axios from 'axios'
import Noty from 'noty'

import message from '@/vanilla-antd-message'
import '@/vanilla-antd-message/style.less'
import renderi18n, { i18n } from '@/js/i18n/i18n-static'
import { isForeign } from '@/js/i18n/lang'

import axiosConfig from '../../js/axios-config'

import '../../style/main.less'
import './login.less'

(() => {
	renderi18n() // 国际化
	// 请求配置（各种环境有所区分）
	axiosConfig()

	Noty.overrideDefaults({
		layout: 'topCenter',
		theme: 'semanticui',
		timeout: 2000
	})

	const switchType = document.getElementById('switch-type')
	const switchTypeDesc = document.getElementsByClassName('switch-type-desc')[0]
	const phoneWrap = document.getElementById('login-by-phone')
	const codeWrap = document.getElementById('login-by-code')

	let type = 'phone' // 登录类型 默认为手机号登录 支持 phone|code 俩种形式

	switchType.addEventListener('click', () => { // 点击切换登录方式
		phoneWrap.classList.toggle('active')
		codeWrap.classList.toggle('active')
		switchTypeDesc.classList.toggle('code')
		switchTypeDesc.classList.toggle('phone')
		if (type === 'phone') { // 当前为手机号登录
			type = 'code'
			switchTypeDesc.innerHTML = i18n.MULTI_AA0100
		} else if (type === 'code') { // 当前为店铺编码登录
			type = 'phone'
			switchTypeDesc.innerHTML = i18n.MULTI_AA0099
		}
	})

	let isLoading = false // 避免重复发起多次登录请求

	function logIn() {
		const search = qs.parse(window.location.search)

		if (isLoading) {
			return
		}

		if (type === 'phone') { // 手机号登录
			const username = document.getElementById('phone-number').value.trim()
			const password = document.getElementById('phone-password').value.trim()
			if (username && password) {
				isLoading = true
				axios.post('portal/mall/login.json', {
					type: 1,
					username,
					password
				}).then(res => {
					localStorage.setItem('X-Token', res)
					localStorage.setItem('LogInType', type)
					window.location.href = `./select-shop.html${window.location.search}`
				}).catch(err => {
					new Noty({
						type: 'error',
						text: err.message
					}).show()
					isLoading = false
				})
			} else {
				message.error(i18n.MULTI_AA0101)
				// message.info(i18n.MULTI_AA0101)
				// new Noty({
				// 	type: 'error',
				// 	text: i18n.MULTI_AA0101
				// }).show()
			}
		} else if (type === 'code') { // 店铺编码登录
			const username = document.getElementById('code-username').value.trim()
			const password = document.getElementById('code-password').value.trim()
			const shopCode = document.getElementById('shop-code').value.trim()
			if (username && password && shopCode) {
				isLoading = true
				axios.post('portal/mall/login.json', {
					type: 2,
					username,
					password,
					shopCode
				}).then(res => {
					localStorage.setItem('X-Token', res)
					localStorage.setItem('LogInType', type)
					axios.get('portal/mall/loginUserInfo.json').then(user => {
						localStorage.setItem('userInfo', JSON.stringify(user))
						// 国际版页面目前只能跳转至报表页面
						window.location.href = isForeign() ? './report.html' : `${search.src || '/'}`
					}).catch(err => {
						new Noty({
							type: 'error',
							text: err.message
						}).show()
					})
				}).catch(err => {
					new Noty({
						type: 'error',
						text: err.message
					}).show()
					isLoading = false
				})
			} else {
				new Noty({
					type: 'error',
					text: i18n.MULTI_AA0102
				}).show()
			}
		}
	}

	document.getElementById('login-btn').addEventListener('click', logIn)
	document.body.addEventListener('keypress', e => {
		if (e.keyCode === 13) {
			logIn()
		}
	})
})()
