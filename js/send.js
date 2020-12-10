let code , collection = [];
document.addEventListener('keydown', (event) => code = event.code );
$(()=>
{
    let success = document.getElementById('success');
    function delClass(element , time)
    {
        setTimeout( ()=>
        {
            element.classList.remove("error");
        } , time);
    }
    $('#form-name').on('focus' , e => 
    {
        if(e.target.value.length == 0)
            e.target.placeholder = '';
    });
    $('#form-number').on('focus' , e => 
    {
        if(e.target.value.length == 0)
            e.target.value = '+375('
    });
    $('#form-number').on('input' , e => 
    {
        if(code == 'Backspace' || code == 'Delete')
            return;
        if(e.target.value.length == 4)
            e.target.value += '('
        if(e.target.value.length == 7)
            e.target.value += ')'    
    });
    $('#form').on('submit', (e) =>
    {
        e.preventDefault();
        let forma = document.forms.consult_forma;
        if(forma.name.value.match(/\d/) != null)
        {
            forma.name.classList.add("error");
            delClass(form.name , 5000);
            return;
        }
        else if(forma.number.value.match(/([А-Я-Ё])|([a-z])/i) != null)
        {
            forma.number.classList.add("error");
            delClass(form.number , 5000);
            return;
        }
        else
        {
            let data = `--------\n ${forma.name.value}\n ${forma.number.value}\n ${new Date()}\n`;
            collection.push(data);
            forma.name.value = null;
            forma.number.value = null;
            forma.style.display = 'none';
            success.style.display = 'flex';
        }    
    });
    $('#success_close').on('click' , (e) => success.style.display = 'none');
    $('#success_more').on('click' , (e) =>
    {
        success.style.display = 'none';
        document.forms.consult_forma.style.display = 'block';
    });
    window.onunload = ()=> download("contacts.txt", collection);
    window.onbeforeunload = ()=> download("contacts.txt", collection);
    $('a').on('click' , e => download("contacts.txt", collection))
});

function download(filename, text) 
{
    if(collection.length == 0) return;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();

    document.body.removeChild(element);
}



  
