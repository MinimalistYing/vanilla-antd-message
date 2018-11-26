# vanilla-antd-message
Lightweight(Only 5kb including Javascript and CSS before gzip), antd like message component.  
Used for display global messages on your site.
Writting with vanilla Javascript, Zero dependencies.  
Inspired by [Ant Design](https://ant.design/components/message/)

# Demo
[Try it out](https://minimalistying.github.io/#/messagedemo)

# Support
Modern browsers and Internet Explorer 10+.

# Installation
```
npm i vanilla-antd-message --save
```

# Quickstart
```js
import message from 'vanilla-antd-message'
import 'vanilla-antd-message/dist/style.css'

message.info('Info Message')
message.success('Success Message')
message.error('Error Message')
message.warn('Warn Message')
```

# API
```js
/**
*	@params content {String} The message to show
*   @params duration {Number} How long the message will show, default 3000ms
**/
message.info(content, [duration])
message.success(content, [duration])
message.error(content, [duration])
message.warn(content, [duration])
```
