/*!
 * Base On jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 * Libs: lemons lightBox
 * Copyright 2012 lemons
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 */

(function($) {
	var lightBox = {
		defaults: {
			model: false,
			hasClose: true,
			confirmTxt:"",
			confirmUrl:"",
			fixed:false,
			opacity:"0.5",
			callback:function(){}	
		}
	};
	function LightBox(root, defaults) {
		var self = this,
		boxObj = root;

		$.extend(this, {
			setModel: function() {
				var modelHtml = "<div id='boxModel'></div>",
				wW = $(window).width(),
				bH = $(document).height();
				$("body").append(modelHtml);
				var boxModel = $("#boxModel");
				boxModel.width(wW).height(bH).css("opacity",defaults.opacity).show();

				//移动端支持
				if((/(android|iPhone|iPad|iPod|mobile)/ig).test(navigator.userAgent)){
					boxModel.live("touchstart",function(){
			        	boxObj.remove();
			        	boxModel.remove();
			        }) 
				}else{
					boxModel.live("click",function(){
			        	boxObj.remove();
			        	boxModel.remove();
			        }) 
				}
			},
			setPosition: function() {
				if(typeof boxObj == "string"){
					if($("body").find("#popBox").length!=0){
					    $("#popBox").remove();
					 }
					var str="<div id='popBox'>"+boxObj+"</div>";
					$("body").append(str);
					boxObj=$("#popBox");
				}
				var wW = $(window).width(),
				wH = $(window).height(),
				wScrollTop = $(window).scrollTop(),				
				bW = boxObj.width(),
				bH = boxObj.height(),
				bLeft = (wW - bW) / 2,
				bTop = (wH - bH) / 2 + wScrollTop;

				var fixedTop=(wH - bH) / 2;
				//var ie6=$.browser.msie && $.browser.version==6;
				//if(defaults.fixed && !ie6){
				if(defaults.fixed){
					boxObj.css({"position":"fixed"});
					bTop=fixedTop;
				}
				boxObj.css({
					"left": bLeft + "px",
					"top": bTop + "px"
				}).show("fast",function(){
					defaults.callback();
				});


			},
			setClose: function() {
				var closeObj = "<a class='closeBtn' href='javascript:;'>关闭</a>";
				if(!boxObj.find(".closeBtn").length){
					boxObj.append(closeObj);
				}
				boxObj.find(".closeBtn").live("click", function() {
					boxObj.remove();
					if (defaults.model) {
						$("#boxModel").remove();
					}
					return false;
				})
			},
			setConfirm:function(){
				var confirmObj="<a class='confirmBtn' href='javascript:;'>"+defaults.confirmTxt+"</a>",
				    confirmUrl=defaults.confirmUrl;
				boxObj.append(confirmObj);	
				boxObj.find(".confirmBtn").live("click", function() {
					boxObj.hide();
					if (defaults.model) {
						$("#boxModel").remove();
					}
					if(defaults.confirmUrl!==""){
						location.href=defaults.confirmUrl;
					}
					else{
					   return false;
					}
				})
			},
			setResize:function(){
				$(window).resize(function() {
					var boxModel=$("#boxModel");
					if(boxModel.length){
						var wW = $(window).width();
						boxModel.width(wW);
					}

				});
			},
			init: function() {
				this.setPosition();
				defaults.model ? self.setModel() : "";
				defaults.hasClose ? self.setClose() : "";
				defaults.confirmTxt? self.setConfirm(): "";
			}
		})
		self.init();
		self.setResize();

	}

	$.fn.lightBox = function(defaults) {
		defaults = $.extend({},
		lightBox.defaults, defaults);
		return this.each(function() {
			el = new LightBox($(this), defaults);
		})

	}
	
	$.cs = {
		lightBox: function(obj, defaults) {
			defaults = $.extend({},
			lightBox.defaults, defaults);
			new LightBox(obj, defaults);
		}
	}
	$.cs = $.cs || {};
	$.cs.lightBox = function(obj, defaults) {
		defaults = $.extend({},
		lightBox.defaults, defaults);
		new LightBox(obj,defaults);
	}	
})(jQuery);

