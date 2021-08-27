function openNav(){
    document.getElementById('mysidebar')
    .style.width= '250px'
    document.getElementById('mysidebar').style.border= '1px gray solid'
    document.getElementById('mysidebar').style.padding= '20px'
}

function closeNav(){
    document.getElementById('mysidebar')
    .style.width ='0'
    document.getElementById('mysidebar').style.padding= '0px'
    document.getElementById('mysidebar').style.border= '0px gray solid';
}