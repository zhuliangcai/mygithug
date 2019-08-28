
	var oText = document.getElementById("srk");//获取搜索框元素
	var oSea = document.getElementsByClassName("kzk")[0];//搜索提示框
	var oUl = oSea.getElementsByTagName("ul")[0];//搜索提示列表
	oText.onkeyup = function(){
		var oScr=document.querySelectorAll("script");//获取所有的script标签
		var val = this.value;//获取搜索框内的值
		/*
		if(val){
			oSea.style.display = "block";
		}else{
			oSea.style.display = "none";
		}
		*/
		oSea.style.display = val?"block":"none";
		for(var i=1;i<oScr.length;i++){
			oScr[i].remove();
		}
		var os = document.createElement("script");
		os.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=wst";
		document.body.appendChild(os);
		
	}
	function wst(mjson){
		//重写script访问链接后返回的函数方法 数据就在这个函数的参数内
		oUl.innerHTML="";
		for(var i=0;i<mjson.s.length;i++){
			var oLi = document.createElement("li");
			oLi.innerHTML = '<a href=https://wwww.baidu.com/s?wd='+mjson.s[i]+'>'+mjson.s[i]+'</a>';
			oUl.appendChild(oLi);
		}
	}
	

