$(document).ready(function(){
    console.log('loaded');
    $('.list-inline-item').hover(function(){      
        var TooltipText = $(this).attr('data-tooltip');
        $(this).attr('title', TooltipText);
    });
});