const antmessage = document.createElement('div')

function Message() {
	antmessage.classList.add('vanilla-antd-message')
	document.body.appendChild(antmessage)
}

Message.prototype.show = function (content, duration = 3000, type = 'info') {
	const contentBox = document.createElement('div')
	const contentDom = document.createElement('span')
	const icon = document.createElement('i')
	icon.classList.add(type)
	icon.classList.add('vanilla-antd-message-icon')
	contentDom.innerText = content
	contentBox.classList.add('vanilla-antd-content-box')
	contentBox.classList.add('animate-in')
	contentBox.appendChild(icon)
	contentBox.appendChild(contentDom)
	contentBox.style.top = `${this.count * 50}px`
	antmessage.appendChild(contentBox)

	this.count++

	// remove message box after duration
	setTimeout(() => {
		contentBox.classList.add('animate-out')
		setTimeout(() => {
			antmessage.removeChild(contentBox)

			const boxs = document.querySelectorAll('.vanilla-antd-content-box')
			for (let i = 0; i < boxs.length; i++) {
				boxs[i].style.top = `${parseInt(boxs[i].style.top, 10) - 50}px`
			}
			this.count--
		}, 300)
	}, duration)
};

// API
['success', 'error', 'warn', 'info'].map(method => {
	Message.prototype[method] = function (content, duration) {
		this.show(content, duration, method)
	}
})

// the count of messages already exist
Message.prototype.count = 0

export default new Message()
