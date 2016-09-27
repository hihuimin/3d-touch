'use strict'

var FRAME_WIDTH  = 988 / 4,
	FRAME_HEIGHT = 1164 / 6,
	MASK_WIDTH   = 146

function $(sel) {
	return document.querySelectorAll(sel)
}

/**
 * 更新界面
 */
var ui = {
	update: function(val) {
		this.force = val
		this._updateForceVal()
		this._scaleBtnMask()
		this._makeSlothLaugh()
	},
	_updateForceVal: function() {
		$('#force_val')[0].innerHTML = this.force == -1 ? '不支持 3D Touch :(' : this.force
	},
	_scaleBtnMask: function() {
		var scale = 1 + Math.ceil(this.force * 100) / MASK_WIDTH
		$('#btn_mask')[0].style.webkitTransform = 'scale(' + scale + ')'
	},
	_makeSlothLaugh: function() {
		var frame = Math.max(1, Math.ceil(this.force * 24)),
		    posX = ((frame - 1) % 4) * -FRAME_WIDTH,
		    posY = Math.floor((frame - 1) / 4) * -FRAME_HEIGHT

		$('#sloth')[0].style.backgroundPosition = posX + 'px ' + posY + 'px'
	}
}

//GO
new ThreeDTouch($('#force_btn')[0], function(force) {
	ui.update(force)
})
