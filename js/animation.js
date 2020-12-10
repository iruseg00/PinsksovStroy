$(()=>
{
    function counter(element , end , plus = null , time = 250)
    {
        element = $(element);
        let start = +$(element).text();
        let interval = setInterval(() =>
        {
            element.text(++start);
            if(start == end) 
            {
                if(plus) element.text(start + '+');
                clearInterval(interval);
            }
        }, time);
    }
    function showOrHide(element , show = true , index)
    {
        index = +index;
        if(show)
        {
            $(element[index]).fadeIn(300);
            $(element[index + 1]).fadeIn(300);
        }
        else
        {
            $(element[index]).fadeOut(50);
            $(element[index + 1]).fadeOut(50);
        }
    }
    
    counter('#count_company' , 6 , null , 400);
    counter('#count_years' , 52 , null , 70);
    counter('#count_projects' , 200 , '+' , 20);
    counter('#count_specialists' , 1368 , null , 2);
    let doIt = false;
    let steps = $('.step');
    $(steps).fadeOut(100);
    $(window).scroll(()=> 
    {
        if(window.scrollY > 1400)
            if(!doIt)
            {
                doIt = true;
                let time = 1000;
                $(steps).each((index , value) =>
                {
                    time += 1000;
                    $(value).fadeIn(time);
                });
            }
    });
    let projectsWrapper = $('.projects-n-wrapper');
    let wrapperElements = $('.projects-n-wrapper > *');
    $(wrapperElements).fadeOut(10);
    projectsWrapper.each((index , value) => 
    {
        $(value).hover(
            () => showOrHide(wrapperElements , true , $(value).attr('dataId')) , 
            () => showOrHide(wrapperElements , false , $(value).attr('dataId'))
            );
    });
});