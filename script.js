function mult(){
    let num = document.getElementById('num')
    let tbl = document.getElementById('table')
    
    if (num.value.length==0){
        window.alert('Please type a number')
        
    } else {
        n = Number(num.value)
        tbl.innerHTML=''
        for(let c=1; c<=10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tbl.appendChild(item) 
        }
    }


    
}