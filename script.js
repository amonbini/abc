*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:'Poppins',sans-serif;
    background:#f5fff5;
    color:#222;
    transition:0.4s;
}

.dark{
    background:#111;
    color:white;
}

header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 10%;
    background:#1b5e20;
    position:sticky;
    top:0;
    z-index:1000;
}

.logo{
    color:white;
    font-size:28px;
    font-weight:bold;
}

nav{
    display:flex;
    gap:20px;
}

nav a{
    color:white;
    text-decoration:none;
}

.hero{
    height:90vh;
    background:url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600') center/cover;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    color:white;
}

.hero-content h1{
    font-size:60px;
}

.btn{
    display:inline-block;
    margin-top:20px;
    padding:14px 30px;
    background:#43a047;
    color:white;
    border-radius:10px;
    text-decoration:none;
}

.cards{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:30px;
    padding:80px 20px;
}

.card{
    background:white;
    width:300px;
    padding:30px;
    border-radius:20px;
    text-align:center;
    box-shadow:0 5px 15px rgba(0,0,0,0.1);
    transition:0.4s;
}

.card:hover{
    transform:translateY(-10px);
}

.card img{
    width:80px;
}

.counter-section{
    display:flex;
    justify-content:center;
    gap:40px;
    padding:80px;
    background:#e8f5e9;
}

.counter-box{
    text-align:center;
}

.counter{
    font-size:60px;
    color:#1b5e20;
}

.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
    gap:20px;
    padding:60px;
}

.gallery img{
    width:100%;
    height:300px;
    object-fit:cover;
    border-radius:20px;
}

footer{
    background:#1b5e20;
    color:white;
    text-align:center;
    padding:30px;
}

#loader{
    position:fixed;
    width:100%;
    height:100%;
    background:#1b5e20;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:9999;
}

#chatbot{
    position:fixed;
    bottom:20px;
    right:20px;
    width:300px;
    background:white;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 0 20px rgba(0,0,0,0.2);
}

#chat-header{
    background:#2e7d32;
    color:white;
    padding:15px;
}

#chat-messages{
    height:200px;
    padding:10px;
    overflow-y:auto;
}

#chat-input{
    width:100%;
    padding:15px;
    border:none;
    outline:none;
}

@media(max-width:768px){

    nav{
        display:none;
        flex-direction:column;
        background:#1b5e20;
        position:absolute;
        top:80px;
        right:0;
        width:200px;
        padding:20px;
    }

    nav.active{
        display:flex;
    }

    .hero-content h1{
        font-size:40px;
    }

    .counter-section{
        flex-direction:column;
    }
}
⚡ js/script.js
