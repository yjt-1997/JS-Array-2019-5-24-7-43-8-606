// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);
console.log(b instanceof Array);


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0; i < 5; i++){
	a[i] *= 2;
}


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var temp1 = colors.join(" ");
console.log(temp1);

var temp2 = colors.join("+");
console.log(temp2);

var temp3 = colors.join(",");
console.log(temp3);

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var mysort = a.sort(function(a,b){
	return b-a;
});
console.log(mysort);


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var temp4 = new Array();
//标记最高的频率
var max = 0;
//标记最高的频率的元素在a表的下标
var maxIndex = 0;
for(var i = 0; i < a.length; i++){
	//标记a[i]是否是新元素
	var flag = true;
	for(var j = 0; j < i; j++){
		//若为重复元素
		if(a[i]==a[j]){
			temp4[j]++;
			flag = false;
			if(temp4[j]>max){
				max = temp4[j];
				maxIndex = j; 
			}
			break;
		}
	}
	//若为新元素
	if(flag){
		temp4[i]=0;
		temp4[i]++;
		if(temp4[i]>max){
			max = temp4[i];
			maxIndex = i;
		}
	}
}
console.log(a[maxIndex]);
