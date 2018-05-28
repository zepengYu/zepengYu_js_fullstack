const TV = {
    open: function(){
        console.log('打开电视');
    },
    close:function(){
        console.log('关电视');
    }
}

const AirConditional = {
    //统一的接口
    open:function(){
        console.log('开');
    },
    close:function(){
        console.log('关');
    }
}

function setCommand(obj){
    // obj.open();
    // obj.close();
}