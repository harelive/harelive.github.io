var backimg=["url(/img/背景图片/原神3.0壁纸.jpg)","url(/img/背景图片/元旦贺图2560x1440.jpg)","url(/img/背景图片/原神壁纸5.jpg)","url(/img/背景图片/放課後ティータイム.jpg)","url(/img/背景图片/放課後ティータイム2.jpg)","url(/img/背景图片/放課後ティータイム3.jpg)"],bgindex=Math.floor(Math.random()*backimg.length);document.getElementById("web_bg").style.backgroundImage=backimg[bgindex];