# vanilla-antd-message
Lightweight(Only 2kb including Javascript and CSS after gzip), antd like message component.  
Used for display global messages on your site.
Writting with vanilla Javascript, Zero dependencies.  
Inspired by [Ant Design](https://ant.design/components/message/)

# Demo
[Try it out](https://minimalistying.github.io/messagedemo.html)

# Support
Modern browsers and Internet Explorer 10+.

# Installation
```
npm i vanilla-antd-message --save
```

# Quickstart
Using `NPM` and `Webpack` :
```js
import message from 'vanilla-antd-message'
import 'vanilla-antd-message/dist/style.css'

message.info('Info Message')
message.success('Success Message')
message.error('Error Message')
message.warn('Warn Message')
```
Directly using through `<script>`
```
Message.default.info('Info Message')
Message.default.success('Success Message')
Message.default.error('Error Message')
Message.default.warn('Warn Message')
```

# API
```js
/**
* @params content {String} The message to show
* @params duration {Number} How long the message will show, default is 3000ms
* @params onClose {Function} The callback function when message end
**/
message.info(content, [duration], onClose)
message.success(content, [duration], onClose)
message.error(content, [duration], onClose)
message.warn(content, [duration], onClose)
```
