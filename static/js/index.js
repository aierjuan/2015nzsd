
function Index()
{
	this.init();
}

Index.prototype={
	init : function()
	{
		var _this=this;
		_this.setSize();
		_this.music();
		_this.whenTurn();
		//_this.cloud();
	},
	setSize:function()
	{
		$(window).bind("load resize",function()
		{
			var h=$(window).height();
			var w=$(window).width();
			$("#loading,.animateBox,.animateBox1,.animateBox2,.animateBox3,.fengmian").css({"width":w+"px","height":h+"px"});
			$("#loading,.daxiao").css({"background-size":w+"px "+h+"px"});			
		});
	},
	music:function()
	{
		var play=true;
		$('.music .musicBtn').on('click',function()
		{
			$(this).closest(".music").toggleClass("pause");
			if(play)
			{
				$('audio')[0].pause();
				play=false;
			}
			else
			{
				$('audio')[0].play();
				play=true;
			}
		});	
		
		setTimeout(function()
		{
			$(".musicBtn audio").attr({"src":"static/music/aiqing.mp3"});
		},2000);
	},
	cloud:function()
	{
		$(".cloud1").animate({"left":"-960px"},{easing:"easeInQuint",duration:2000});
		$(".cloud2").animate({"left":"640px"},{easing:"easeInQuint",duration:2000});
		$(".cloud3").animate({"left":"-960px"},{easing:"easeInQuint",duration:2000});
		$(".cloud4").animate({"left":"640px"},{easing:"easeInQuint",duration:2000,complete:function()
		{
			$(".cloud").remove();
		}});
	},
	whenTurn:function()
	{
		
		$(".flipbook").live("start", function(event, page, pageObject) {
			$(".music").animate({"top":"-132px"},500);
		});	
		$(".flipbook").live("turned", function(event, page, pageObject) {
			$(".music").animate({"top":"-60px"},500);
			
			if(page>4)
			{
				$(".daxiao").css({"background-size":$(window).width()+"px "+$(window).height()+"px"});
			}
			/*
			$(".btnPrev,.btnNext").hide();
			if(page!=1)
			{
				$(".btnPrev").show();	
			}
			if(page!=18)
			{
				$(".btnNext").show();
			}*/
			
			if(page==18)
			{
				$(".onClick").hide();
			}
			else
			{
				$(".onClick").show();
			}
			
		});	
	}
}
$(function()
{
	new Index();
});