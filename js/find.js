$(() =>
{
    $('.search_icon').on('click' , e => 
    {
        let search = $('.search_input');
        let searchText = $(search).val().toLowerCase();
        if( $(search).val().length < 3 )
            return alert('Минимальная длинна поиска 3 символа.');
        let find;
        $('[find="1"]').each( (index , value)=>
        {
            find = value.innerText.toLowerCase().indexOf(searchText);
            if(find != -1)
            {
                value.scrollIntoView();
                let bc = $(value).css('background-color');
                $(value).css('background-color' , '#FFA524');
                setTimeout(()=> $(value).css('background-color' , bc), 4000);
                return false;
            }
        })
    });
});