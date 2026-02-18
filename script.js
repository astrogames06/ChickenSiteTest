
function scrollToSection(event, sectionId)
{
    event.preventDefault();

    const element = document.getElementById(sectionId);
    if (element)
    {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function openchat()
{
    let f = document.getElementById('ai-chat');
    if (f.classList.contains('close-chat'))
    {
        f.classList.remove('close-chat');
        f.classList.add('open-chat');
    }
    else
    {
        f.classList.add('close-chat');
        f.classList.remove('open-chat');
    }
}