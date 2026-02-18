
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

async function send_ai()
{
    /*
           <li class="ai-out"><p>Im bot</p></li>
            <li class="usr-out"><p>Hello!</p></li>
            <li class="ai-out"><p>what do u want!</p></li>
    */
    let usr_ai_chat_inp = document.getElementById('ai-chat-input');
    let ai_chat_ul = document.getElementById('ai-chat-ul');

    let new_usr_msg = document.createElement('li');
    new_usr_msg.classList.add('usr-out');

    let new_usr_msg_p = document.createElement('p');
    new_usr_msg_p.innerText = usr_ai_chat_inp.value;
    new_usr_msg.appendChild(new_usr_msg_p);

    ai_chat_ul.appendChild(new_usr_msg)

    /*
                const out = document.getElementById("out");
            out.innerText = "Loading...";

            const text = document.getElementById("txt").value;
            const model = document.getElementById('models').value;
            const res = await axios.post("/api", { 
                text: text,
                model: model
            });

            const d = res.data.output;
            out.innerText = d;
    */

    const res = await axios.post("http://127.0.0.1:8080/api", {
        text: usr_ai_chat_inp.value,
        model: 'gpt-3.5-turbo'
    });
    const d = res.data.output;

    let new_ai_msg = document.createElement('li');
    new_ai_msg.classList.add('ai-out');

    let new_ai_msg_p = document.createElement('p');
    new_ai_msg_p.innerText = d;
    new_ai_msg.appendChild(new_ai_msg_p);

    ai_chat_ul.appendChild(new_ai_msg)
}