const items_categoria = [
    {
        id: 'cat1',
        nome: 'Logomarcas',
        img: 'img/projects/categories/design_de_logomarcas.png',
        href: '#logomarcas'
    },

    {
        id: 'cat2',
        nome: 'Ilustrações',
        img: 'img/projects/categories/ilustracoes.png',
        href: '#ilustracoes'
    },

    {
        id: 'cat3',
        nome: 'Web Design',
        img: 'img/projects/categories/web_design.png',
        href: '#web_design'
    },

    {
        id: 'cat4',
        nome: 'Impressos',
        img: 'img/projects/categories/impressos.png',
        href: '#impressos'
    },

    {
        id: 'cat5',
        nome: 'Social Media',
        img: 'img/projects/categories/social_media.png',
        href: '#social_media'
    },

    {
        id: 'cat6',
        nome: 'Stories',
        img: 'img/projects/categories/robotica.png',
        href: 'stories'
    },

    {
        id: 'cat7',
        nome: 'Modelagem 3D',
        img: 'img/projects/categories/modelagem_3d.png',
        href: '#modelagem_3d'
    },

    {
        id: 'cat8',
        nome: 'Materiais',
        img: 'img/projects/categories/materiais.png',
        href: '#materiais'
    },

    {
        id: 'cat9',
        nome: 'Audiovisual',
        img: 'img/projects/categories/audiovisual.png',
        href: '#audiovisual'
    },

    {
        id: 'cat10',
        nome: 'Robótica',
        img: 'img/projects/categories/robotica.png',
        href: '#robotica'
    },

    {
        id: 'cat11',
        nome: 'Ui/Ux Design',
        img: 'img/projects/categories/robotica.png',
        href: '#ui_ux_design'
    },

    {
        id: 'cat12',
        nome: 'Programação',
        img: 'img/projects/categories/robotica.png',
        href: '#programacao'
    },

    {
        id: 'cat13',
        nome: 'Outros',
        img: 'img/projects/categories/outros.png',
        href: '#outros'
    },
]

inicializarCategorias = () => {
    var containerCategorias =  document.getElementById('categorias');
    items_categoria.map((val)=>{
        containerCategorias.innerHTML+= `
        <a class="item" href="`+val.href+`">
            <div>
                <div class="imagem_item"><img src="`+val.img+`" alt="`+val.nome+`"></div>
                <p>`+val.nome+`</p>
            </div>
        </a>
        `;   
    })
}

inicializarCategorias();