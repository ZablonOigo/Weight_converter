const Input=document.getElementById('Input').addEventListener('input',(e)=>{
    let pounds=e.target.value;
    document.getElementById('gramsOutput').innerHTML=Math.floor(pounds/0.0022046);
    document.getElementById('kilogramsOutput').innerHTML=Math.floor(pounds/2.2046);
    document.getElementById('ouncesOutput').innerHTML=Math.floor(pounds*16);

});