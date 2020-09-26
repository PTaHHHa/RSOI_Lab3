window.addEventListener('load',() =>{

    var sex_item = JSON.parse(localStorage.getItem('sex'))
    for(var i=0;i<sex_item.length;i++){
        var newelem = document.createElement('p')
        newelem.innerHTML = sex_item[i];
        var newp = document.getElementById('result_sex')
        document.body.append(newelem)
    }
})