"use strict";$(function(){$("#slider").lightSlider({adaptiveHeight:!0,auto:!0,item:1,slideMargin:0,loop:!0,pauseOnHover:!0,controls:!1,pager:!1})}),$("#dropMenu").hide(),$("#medicalDevices").mouseenter(function(){$("#dropMenu").show()}),$("#medicalDevices").mouseleave(function(){$("#dropMenu").hide()}),jQuery(function(e){var i=e("#fixedNav");e(window).scroll(function(){i["fade"+(400<e(this).scrollTop()?"In":"Out")](500)})}),$(document).ready(function(){$("#actualProduct__slider, #saleProduct__slider").lightSlider({autoWidth:!0,adaptiveHeight:!0,loop:!0,slideMargin:15,prevHtml:'<i class="fas fa-chevron-left"></i>',nextHtml:'<i class="fas fa-chevron-right"></i>',pager:!1,onSliderLoad:function(){$("#actualProduct__slider, #saleProduct__slider").removeClass("cS-hidden")}})}),$(function(){$("a#deliveryPopup").click(function(e){e.preventDefault(),$("#overlay").fadeIn(400,function(){$("#delivery").css("display","block").animate({opacity:1,top:"35%"},200)})}),$("#deliveryClose, #overlay").click(function(){$("#delivery").animate({opacity:0,top:"35%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$(function(){$("a#authorizationPopup").click(function(e){e.preventDefault(),$("#overlay").fadeIn(400,function(){$("#authorization").css("display","block").animate({opacity:1,top:"35%"},200)})}),$("#overlay").click(function(){$("#authorization").animate({opacity:0,top:"35%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$("#medDev__accordeon ul").hide().prev().click(function(){$(this).parents("#medDev__accordeon").find("ul").not(this).slideUp().prev().removeClass("active"),$(this).next().not(":visible").slideDown().prev().addClass("active")});