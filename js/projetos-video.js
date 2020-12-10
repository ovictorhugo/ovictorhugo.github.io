const itens_video = [
    {
        id: 'v0',
        nome: 'Logomarcas',
        descricao: '',
        img: 'img/projects/audiovisual/img2.png',
        video: '',
    },

    {
        id: 'v1',
        nome: 'Logomarcas',
        descricao: '',
        img: 'img/projects/audiovisual/img2.png',
        video: '',
    },

    {
        id: 'v2',
        nome: 'Logomarcas',
        descricao: '',
        img: 'img/projects/audiovisual/img2.png',
        video: '',
    },

]

inicializarVideos = () => {
    var containerVideos =  document.getElementById('three-videos');
    itens_video.map((val)=>{
        containerVideos.innerHTML+= `
        <a href="`+val.id+`" class="mini-video-player" id="`+val.id+`">
            <img src="`+val.img+`" alt="`+val.nome+`">
        </a>
        `;   
    })
}

inicializarVideos();