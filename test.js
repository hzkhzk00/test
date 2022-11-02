

// 运用while和if实现简易银行存取计算功能


var num = 100;
var a = prompt('你想选择哪些服务' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.查询余额' + '\n' + '4.退出');
while (num >= 0) {
    if (a == 1) {
        var b = prompt('你需要存入多少钱')
        b = parseFloat(b);
        num = num + b;
        alert('余额' + num);
        a = prompt('你想选择哪些服务' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.查询余额' + '\n' + '4.退出');
    }
    else if (a == 2) {
        var b = prompt('你需要取出多少钱')
        b = parseFloat(b);
        num = num - b;
        alert('余额' + num);
        a = prompt('你想选择哪些服务' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.查询余额' + '\n' + '4.退出');
    }
    else if (a == 3) {
        alert('余额' + num);
        a = prompt('你想选择哪些服务' + '\n' + '1.存钱' + '\n' + '2.取钱' + '\n' + '3.查询余额' + '\n' + '4.退出');
    }
    else {
        alert('正在退出ing');
        break;
    }
}

