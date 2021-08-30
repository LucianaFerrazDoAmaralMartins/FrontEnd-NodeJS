window.addEventListener("load",()=>{
    const container = document.getElementById("container");

    // uso o var para poder adicionar,acrescentar e mudar o conteúdo
    var estrutura = "";

    fetch("http://localhost:4000/noticias")
    .then ((response)=>response.json())
    .then ((rs)=>{
rs.output.map((item)=>{
    estrutura+="<div id='linha'>";
    estrutura += "<div id= 'foto'><img src="+item.foto+"></div>";
    estrutura+="<div id='titulonoticia'>"+item.titulonoticia+"</div>";
    estrutura+="<div id='autornoticia'>"+item.autornoticia+"</div>";
    estrutura+="<div id='datapublicacao'>"+item.datapublicacao+"</div>";
    estrutura+="<div id='materia'>"+item.texto+"</div>";
    estrutura +="<div id='atualizar'><a href=atualizarnoticia.html?"+item._id+">Atualizar</a></div>";
    estrutura +="<div id='apagar'><a href=apagarnoticia.html?"+item._id+">Apagar</a></div>";
    estrutura +="</div>";
      });
      container.innerHTML = estrutura;
   })
   .catch((erro)=>console.error("Erro ao tentar listar notícias -> "+erro));
});
