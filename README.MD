## OCask.js    -- A cask layout to show your photo album.
### ScreenShot
![default](https://github.com/wuzhouyang/OCask.js/blob/master/screenShot/default.png)
### Usage
``` bash
  npm install ocask.js --save
```
If you use the webpack or es6,you can use
``` javascript
  var OCask = require('ocask.js')
  // or
  import OCask from 'ocask.js'
```
You can use the minify javscript on your html.
``` html
  <body>
    ...
    <script src="ocask.min.js"></script>
  </body>
```
### Config
* **container** : container's element  
* **baseHeight** : row's minimum height,default with `200px`  
* **imgArr** : an array which store all the urls for image that you want to show  
* **isGap** : how to show the last row's images, baseHeight with true, container's width with `false`, default with `false` 
* **rowClass** : add your own style class on every rows that contain the image  
* **imgClass** : add your own style class on every images   
* **responsive** : set the images to adjust the container 
* **lightGallery** : enable to integrate [lightgallery.js](https://github.com/sachinchoolur/lightgallery.js),default with `false`
* **lightGalleryConf** : some config of the [lightgallery.js](https://github.com/sachinchoolur/lightgallery.js),default with `{}`
### Example
``` css
  #ex{
      width: 1200px;
      margin:auto;
      margin-top: 50px;
  }

  .shadow{
      box-shadow: 0 0 50px rgba(0,0,0,0.8);
  }
```
``` javascript
  var oc=new ocask({
      container:document.getElementById('ex'),
      baseHeight:200,
      imgArr:[
          'http://imgsrc.baidu.com/baike/pic/item/b151f8198618367a608c040a2b738bd4b21ce5e4.jpg',
          'http://imgcache.cjmx.com/star/201605/20160530131804447.jpg',
          'http://www.cnidea.net/toutiao/u/20160701/161822310132588621419.jpg',
          'http://gb.cri.cn/mmsource/images/2011/06/29/ab20110629213.jpg',
          'http://www.lzbs.com.cn/images/2006-07/01/sat200D.JPG',
          'http://img.kj-cy.cn/uploads/litimg/20160411/1460363212437848.jpg',
          'http://singerimg.kugou.com/uploadpic/softhead/400/20140219/20140219104100727871.jpg',
          'http://vpic.video.qq.com/82684169/t0344b49der_ori_3.jpg',
          'http://a4.att.hudong.com/37/75/01100000000000144730751999065_s.jpg',
          'http://imgsrc.baidu.com/forum/w=580/sign=9a2f5024bf99a9013b355b3e2d950a58/c124bc315c6034a8dbc034b1cc134954092376e5.jpg',
          'http://imgsrc.baidu.com/forum/pic/item/0494a4c27d1ed21b94e8ac09ad6eddc451da3f3d.jpg',
          'http://www.ym360.cn/upload/img/3716338.jpg'
      ],
      isGap:false,
      imgClass:'shadow'
  })
  oc.getImgs()
```
It look like:  

![default_css](https://github.com/wuzhouyang/OCask.js/blob/master/screenShot/default_css.png)

### Gap
If you don't want to show the last row with full width, you can set the `isGap` to be `true`, and it will look like  

![gap](https://github.com/wuzhouyang/OCask.js/blob/master/screenShot/gap.png)

### Responsive
If you want to make the image to adapt the container's width when you use the CSS3 Media Queries, you can set the `responsive` to be `true`, this is the example:  

``` css
  #ex{
      width: 1200px;
      margin:auto;
      margin-top: 50px;
      margin-bottom: 50px;
  }

  @media screen and (max-width:768px){
      #ex{
          width: 600px;
      }
  }
```
``` javascript
  var oc=new OCask({
      ...
      responsive: true
  })
  oc.getImgs()
```
When you resize the web page, it will respond automatically, like:  

![responsive](https://github.com/wuzhouyang/OCask.js/blob/master/screenShot/responsive.png)

### lightgallery
lightgallery.js is a Full featured JavaScript image & video gallery. If you want to integrate it with your project,you should:
``` bash
  npm install lightgallery.js --save
```
And then use it like:
``` html
  <head>
      ...
      <link rel="stylesheet" href="lightgallery.min.css">
      ...
  </head>
  <body>
      ...
      <script src='lightgallery.min.js'></script>
      <script src="ocask.min.js"></script>
      ...
  </body>
```
Or if you use the webpack or es6,you can use
``` javascript
  import 'lightgallery.js'
```
Then make a ocask config like:
``` javascript
  var oc=new OCask({
      ...
      lightGallery:true,
      lightGalleryConf:{
          speed:'100',
          ...
      }
  })
```
And you can use the lightgallery.js happily
!(lightgallery)[https://github.com/wuzhouyang/OCask.js/blob/master/screenShot/lightgallery.png]

### Callback
You can do somethings after all the images have loaded like
``` javascript
  oc.getImgs(function(){
    ...
  })
```