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



