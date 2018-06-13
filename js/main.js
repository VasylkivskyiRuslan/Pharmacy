"use strict";function initCycleActual(){var e=$(document).width();e<768?$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:1,swipe:!0,swipeFx:"carousel",prev:".prevActual",next:".nextActual"}):768<e&&e<980?$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:2,prev:".prevActual",next:".nextActual"}):980<e&&e<1300?$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:3,prev:".prevActual",next:".nextActual"}):1300<e&&e<1800?$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:4,prev:".prevActual",next:".nextActual"}):$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:5,prev:".prevActual",next:".nextActual"})}function reinit_cycle_actual(){var e=$(window).width();e<768?($("#slideshowActual").cycle("destroy"),reinitCycleActual(1)):768<e&&e<980?($("#slideshowActual").cycle("destroy"),reinitCycleActual(2)):980<e&&e<1300?($("#slideshowActual").cycle("destroy"),reinitCycleActual(3)):1300<e&&e<1800?($("#slideshowActual").cycle("destroy"),reinitCycleActual(4)):($("#slideshowActual").cycle("destroy"),reinitCycleActual(5))}function reinitCycleActual(e){$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",next:".nextActual",prev:".prevActual",swipe:!0,swipeFx:"carousel",carouselVisible:e})}$(document).ready(function(){$("#slideshow").cycle({fx:"scrollHorz",pauseOnHover:!0,swipe:!0,speed:500})}),$(document).ready(function(){$("a#authorizationPopup").click(function(e){e.preventDefault(),$("#overlay").fadeIn(400,function(){$("#personalCabinet").css("display","block").animate({opacity:1,top:"35%"},200)})}),$("#overlay").click(function(){$("#personalCabinet").animate({opacity:0,top:"35%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$("#authorTabs").tabs(),jQuery.validator.addMethod("checkMask",function(e,i){return/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g.test(e)}),$(".js-phone").mask("+380(99)999-9999",{autoclear:!1}),$.validator.addMethod("lettersEng",function(e,i){return this.optional(i)||e==e.match(/^[a-zA-Z0-9\s]*$/)}),$.validator.addMethod("lettersEngRus",function(e,i){return this.optional(i)||e==e.match(/^[а-яА-ЯёЁa-zA-Z\s]+$/)}),$(document).ready(function(){$("#authorization").validate({rules:{name:{required:!0,lettersEng:!0,minlength:3,maxlength:20},password:{required:!0}},messages:{name:{required:!1,lettersEng:!1,minlength:!1,maxlength:!1},password:{required:!1}},submitHandler:function(){$("#authorization button").click(function(){window.location.href="personal_cabinet.html"})}})}),$(document).ready(function(){$("#registration").validate({rules:{name:{required:!0,lettersEngRus:!0,minlength:3,maxlength:20},tel:{required:!0,checkMask:!0},email:{required:!0,email:!0},city:{required:!0}},messages:{name:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},tel:{required:!1,checkMask:!1},email:{required:!1,email:!1},city:{required:!1}}})}),$(function(e){var i=e("#fixedNav");e(window).scroll(function(){i["fade"+(400<e(this).scrollTop()?"In":"Out")](500)})}),$(function(e){var i=e("#asideButtons");e(window).scroll(function(){i["fade"+(800<e(this).scrollTop()?"In":"Out")](500)})}),$(function(){$(".rollUp").click(function(){return $("html, body").animate({scrollTop:0},1e3),!1})}),$(".dropMenu").hide(),$("#medicalDevices").mouseenter(function(){$(".dropMenu").show()}),$("#medicalDevices").mouseleave(function(){$(".dropMenu").hide()}),$("#medicalDevices").click(function(){$(".dropMenu").show()}),$(function(){$("a#mobileDrop").click(function(e){e.preventDefault(),$("#overlay").fadeIn(400,function(){$(".header__nav-panel__mobile").css("display","block").animate({opacity:1,top:"0",left:"0"},200)})}),$("#overlay").click(function(){$(".header__nav-panel__mobile").animate({opacity:0,top:"0",left:"-160px"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$(window).scroll(function(){var e=$(this).scrollLeft();$(".header__nav-panel__mobile").css("left",-e)}),$(".content__actualProduct__headline div p span").click(function(e){e.preventDefault(),$(".content__actualProduct__headline div p span").removeClass("active"),$(this).addClass("active")}),$(".content__saleProduct__headline div p span").click(function(e){e.preventDefault(),$(".content__saleProduct__headline div p span").removeClass("active"),$(this).addClass("active")}),initCycleActual();var reinitTimerActual=void 0;function initCycleSale(){var e=$(document).width();e<768?$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:1,swipe:!0,swipeFx:"carousel",prev:".prevSale",next:".nextSale"}):768<e&&e<980?$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:2,prev:".prevSale",next:".nextSale"}):980<e&&e<1300?$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:3,prev:".prevSale",next:".nextSale"}):1300<e&&e<1800?$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:4,prev:".prevSale",next:".nextSale"}):$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:5,prev:".prevSale",next:".nextSale"})}function reinit_cycle_sale(){var e=$(window).width();e<768?($("#slideshowSale").cycle("destroy"),reinitCycleSale(1)):768<e&&e<980?($("#slideshowSale").cycle("destroy"),reinitCycleSale(2)):980<e&&e<1300?($("#slideshowSale").cycle("destroy"),reinitCycleSale(3)):1300<e&&e<1800?($("#slideshowSale").cycle("destroy"),reinitCycleSale(4)):($("#slideshowSale").cycle("destroy"),reinitCycleSale(5))}function reinitCycleSale(e){$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",next:".nextSale",prev:".prevSale",swipe:!0,swipeFx:"carousel",carouselVisible:e})}$(window).resize(function(){clearTimeout(reinitTimerActual),reinitTimerActual=setTimeout(reinit_cycle_actual,100)}),initCycleSale();var reinitTimerSale=void 0;function initCycleRecomend(){var e=$(document).width();e<768?$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:2,swipe:!0,swipeFx:"carousel",prev:".prevRecomend",next:".nextRecomend"}):768<e&&e<980?$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:3,prev:".prevRecomend",next:".nextRecomend"}):980<e&&e<1300?$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:4,prev:".prevRecomend",next:".nextRecomend"}):1300<e&&e<1800?$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:5,prev:".prevRecomend",next:".nextRecomend"}):$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:6,prev:".prevRecomend",next:".nextRecomend"})}function reinit_cycle_recomend(){var e=$(window).width();e<768?($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(2)):768<e&&e<980?($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(3)):980<e&&e<1300?($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(4)):1300<e&&e<1800?($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(5)):($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(6))}function reinitCycleRecomend(e){$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",next:".nextRecomend",prev:".prevRecomend",swipe:!0,swipeFx:"carousel",carouselVisible:e})}$(window).resize(function(){clearTimeout(reinitTimerSale),reinitTimerSale=setTimeout(reinit_cycle_sale,100)}),$(function(){$("a#deliveryPopup").click(function(e){e.preventDefault(),$("#overlay").fadeIn(400,function(){$("#delivery").css("display","block").animate({opacity:1,top:"35%"},200)})}),$("#deliveryClose, #overlay").click(function(){$("#delivery").animate({opacity:0,top:"35%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$(document).ready(function(){$("#comentary").validate({rules:{name:{required:!0,lettersEngRus:!0,minlength:3,maxlength:20},tel:{required:!0,checkMask:!0}},messages:{name:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},tel:{required:!1,checkMask:!1}},submitHandler:function(){$("#thanksComentary").show(function(){$("#overlay").fadeIn(400,function(){$("#thanksComentary").css("display","block").animate({opacity:1,top:"35%"},200)})}),$("#thanksComentaryClose, #thanksComentary button, #overlay").click(function(){$("#thanksComentary").animate({opecity:0,top:"35%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}})}),$(".content__productCard__img > #slideshow").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,pager:".content__productCard__img > #slideshowNav",pagerTemplate:""}),$(function(){$("ul#slideshow li img").click(function(e){e.preventDefault(),$("#overlay").fadeIn(400,function(){$("#imgPopup").css("display","grid").animate({opacity:1,top:"30%"},200)})}),$("#imgPopupClose, #overlay").click(function(){$("#imgPopup").animate({opacity:0,top:"30%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$(".content__productCard__imgPopup > .slideshowPopup > #slideshowPopup").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,pager:".content__productCard__imgPopup >  .slideshowPopup > #slideshowNavPopup",pagerTemplate:""}),$(".othersFormOfSale").hide(),$(".others p").click(function(){$(".othersFormOfSale").is(":hidden")?($(this).css("background-color","#00929E").css("color","#fff").css("border-bottom-left-radius","0px").css("border-bottom-right-radius","0px"),$(".othersFormOfSale").slideToggle("slow")):$(".othersFormOfSale").is(":visible")&&($(this).css("background-color","#fff").css("color","#00929E").css("border-bottom-left-radius","15px").css("border-bottom-right-radius","15px"),$(".othersFormOfSale").slideToggle("slow"))}),initCycleRecomend();var reinitTimerRecomend=void 0;$(window).resize(function(){clearTimeout(reinitTimerRecomend),reinitTimerRecomend=setTimeout(reinit_cycle_recomend,100)}),$("#aside__accordeon ul").hide().prev().click(function(){$(this).parents("#aside__accordeon").find("ul").not(this).slideUp().prev().removeClass("active"),$(this).next().not(":visible").slideDown().prev().addClass("active")}),$(".dDown").hide(),$("#medDev__accordeon ul").hide().prev().click(function(){$(this).parents("#medDev__accordeon").find("ul").not(this).slideUp().prev().removeClass("active"),$(this).next().not(":visible").slideDown().prev().addClass("active")});var minus=$(".minus"),plus=$(".plus");plus.click(function(){var e=$(this).parent().find("input");e.val(parseInt(e.val())+1),e.change()}),minus.click(function(){var e=$(this).parent().find("input"),i=parseInt(e.val())-1;i=i<1?1:i,e.val(i),e.change()}),$("#descrTabs").tabs(),$("body").on("click",".delete",function(e){$(this).closest("div").remove()}),$(document).ready(function(){$("#costumerInfo").validate({rules:{name:{required:!0,lettersEngRus:!0,minlength:3,maxlength:16},tel:{required:!0,checkMask:!0}},messages:{name:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},tel:{required:!1,checkMask:!1}},submitHandler:function(){$("#thanksOrder").show(function(){$("#overlay").fadeIn(400,function(){$("#thanksOrder").css("display","block").animate({opacity:1,top:"35%"},200)})}),$("#thanksOrderClose, #thanksOrder button, #overlay").click(function(){$("#thanksOrder").animate({opecity:0,top:"35%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}})}),$("#cabinetNav").tabs(),$("#contactsForm, #emailForm, #passwordForm").hide(),$("#contactsEdit").click(function(){$("#tel, #lastName, #firstName").hide(),$("#contactsForm").show(),$("#contactsEdit").hide()}),$("#emailEdit").click(function(){$("#email").hide(),$("#emailForm").show(),$("#emailEdit").hide()}),$("#passwordEdit").click(function(){$("#password").hide(),$("#passwordForm").show(),$("#passwordEdit").hide()}),$(document).ready(function(){$("#contactsForm").validate({rules:{tel:{required:!0,checkMask:!0},lastName:{required:!0,lettersEngRus:!0,minlength:3,maxlength:20},firstName:{required:!0,lettersEngRus:!0,minlength:3,maxlength:20}},messages:{tel:{required:!1,checkMask:!1},lastName:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},firstName:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1}},submitHandler:function(){$("#contactsSave").click(function(){$("#tel, #lastName, #firstName").show(),$("#contactsForm").hide(),$("#contactsEdit").show()})}})}),$(document).ready(function(){$("#emailForm").validate({rules:{email:{required:!0,email:!0}},messages:{email:{required:!1,email:!1}},submitHandler:function(){$("#emailSave").click(function(){$("#emailForm").hide(),$("#emailEdit").show()})}})}),$(document).ready(function(){$("#passwordForm").validate({rules:{newPassword:{required:!0},confirmPassword:{equalTo:"#pswd"}},messages:{newPassword:{required:!1},confirmPassword:{required:!1,equalTo:!1}},submitHandler:function(){$("#passwordSave").click(function(){$("#passwordForm").hide(),$("#passwordEdit").show()})}})}),$(document).ready(function(){$(".myOrders p").click(function(e){e.preventDefault(),$("#overlay").fadeIn(400,function(){$("#orderInfo").css("display","block").animate({opacity:1,top:"20%"},200)})}),$("#orderClose, #overlay").click(function(){$("#orderInfo").animate({opacity:0,top:"20%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$(document).ready(function(){$(".firstBlock ul li img").click(function(e){e.preventDefault(),$("#large").attr("src",$(this).attr("src")),$("#overlay").fadeIn(400,function(){$(".large").css("display","block").animate({opacity:1,top:"20%"},200)})}),$("#overlay").click(function(){$(".large").animate({opacity:0,top:"20%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})}),$(document).ready(function(){$(".secondBlock ul li img").click(function(e){e.preventDefault(),$("#large").attr("src",$(this).attr("src")),$("#overlay").fadeIn(400,function(){$(".large").css("display","block").animate({opacity:1,top:"20%"},200)})}),$("#overlay").click(function(){$(".large").animate({opacity:0,top:"20%"},200,function(){$(this).css("display","none"),$("#overlay").fadeOut(400)})})});