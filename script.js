console.log("Its working")
//if user refreshes the page the theme should be that one which was last time seen 
//below  code will store the last accessed theme if it is null then null will be stored 
let theme = localStorage.getItem('theme')
//check if theme is null
if (theme == null)
{
    setTheme('light');
}
else
{
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0; i < themeDots.length ; i++)
{
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        //console.log('ThemeDots length : ',themeDots.length)
        setTheme(mode);      
    })    
}

function setTheme(mode)
{
    //console.log("btn clicked : ",mode);
    if(mode == 'light')
    {
        document.getElementById('theme-style').href = 'default.css'
    }
    else if(mode == 'blue')
    {
        document.getElementById('theme-style').href = 'blue.css'
    }
    else if(mode == 'green')
    {
        document.getElementById('theme-style').href = 'green.css'
    }
    else if(mode == 'purple')
    {
        document.getElementById('theme-style').href = 'purple.css'

    } 
    
    //to set the theme value to the current value   
    localStorage.setItem('theme',mode);
}