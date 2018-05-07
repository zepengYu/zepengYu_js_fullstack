// es6 class关键字新增
class RandomHongbao {
    constructor(num){
        tnis.num = num;
        console.log(this.num);
    }
}
// 200 => 总金额
// split分 26 人数 红包金额的精确度 2
const hongbao = new RandomHongbao(200);
hongbao.split(26,2);