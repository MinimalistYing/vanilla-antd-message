"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var antmessage = document.createElement('div');

function Message() {
  antmessage.classList.add('vanilla-antd-message');
  document.body.appendChild(antmessage);
}

Message.prototype.show = function (content) {
  var _this = this;

  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
  var contentBox = document.createElement('div');
  var contentDom = document.createElement('span');
  var icon = document.createElement('i');
  icon.classList.add(type);
  icon.classList.add('vanilla-antd-message-icon');
  contentDom.innerText = content;
  contentBox.classList.add('vanilla-antd-content-box');
  contentBox.classList.add('animate-in');
  contentBox.appendChild(icon);
  contentBox.appendChild(contentDom);
  contentBox.style.top = "".concat(this.count * 50, "px");
  antmessage.appendChild(contentBox);
  this.count++;
  setTimeout(function () {
    contentBox.classList.add('animate-out');
    setTimeout(function () {
      antmessage.removeChild(contentBox);
      var boxs = document.querySelectorAll('.vanilla-antd-content-box');

      for (var i = 0; i < boxs.length; i++) {
        boxs[i].style.top = "".concat(parseInt(boxs[i].style.top, 10) - 50, "px");
      }

      _this.count--;
    }, 300);
  }, this.duration);
};

Message.prototype.success = function (content) {
  this.show(content, 'success');
};

Message.prototype.error = function (content) {
  this.show(content, 'error');
};

Message.prototype.warn = function (content) {
  this.show(content, 'warn');
};

Message.prototype.info = function (content) {
  this.show(content, 'info');
};

Message.prototype.duration = 3000;
Message.prototype.count = 0;

var _default = new Message();

exports.default = _default;