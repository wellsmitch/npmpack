
 function Smethods() {}

// 去掉字符串中所有空格(包括中间空格,需要设置第2个参数为:g)
function trim(str, is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global && is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
};
// 判断是否是手机号码格式
function isPhone(str) {
    var reg = /^1(3|4|5|7|8|9)\d{9}$/;
    var reg1 = /^1(3|4|5|7|8|9)/;
    var reg2 = /^1/;
    if(str.length == 1){
        return reg2.test(trim(str, 'g'))
    }else if(str.length < 11){
        return reg1.test(trim(str, 'g'))
    }else if(str.length == 11){
        return reg.test(trim(str, 'g'))
    }else {
        throw new Error('this dialog not match correct data')
    }
};

// 手机号码格式转化为 344 格式 （188 3886 9199）
function phoneSeparated(tel,dom) {
    var tel = trim(tel, 'g');
    try{
        if (isPhone(tel) && tel.length == 11) {
            tel = tel.substring(0, 3) + ' ' + tel.substring(3, 7) + ' ' + tel.substring(7, 11);
            dom.value = tel
        }
    }catch (e) {
        tel = tel.substring(0, 3) + ' ' + tel.substring(3, 7) + ' ' + tel.substring(7, 11);
        dom.value = tel;
        throw new Error(e);
    }
};

Smethods.prototype.diagDataEdit = function (domSelect){
    document.querySelector(domSelect).oninput = function () {
        phoneSeparated(this.value,this)
    };
}

export default Smethods;

