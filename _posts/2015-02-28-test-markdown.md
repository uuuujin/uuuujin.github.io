---
title: iframe postMessage() javascript
layout: post
subtitle: Each post also has a subtitle
categories: markdown
tags:
- test
---

iframe 에서 다른 도메인끼리 값을 넘길때, 
iframe 에서 같은 도메인끼리 값을 넘길때,

## 같은 도메인
```html
<iframe id="sample_iframe" frameborder="0" height="1052px" marginheight="0" marginwidth="0" src="http://dev1.uuuujin.github.io" width="100%"></iframe>
<script> 
	let iframe = document.querySelector("#sample_iframe"); 
	iframe.addEventListener('load', function() {   //load 될때
		iframe.style.height = iframe.contentDocument.body.scrollHeight + 'px'; 
		iframe.style.width = iframe.contentDocument.body.scrollWidth + 'px'; 
	}); 
</script>
```

## 다른 도메인



How about a yummy crepe?

![Crepe](https://s3-media3.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/348s.jpg)

It can also be centered!

![Crepe](https://s3-media3.fl.yelpcdn.com/bphoto/cQ1Yoa75m2yUFFbY2xwuqw/348s.jpg){: .center-block :}

Here's a code chunk:

~~~
var foo = function(x) {
  return(x + 5);
}
foo(3)
~~~

And here is the same code with syntax highlighting:

```javascript
var foo = function(x) {
  return(x + 5);
}
foo(3)
```

And here is the same code yet again but with line numbers:

{% highlight javascript linenos %}
var foo = function(x) {
  return(x + 5);
}
foo(3)
{% endhighlight %}

## Boxes
You can add notification, warning and error boxes like this:

### Notification

{: .box-note}
**Note:** This is a notification box.

### Warning

{: .box-warning}
**Warning:** This is a warning box.

### Error

{: .box-error}
**Error:** This is an error box.
