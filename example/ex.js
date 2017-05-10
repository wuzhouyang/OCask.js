var oc=new OCask({
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
    imgClass:'shadow',
    responsive: true,
    lightGallery:true,
    lightGalleryConf:{
        speed:'100'
    }
})

oc.getImgs()