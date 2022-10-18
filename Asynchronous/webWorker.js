function showLog(total) {
    let a =[];
    for (let i = 0; i < total; i++) {
        a.push(i);
    }
    return a;
}


addEventListener("message",function(event){
    const total = event.data;
    showLog(total);
    postMessage(showLog(total)); //post balik ke listener di 16_webWorkerCommunication.html
})