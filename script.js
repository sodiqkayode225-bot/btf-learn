*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#f4f8ff;
color:#222;
}

nav{
background:#0d47a1;
display:flex;
justify-content:space-between;
align-items:center;
padding:18px 30px;
flex-wrap:wrap;
}

.logo{
color:white;
font-size:24px;
font-weight:bold;
}

nav ul{
display:flex;
list-style:none;
gap:20px;
}

nav ul li a{
color:white;
text-decoration:none;
font-weight:bold;
}

.hero{
text-align:center;
padding:70px 20px;
}

.hero h1{
font-size:40px;
color:#0d47a1;
margin-bottom:15px;
}

.hero p{
font-size:18px;
color:#555;
margin-bottom:20px;
}

button{
background:#2e7d32;
color:white;
padding:14px 30px;
border:none;
border-radius:30px;
font-size:18px;
cursor:pointer;
}

button:hover{
background:#1b5e20;
}

.mission{
background:white;
margin:30px;
padding:25px;
border-radius:15px;
box-shadow:0 5px 15px rgba(0,0,0,.1);
}

.mission h2{
color:#0d47a1;
margin-bottom:15px;
}

.mission label{
display:block;
margin:12px 0;
}

.reward{
margin-top:15px;
font-weight:bold;
color:#2e7d32;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
padding:30px;
}

.card{
background:white;
padding:20px;
border-radius:15px;
box-shadow:0 5px 15px rgba(0,0,0,.1);
}

.card h2{
color:#0d47a1;
margin-bottom:10px;
}

footer{
background:#0d47a1;
color:white;
text-align:center;
padding:20px;
margin-top:30px;
}

