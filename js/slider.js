$(()=>
{
    let marks = [$('.mark-1') , $('.mark-2') , $('.mark-3') , $('.mark-4')];
    let Start = (Index = null , now = false) =>
    {
        let slide = () =>
        {
            let currentImage = $('.current');
            let currentIndex = $(currentImage).index();
            let nextIndex = Index || currentIndex + 1;
            let nextImage = $('.image-sld').eq(nextIndex);
            $(currentImage).fadeOut(500);
            $(currentImage).removeClass('current');
            marks[currentIndex].removeClass('marked');
            if(nextIndex == $('.image-sld').last().index() + 1)
            {
                $('.image-sld').eq(0).fadeIn(500);
                $('.image-sld').eq(0).addClass('current');
                marks[0].addClass('marked');
            }
            else
            {
                $(nextImage).fadeIn(500);
                $(nextImage).addClass('current');
                marks[nextIndex].addClass('marked');
            }
        };
        if(now) slide();
        Index = null;
        return setInterval(() => slide(), 7000);
    };
    let start = Start();
    $('.marks > *').on('click' , e => 
    {
        clearInterval(start);
        start = Start($(e.target).attr('value') , true);
    });
});