const input=document.getElementById("chat-input");

const messages=document.getElementById("chat-messages");

input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        let text=input.value;

        let p=document.createElement("p");

        p.innerText="Você: "+text;

        messages.appendChild(p);

        let bot=document.createElement("p");

        bot.innerText="AgroBot: Agricultura sustentável ajuda o planeta 🌱";

        messages.appendChild(bot);

        input.value="";

    }

});
