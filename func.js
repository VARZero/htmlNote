document.getElementById('compl').onclick = function()
{
    console.log('click');
    var text=document.getElementById('textBX').value;
    document.getElementById('contents').insertAdjacentHTML("beforeend",'<div class="content">'+text+'</div>')
};