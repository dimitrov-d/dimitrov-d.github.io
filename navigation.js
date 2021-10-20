const sections = $('section').add('footer');
const nav = $('nav');
const nav_height = nav.outerHeight();

$(window).on('scroll', function ()
{
    const cur_pos = $(this).scrollTop();
    sections.each((i, el) =>
    {
        const elemRect = el.getBoundingClientRect();
        const top  = getOffset(elemRect) - nav_height;
        const bottom = top + elemRect.height;

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            nav.find(`a[href="#${el.id}"]`)?.addClass('active');
        }
    });
});

function getOffset(elemRect)
{
    const bodyRect = document.body.getBoundingClientRect();
    return elemRect.top - bodyRect.top;
}