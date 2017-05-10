/**
 * OCask.js by oceania
 * A gallery layout with image
 * 
 * config
 * -----------------
 * container : container's element
 * baseHeight : row's minimum height,default with 200px
 * imgArr : an array which store all the urls for image that you want to show
 * isGap : how to show the last row's images, baseHeight with true, container's width with false,default with false
 * responsive : show better layout when you resize the web page, default with false
 * rowClass : add your own style class on every rows that contain the image
 * imgClass : add your own style class on every images 
 */
(function (root, fac) {
    "use strict"
    if (typeof module === 'object' && module.exports) {
        module.exports = fac()
    } else {
        root.OCask = fac()
    }
})(typeof window !== 'undefined' ? window : this, function () {
    var OCask = function (ocaskConf) {
        this.container = ocaskConf.container
        this.conWidth = this.container.offsetWidth
        this.baseHeight = ocaskConf.baseHeight || 200
        this.imgArr = ocaskConf.imgArr
        this.isGap = ocaskConf.isGap
        this.responsive = ocaskConf.responsive
        this.rowClass = ocaskConf.rowClass || ''
        this.imgClass = ocaskConf.imgClass || ''
        this.rowArr = []
        this.cacheImg = []
        this.cacheImgRow = []
    }
    function _setRow(ctx, img, imgIndex) {
        var newRowW = 0
        var newRowH = 0
        var _this = ctx
        _this.rowArr.push(img)
        for (var i = 0; i < _this.rowArr.length; i++) {
            newRowW += _this.rowArr[i].width
            if (newRowW > _this.conWidth) {
                _this.rowArr.pop()
                if (i !== 0) {
                    newRowW = newRowW - img.width
                    newRowH = _this.conWidth * (_this.baseHeight / newRowW)
                    _genRow(_this, newRowH, false, false)
                } else if (i === 0) {
                    _genRow(_this, _this.conWidth, true, false)
                }
                _this.rowArr = [img]
            }
        }
        if (_this.rowArr.length !== 0 && imgIndex === _this.imgArr.length - 1) {
            if (_this.rowArr.length === 1) {
                _genRow(_this, _this.conWidth, true, false)
                return
            }
            if (_this.isGap) {
                newRowH = _this.baseHeight
                _genRow(_this, newRowH, false, true)
            } else {
                newRowH = _this.conWidth * (_this.baseHeight / newRowW)
                _genRow(_this, newRowH, false, false)
            }
        }
    }
    function _genRow(ctx, rowFlag, isOne, lastOne) {
        var _this = ctx
        var imgRow = document.createElement('div')
        imgRow.style.whiteSpace = "nowrap"
        var tempWidthArr = []
        var tempHeight = 0
        for (var i = 0; i < _this.rowArr.length; i++) {
            var img = _this.rowArr[i]
            if (!isOne) {
                var tempWidth = Math.round(img.scale * rowFlag)
                tempWidthArr.push(tempWidth)
                tempHeight = Math.round(rowFlag)
                if (!lastOne && i === _this.rowArr.length - 1) {
                    var j = i + 1
                    var resultWidth = 0
                    while (j--) {
                        resultWidth += tempWidthArr[j]
                    }
                    var diffWidth = _this.conWidth - resultWidth
                    if (diffWidth > 0 || diffWidth < 0) {
                        tempWidth += diffWidth
                    }
                }
                img.dom.height = tempHeight
                img.dom.width = tempWidth
            } else {
                tempHeight = Math.round(img.height / img.width * rowFlag)
                img.dom.width = rowFlag
                img.dom.height = tempHeight
            }
            _this.imgClass ? img.dom.setAttribute('class', _this.imgClass) : {}
            imgRow.style.height = tempHeight + 'px'
            _this.rowClass ? imgRow.setAttribute('class', _this.rowClass) : {}
            imgRow.appendChild(img.dom)
        }
        _this.container.appendChild(imgRow)
        _this.cacheImgRow.push(imgRow)
    }
    function _resize(ctx) {
        window.onresize = function () {
            if (ctx.container.offsetWidth !== ctx.conWidth) {
                ctx.conWidth = ctx.container.offsetWidth
                ctx.rowArr = []
                var containerNodes = ctx.container.childNodes
                for (var i = containerNodes.length - 1; i >= 0; i--) {
                    ctx.container.removeChild(containerNodes[i])
                }
                for (var i = 0; i < ctx.cacheImg.length; i++) {
                    _setRow(ctx, ctx.cacheImg[i], i)
                }
            }
        }
    }
    OCask.prototype = {
        getImgs: function () {
            var _this = this
            if (_this.imgArr.length !== 0) {
                var imgLoadRecur = function (imgIndex) {
                    var imgTemp = new Image()
                    imgTemp.src = _this.imgArr[imgIndex]
                    imgTemp.onload = (function (imgTemp) {
                        imgIndex === _this.imgArr.length - 1 && _this.responsive ? _resize(_this) : {}
                        return function () {
                            var scale = imgTemp.width / imgTemp.height
                            var img = {
                                dom: imgTemp,
                                scale: scale,
                                height: _this.baseHeight,
                                width: _this.baseHeight * scale
                            }
                            _setRow(_this, img, imgIndex)
                            _this.cacheImg.push(img)
                            _this.imgArr[imgIndex + 1] ? imgLoadRecur(imgIndex + 1) : {}
                        }
                    })(imgTemp)
                }
                imgLoadRecur(0)
            }
        }
    }
    return OCask
})

