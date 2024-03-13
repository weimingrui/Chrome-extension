

window.onload=function(){
    //定义存储key
    const FILTER_KEY='filterUrl';

    //保存用户配置
    function saveOptions(value){
        chrome.storage.local.set(value)
    }

    //监听输入框
    document.getElementById('filter-url').addEventListener('change',function(e){
        saveOptions({[FILTER_KEY]:e.target.value||''})
    })

    //加在默认数据
    chrome.storage.local.get([FILTER_KEY]).then((result) => {
        var value= result[FILTER_KEY];
        document.getElementById('filter-url').value=value||''
    });

}
