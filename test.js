// 正金字塔打印     核心算法 j <= i


// var num = prompt('需要打印多少列');
// var str = '';
// for (var i = 1; i <= num; i++) {
//     for (var j = 1; j <= i; j++) {
//         str = str + '❤';
//     }
//     str = str + '\n';
// }
// console.log(str);


// 倒金字塔打印     核心算法 j = i

// var num = prompt('需要打印多少列');
// var str = '';
// for (var i = 1; i <= num; i++) {
//     for (var j = i; j <= num; j++) {
//         str = str + '❤';
//     }
//     str = str + '\n';
// }
// console.log(str);









// 运用while和if实现简易银行存取计算功能


// var num = 100;
// var a = prompt('你想选择哪些服务' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.查询余额' + '\n' + '4.退出');
// while (num >= 0) {
//     if (a == 1) {
//         var b = prompt('你需要存入多少钱')
//         b = parseFloat(b);
//         num = num + b;
//         alert('余额' + num);
//         a = prompt('你想选择哪些服务' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.查询余额' + '\n' + '4.退出');
//     }
//     else if (a == 2) {
//         var b = prompt('你需要取出多少钱')
//         b = parseFloat(b);
//         num = num - b;
//         alert('余额' + num);
//         a = prompt('你想选择哪些服务' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.查询余额' + '\n' + '4.退出');
//     }
//     else if (a == 3) {
//         alert('余额' + num);
//         a = prompt('你想选择哪些服务' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.查询余额' + '\n' + '4.退出');
//     }
//     else {
//         alert('正在退出ing');
//         break;
//     }
// }





// 求从1开始第35个能被7和3整除的整数是多少

// var i = 1;
// var jishu = 0;
// while (i <= 50000) {
//     if (i % 3 == 0 && i % 7 == 0) {
//         jishu = jishu + 1;
//         if (jishu == 35) {
//             alert(i);
//             break
//         }
//     }
//     i++
// }


// 封装的倒计时函数


// function countDown(time) {
//    var nowTime = Date.now();   //返回当前时间戳
//    var inpuTime = +new Date(time); //返回用户输入的时间戳
//    var times = (inpuTime - nowTime) / 1000;    //times是剩余时间总的秒数
//    var d = parseInt(times / 60 / 60 / 24); //天
//    d = d < 10 ? '0' + d : d;
//    var h = parseInt(times / 60 / 60 % 24);  //时
//    h = h < 10 ? '0' + h : h;
//    var m = parseInt(times / 60 % 60);  //分
//    m = m < 10 ? '0' + m : m;
//    var s = parseInt(times % 60);   //秒
//    s = s < 10 ? '0' + s : s;
//    return d + '天' + h + '时' + m + '分' + s + '秒';
// }
// console.log(countDown('2023-10-11 18:00:00'));


// 数组排序（冒泡排序）
// var arr = [12, 34, 2, 6, 44]
// arr.sort(function (a, b) {
//    return a - b;  // a-b升序的排序序列 b-a降序
// });
// console.log(arr);


