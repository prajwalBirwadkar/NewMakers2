function btnresize(){
  
    document.querySelector('.Frame56').textContent='Full Stack Devlopment';
    document.querySelector('.Frame56C').textContent='Partial Development';
    document.querySelector('.Frame56D').style.display = "None";
    document.querySelector('.Frame56E').textContent='Regressiont';
    document.querySelector('.Frame80A').textContent='Databases';
    document.querySelector('.Frame80B').textContent='Infra & DeveOps';
    document.querySelector('.Frame80D').textContent='Automation';
    document.querySelector('.Frame81A').textContent='DevOps CI/CD and Dashboard';
    document.querySelector('.Frame81C').textContent='Docket Conainerization';
    var Changewidth = document.querySelector('.Frame56')
    if (Changewidth.className = "Frame56" ) {
        Changewidth.className = "Frame56a"
        
    }
    else{
        Changewidth.className = "Frame56"
    }
    var Changewidth = document.querySelector('.Frame56C')
    if (Changewidth.className = "Frame56C") {
        Changewidth.className = "Frame56a"
        
    }
    else{
        Changewidth.className = "Frame56C"
    }
    let displayImage = document.querySelector('.image1')
    if (displayImage.src.match('img/Group 64.svg')) {
        displayImage.src ='img/Group 63a.svg'
    }
    else{
        displayImage.src = 'img/Group 63a.svg'
    }
    var Changewidth = document.querySelector('.Frame56E')
    if (Changewidth.className = "Frame56E" ) {
        Changewidth.className = "Frame59U"
        
    }
    else{
        Changewidth.className = "Frame56E"
    }
    var Changewidth = document.querySelector('.Frame80B')
    if (Changewidth.className = "Frame80B" ) {
        Changewidth.className = "Frame80C"
        
    }
    else{
        Changewidth.className = "Frame80B"
    }
    var Changewidth = document.querySelector('.Frame81A')
    if (Changewidth.className = "Frame81A" ) {
        Changewidth.className = "Frame81B"
        
    }
    else{
        Changewidth.className = "Frame80A"
    }
    var Changewidth = document.querySelector('.Frame81C')
    if (Changewidth.className = "Frame81C" ) {
        Changewidth.className = "Frame81D"
        
    }
    else{
        Changewidth.className = "Frame80C"
    }
    
    
    document.querySelector('.Back').style.display = 'inline';
}


