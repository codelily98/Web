//빈 객체로 생성
var calc = {};

//맴버(필드) 변수 추가
calc.x = 0;
calc.y = 0;

//맴버 함수 (=메서드)
calc.setValue = function(x, y) {
	this.x = x;
	this.y = y;
}

calc.plus = function() {
	return this.x + this.y;
}

calc.minus = function() {
	return this.x - this.y;
}

calc.result = function() {
	var sum = this.plus();
	var sub = this.minus();
	
	document.write("<div>" + sum + "</div>");
	document.write("<div>" + sub + "</div>");
}