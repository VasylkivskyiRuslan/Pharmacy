"use strict";function reinit_mobile_drop(){if($(window).width()<740)return!0;$(".header__nav-panel__mobile").arcticmodal("close")}$(document).ready(function(){$("#slideshow").cycle({fx:"scrollHorz",pauseOnHover:!0,swipe:!0,speed:500})}),$(document).ready(function(){$("#authorizationPopup").click(function(){$("#personalCabinet").arcticmodal()}),$("#authorizationClose").click(function(){$("#personalCabinet").arcticmodal("close")})}),$("#authorTabs").tabs(),jQuery.validator.addMethod("checkMask",function(e,i){return/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g.test(e)}),$(".js-phone").mask("+380(99)999-9999",{autoclear:!1}),$.validator.addMethod("lettersEng",function(e,i){return this.optional(i)||e==e.match(/^[a-zA-Z0-9\s]*$/)}),$.validator.addMethod("lettersEngRus",function(e,i){return this.optional(i)||e==e.match(/^[а-яА-ЯёЁa-zA-Z\s]+$/)}),$(document).ready(function(){$("#authorization").validate({rules:{name:{required:!0,lettersEng:!0,minlength:3,maxlength:25},password:{required:!0}},messages:{name:{required:!1,lettersEng:!1,minlength:!1,maxlength:!1},password:{required:!1}},submitHandler:function(){$("#authorization button").click(function(){window.location.href="personal_cabinet.html"})}})}),$(document).ready(function(){$("#registration").validate({rules:{name:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},tel:{required:!0,checkMask:!0},email:{required:!0,email:!0},city:{required:!0}},messages:{name:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},tel:{required:!1,checkMask:!1},email:{required:!1,email:!1},city:{required:!1}},submitHandler:function(){$(document).ready(function(){$("#authorizationConfirm").arcticmodal(),$("#authorizationConfirm button").click(function(){window.location.href="personal_cabinet.html"})})}})}),$(function(e){var i=e("#fixedNav");e(window).scroll(function(){i["fade"+(400<e(this).scrollTop()?"In":"Out")](500)})}),$(".mobile input").hide(),$(".mobile .back").hide(),$("#fixedNav ul li:nth-child(2) .mobile i").click(function(){$(".mobile input").show(),$(".mobile .back").show()}),$(".mobile .back").click(function(){$(".mobile input").hide(),$(".mobile .back").hide()}),$(function(t){t(document).mouseup(function(e){var i=t(".mobile input");i.is(e.target)||0!==i.has(e.target).length||(i.hide(),t(".mobile .back").hide())})}),$(function(e){var i=e("#asideButtons");e(window).scroll(function(){i["fade"+(800<e(this).scrollTop()?"In":"Out")](500)})}),$(function(){$(".rollUp").click(function(){return $("html, body").animate({scrollTop:0},1e3),!1})}),$(document).ready(function(){$("#feedbackForm").click(function(){$("#feedbackFormPopup").arcticmodal()})}),$(document).ready(function(){$("#userData").validate({rules:{name:{required:!0,lettersEng:!0,minlength:3,maxlength:25},tel:{required:!0,checkMask:!0},commentary:{required:!0},hours:{required:!0},minutes:{required:!0}},messages:{name:{required:!1,lettersEng:!1,minlength:!1,maxlength:!1},tel:{required:!1,checkMask:!1},commentary:{required:!1},hours:{required:!1},minutes:{required:!1}},submitHandler:function(){$(document).ready(function(){$("#userData button").click(function(){$("#feedbackFormPopup").arcticmodal("close")})})}})}),$(document).ready(function(){$("#medicalDevices-drop").hide(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||($("#medicalDevices").mouseenter(function(){$("#medicalDevices-drop").show()}),$("#medicalDevices").mouseleave(function(){$("#medicalDevices-drop").hide()})),$("#medicalDevices").click(function(){location.href="medical_devices.html"})}),$(document).ready(function(){$("#cosmetics-drop").hide(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||($("#cosmetics").mouseenter(function(){$("#cosmetics-drop").show()}),$("#cosmetics").mouseleave(function(){$("#cosmetics-drop").hide()})),$("#cosmetics").click(function(){location.href="#"})}),$(document).ready(function(){$("#kidsGoods-drop").hide(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||($("#kidsGoods").mouseenter(function(){$("#kidsGoods-drop").show()}),$("#kidsGoods").mouseleave(function(){$("#kidsGoods-drop").hide()})),$("#kidsGoods").click(function(){location.href="#"})}),$(document).ready(function(){$("#medicalEquipment-drop").hide(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||($("#medicalEquipment").mouseenter(function(){$("#medicalEquipment-drop").show()}),$("#medicalEquipment").mouseleave(function(){$("#medicalEquipment-drop").hide()})),$("#medicalEquipment").click(function(){location.href="#"})}),$(document).ready(function(){$("#vitamins-drop").hide(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||($("#vitamins").mouseenter(function(){$("#vitamins-drop").show()}),$("#vitamins").mouseleave(function(){$("#vitamins-drop").hide()})),$("#vitamins").click(function(){location.href="#"})}),$(document).ready(function(){$("#mobileDrop").click(function(){if(!($(document).width()<740))return!1;$(".header__nav-panel__mobile").arcticmodal({beforeOpen:function(){$(".header__nav-panel__mobile").animate({left:0},400)},beforeClose:function(){$(".header__nav-panel__mobile").animate({left:"-300px"},400)}})})});var reinitTimerMobileDrop=void 0;function initCycleActual(){var e=$(document).width();e<600?$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:1,swipe:!0,swipeFx:"carousel",prev:".prevActual",next:".nextActual"}):600<e&&e<980?$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:2,prev:".prevActual",next:".nextActual"}):980<e&&e<1300?$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:3,prev:".prevActual",next:".nextActual"}):1300<e&&e<1800?$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:4,prev:".prevActual",next:".nextActual"}):$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:5,prev:".prevActual",next:".nextActual"})}function reinit_cycle_actual(){var e=$(window).width();e<600?($("#slideshowActual").cycle("destroy"),reinitCycleActual(1)):600<e&&e<980?($("#slideshowActual").cycle("destroy"),reinitCycleActual(2)):980<e&&e<1300?($("#slideshowActual").cycle("destroy"),reinitCycleActual(3)):1300<e&&e<1800?($("#slideshowActual").cycle("destroy"),reinitCycleActual(4)):($("#slideshowActual").cycle("destroy"),reinitCycleActual(5))}function reinitCycleActual(e){$("#slideshowActual").cycle({fx:"carousel",timeout:0,slides:"> li",next:".nextActual",prev:".prevActual",swipe:!0,swipeFx:"carousel",carouselVisible:e})}$(window).resize(function(){clearTimeout(reinitTimerMobileDrop),reinitTimerMobileDrop=setTimeout(reinit_mobile_drop,50)}),$(".content__actualProduct__headline div p span").click(function(e){e.preventDefault(),$(".content__actualProduct__headline div p span").removeClass("active"),$(this).addClass("active")}),$(".content__saleProduct__headline div p span").click(function(e){e.preventDefault(),$(".content__saleProduct__headline div p span").removeClass("active"),$(this).addClass("active")}),initCycleActual();var reinitTimerActual=void 0;function initCycleSale(){var e=$(document).width();e<600?$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:1,swipe:!0,swipeFx:"carousel",prev:".prevSale",next:".nextSale"}):600<e&&e<980?$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:2,prev:".prevSale",next:".nextSale"}):980<e&&e<1300?$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:3,prev:".prevSale",next:".nextSale"}):1300<e&&e<1800?$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:4,prev:".prevSale",next:".nextSale"}):$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:5,prev:".prevSale",next:".nextSale"})}function reinit_cycle_sale(){var e=$(window).width();e<600?($("#slideshowSale").cycle("destroy"),reinitCycleSale(1)):600<e&&e<980?($("#slideshowSale").cycle("destroy"),reinitCycleSale(2)):980<e&&e<1300?($("#slideshowSale").cycle("destroy"),reinitCycleSale(3)):1300<e&&e<1800?($("#slideshowSale").cycle("destroy"),reinitCycleSale(4)):($("#slideshowSale").cycle("destroy"),reinitCycleSale(5))}function reinitCycleSale(e){$("#slideshowSale").cycle({fx:"carousel",timeout:0,slides:"> li",next:".nextSale",prev:".prevSale",swipe:!0,swipeFx:"carousel",carouselVisible:e})}$(window).resize(function(){clearTimeout(reinitTimerActual),reinitTimerActual=setTimeout(reinit_cycle_actual,100)}),initCycleSale();var reinitTimerSale=void 0;function reinit_mobile_sort(){if($(window).width()<1024)return!0;$("#catalog__options__mobile").arcticmodal("close")}$(window).resize(function(){clearTimeout(reinitTimerSale),reinitTimerSale=setTimeout(reinit_cycle_sale,100)}),$(document).ready(function(){$("#orderPopup").click(function(){$("#order").arcticmodal()}),$("#orderClose").click(function(){$("#order").arcticmodal("close")})}),$(document).ready(function(){$("#deliveryPopup").click(function(){$("#delivery").arcticmodal()}),$("#deliveryClose").click(function(){$("#delivery").arcticmodal("close")})}),$(document).ready(function(){$("#underOrderPopup").click(function(){$("#underOrder").arcticmodal()}),$("#underOrderClose").click(function(){$("#underOrder").arcticmodal("close")})}),$(document).ready(function(){$("#comentary").validate({rules:{name:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},tel:{required:!0,checkMask:!0}},messages:{name:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},tel:{required:!1,checkMask:!1}},submitHandler:function(){$(document).ready(function(){$("#thanksComentary").arcticmodal(),$("#thanksComentary button").click(function(){$("#thanksComentary").arcticmodal("close")})})}})}),$(document).ready(function(){$("#mobileSort").click(function(){if(!($(document).width()<1024))return!1;$("#catalog__options__mobile").arcticmodal(),$("#mobileSortClose, #back").click(function(){$("#catalog__options__mobile").arcticmodal("close")})})});var reinitTimerMobileSort=void 0;function reinit_img_popup(){var e=$(window).width();e<430?($("#imgPopup").css("destroy"),reinitImgPopup(290)):430<e&&e<780?($("#imgPopup").css("destroy"),reinitImgPopup(400)):780<e&&e<1100?($("#imgPopup").css("destroy"),reinitImgPopup(750)):($("#imgPopup").css("destroy"),reinitImgPopup(1050))}function reinitImgPopup(e){$("#imgPopup").css("width",e)}$(window).resize(function(){clearTimeout(reinitTimerMobileSort),reinitTimerMobileSort=setTimeout(reinit_mobile_sort,50)}),$(".content__productCard__img > #slideshow").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,pager:".content__productCard__img > #slideshowNav",pagerTemplate:""}),$(document).ready(function(){$("#slideshow li img").click(function(){var e=$(document).width();e<430?$("#imgPopup").attr("src",$(this).attr("src")).arcticmodal().css("width","290px"):430<e&&e<780?$("#imgPopup").attr("src",$(this).attr("src")).arcticmodal().css("width","400px"):780<e&&e<1100?$("#imgPopup").attr("src",$(this).attr("src")).arcticmodal().css("width","750px"):$("#imgPopup").attr("src",$(this).attr("src")).arcticmodal().css("width","1050px"),$("#imgPopupClose").click(function(){$("#imgPopup").arcticmodal("close")})})});var reinitTimerImgPopup=void 0;function initCycleRecomend(){var e=$(document).width();e<560?$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:1,swipe:!0,swipeFx:"carousel",prev:".prevRecomend",next:".nextRecomend"}):560<e&&e<780?$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",carouselVisible:2,swipe:!0,swipeFx:"carousel",prev:".prevRecomend",next:".nextRecomend"}):780<e&&e<1060?$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:3,prev:".prevRecomend",next:".nextRecomend"}):1060<e&&e<1310?$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:4,prev:".prevRecomend",next:".nextRecomend"}):1310<e&&e<1800?$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:5,prev:".prevRecomend",next:".nextRecomend"}):$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",swipe:!0,swipeFx:"carousel",carouselVisible:6,prev:".prevRecomend",next:".nextRecomend"})}function reinit_cycle_recomend(){var e=$(window).width();e<560?($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(1)):560<e&&e<780?($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(2)):780<e&&e<1060?($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(3)):1060<e&&e<1310?($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(4)):1310<e&&e<1800?($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(5)):($("#slideshowRecomend").cycle("destroy"),reinitCycleRecomend(6))}function reinitCycleRecomend(e){$("#slideshowRecomend").cycle({fx:"carousel",timeout:0,slides:"> li",next:".nextRecomend",prev:".prevRecomend",swipe:!0,swipeFx:"carousel",carouselVisible:e})}$(window).resize(function(){clearTimeout(reinitTimerImgPopup),reinitTimerImgPopup=setTimeout(reinit_img_popup,50)}),$(".content__productCard__imgPopup > .slideshowPopup > #slideshowPopup").cycle({fx:"scrollHorz",slides:"> li",speed:"fast",timeout:0,pager:".content__productCard__imgPopup >  .slideshowPopup > #slideshowNavPopup",pagerTemplate:""}),$(".othersFormOfSale").hide(),$(".others p").click(function(){$(".othersFormOfSale").is(":hidden")?($(this).css("background-color","#00929E").css("color","#fff").css("border-bottom-left-radius","0px").css("border-bottom-right-radius","0px"),$(".othersFormOfSale").slideToggle("slow")):$(".othersFormOfSale").is(":visible")&&($(this).css("background-color","#fff").css("color","#00929E").css("border-bottom-left-radius","15px").css("border-bottom-right-radius","15px"),$(".othersFormOfSale").slideToggle("slow"))}),$(document).on("click",function(e){$(e.target).closest(".others p").length||$(".othersFormOfSale").hide(),e.stopPropagation()}),initCycleRecomend();var reinitTimerRecomend=void 0;$(window).resize(function(){clearTimeout(reinitTimerRecomend),reinitTimerRecomend=setTimeout(reinit_cycle_recomend,100)}),$("#aside__accordeon ul").hide().prev().click(function(){$(this).parents("#aside__accordeon").find("ul").not(this).slideUp().prev().removeClass("active"),$(this).next().not(":visible").slideDown().prev().addClass("active")}),$("#medDev__accordeon ul").hide().prev().click(function(){$(this).parents("#medDev__accordeon").find("ul").not(this).slideUp().prev().removeClass("active"),$(this).next().not(":visible").slideDown().prev().addClass("active")});var minus=$(".minus"),plus=$(".plus");function reinit_firstBlock_certificates(){var e=$(window).width();e<736?($("#large").css("destroy"),reinitFirstBlockImg(290)):736<e&&e<1024?($("#large").css("destroy"),reinitFirstBlockImg(450)):($("#large").css("destroy"),reinitFirstBlockImg(600))}function reinitFirstBlockImg(e){$("#large").css("width",e)}plus.click(function(){var e=$(this).parent().find("input");e.val(parseInt(e.val())+1),e.change()}),minus.click(function(){var e=$(this).parent().find("input"),i=parseInt(e.val())-1;i=i<1?1:i,e.val(i),e.change()}),$("#descrTabs").tabs(),$("body").on("click",".delete",function(e){$(this).closest("div").remove()}),$(document).ready(function(){$("#costumerInfo").validate({rules:{name:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},tel:{required:!0,checkMask:!0}},messages:{name:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},tel:{required:!1,checkMask:!1}},submitHandler:function(){$(document).ready(function(){$("#thanksOrder").arcticmodal(),$("#thanksOrderClose, #thanksOrder button").click(function(){$("#thanksOrder").arcticmodal("close")})})}})}),$("#cabinetNav").tabs(),$("#contactsForm, #emailForm, #passwordForm").hide(),$("#contactsEdit").click(function(){$("#tel, #lastName, #firstName").hide(),$("#contactsForm").show(),$("#contactsEdit").hide()}),$("#emailEdit").click(function(){$("#email").hide(),$("#emailForm").show(),$("#emailEdit").hide()}),$("#passwordEdit").click(function(){$("#password").hide(),$("#passwordForm").show(),$("#passwordEdit").hide()}),$(document).ready(function(){$("#contactsForm").validate({rules:{tel:{required:!0,checkMask:!0},lastName:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25},firstName:{required:!0,lettersEngRus:!0,minlength:3,maxlength:25}},messages:{tel:{required:!1,checkMask:!1},lastName:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1},firstName:{required:!1,lettersEngRus:!1,minlength:!1,maxlength:!1}},submitHandler:function(){$("#contactsSave").click(function(){$("#tel, #lastName, #firstName").show(),$("#contactsForm").hide(),$("#contactsEdit").show()})}})}),$(document).ready(function(){$("#emailForm").validate({rules:{email:{required:!0,email:!0}},messages:{email:{required:!1,email:!1}},submitHandler:function(){$("#emailSave").click(function(){$("#emailForm").hide(),$("#emailEdit").show()})}})}),$(document).ready(function(){$("#passwordForm").validate({rules:{newPassword:{required:!0},confirmPassword:{equalTo:"#pswd"}},messages:{newPassword:{required:!1},confirmPassword:{required:!1,equalTo:!1}},submitHandler:function(){$("#passwordSave").click(function(){$("#passwordForm").hide(),$("#passwordEdit").show()})}})}),$(document).ready(function(){$(".myOrders p").click(function(){$("#orderInfo").arcticmodal()}),$("#infoClose").click(function(){$("#orderInfo").arcticmodal("close")})}),$(document).ready(function(){$(".firstBlock ul li img").click(function(){var e=$(document).width();e<736?$("#large").attr("src",$(this).attr("src")).arcticmodal().css("width","290px"):736<e&&e<1024?$("#large").attr("src",$(this).attr("src")).arcticmodal().css("width","450px"):$("#large").attr("src",$(this).attr("src")).arcticmodal().css("width","600px")})});var reinitTimerFirstBlock=void 0;function reinit_secondBlock_certificates(){var e=$(window).width();e<736?($("#large").css("destroy"),reinitSecondBlockImg(290)):736<e&&e<1024?($("#large").css("destroy"),reinitSecondBlockImg(450)):($("#large").css("destroy"),reinitSecondBlockImg(600))}function reinitSecondBlockImg(e){$("#large").css("width",e)}$(window).resize(function(){clearTimeout(reinitTimerFirstBlock),reinitTimerFirstBlock=setTimeout(reinit_firstBlock_certificates,50)}),$(document).ready(function(){$(".secondBlock ul li img").click(function(){var e=$(document).width();e<736?$("#large").attr("src",$(this).attr("src")).arcticmodal().css("width","290px"):736<e&&e<1024?$("#large").attr("src",$(this).attr("src")).arcticmodal().css("width","450px"):$("#large").attr("src",$(this).attr("src")).arcticmodal().css("width","600px")})});var reinitTimerSecondBlock=void 0;$(window).resize(function(){clearTimeout(reinitTimerSecondBlock),reinitTimerSecondBlock=setTimeout(reinit_secondBlock_certificates,50)});