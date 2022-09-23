css
id 和 class 选择器

1、id选择器：id = "part"
#part{
	text-align:center;
	color:blue;	
}
2、class选择器：class = "textStyle"
普通的定义
.textStyle{
	font-size:12px;
	color:black;
}
标签定义：给p标签定义样式
p.textStyle{
	font-size:12px;
	color:black;
}
* 多个 class 选择器可以使用空格分开

html图层互斥,使用层定位解决
position: fixed[固定]  relative[相对]  absolute[绝对] static[静态,默认]  
叠加次序:z-index

