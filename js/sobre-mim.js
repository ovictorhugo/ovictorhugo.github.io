const itensCurso = [
    {
        id: 'curso0',
        nome: 'Olimpíada Brasileira de Robótica (OBR)',
        descricao: 'Competição de nível nacional de Etapa Estadual do Estado da Bahia',
        img: 'img/about/img2.png',
        date: 'Setembro 2018',
    },

    {
        id: 'curso1',
        nome: 'Olimpíada Brasileira de Robótica (OBR)',
        descricao: 'Etapa Nacional',
        img: 'img/about/img2.png',
        date: 'Novembro 2018',
    },

    {
        id: 'curso2',
        nome: 'Programador WEB',
        descricao: 'Instituto Federal de Ciência e Tecnologia do Sul de Minas Gerais (200 Horas)',
        img: 'img/about/img1.png',
        date: '30 de abril a 27 de agosto de 2020',
    },

    {
        id: 'curso3',
        nome: 'Desenvolvimento de Aplicativos Android Studio - Kotlin',
        descricao: 'Escola de programação Cel.Lep (32 Horas)',
        img: 'img/about/img3.png',
        date: '01/10/2020',
    },

    {
        id: 'curso4',
        nome: 'UI/UX Design',
        descricao: 'Escola de programação Cel.Lep (32 Horas)',
        img: 'img/about/img3.png',
        date: '28/11/2020',
    },

    {
        id: 'curso5',
        nome: 'Treinamento de Capacitação Profissional Estudantil',
        descricao: 'Cedaspy (4,5 Horas)',
        img: 'img/about/img4.png',
        date: '03/07/2019 a 17/07/2019',
    },

    {
        id: 'curso6',
        nome: 'Bootcamp UX Design',
        descricao: 'How Education (36 Horas)',
        img: 'img/about/img5.png',
        date: 'Agosto de 2020',
    },

    {
        id: 'curso7',
        nome: 'Curso Start',
        descricao: 'Escola de Computação Gráfica Saga (3 Anos)',
        img: 'img/about/img6.png',
        date: '29/07/2017',
    },

    {
        id: 'curso8',
        nome: 'Eletrônica: conceitos e componentes básicos',
        descricao: 'Code IoT (24 Horas)',
        img: 'img/about/img7.png',
        date: 'Novembro 2020',
    },

    {
        id: 'curso9',
        nome: 'Escola de Líderes Estudantis',
        descricao: 'SESI',
        img: 'img/about/img8.png',
        date: 'Abril a Novembro de 2019',
    },

    {
        id: 'curso10',
        nome: 'Temporada City Shaper',
        descricao: 'First Lego League (FLL)',
        img: 'img/about/img10.png',
        date: '2019-202',
    },

    {
        id: 'curso11',
        nome: 'Temporada Into Orbit (2018-2019)',
        descricao: 'First Lego League (FLL)',
        img: 'img/about/img9.png',
        date: '2018-2019',
    },

    {
        id: 'curso12',
        nome: 'Oficina de Unity + Programação em C#',
        descricao: 'Mundo Senai On-line (3 horas e 31 minutos)',
        img: 'img/about/img11.png',
        date: '27 de Novembro de 2020',
    },
]

inicializarCursos = () => {
    var containerCursos =  document.getElementById('content-cursos');
    itensCurso.map((val)=>{
        containerCursos.innerHTML+= `
        <div class="curso">
            <header>
                <p class="date">`+val.date+`</p>
                <h2 class="titulo-curso">`+val.nome+`</h2>
                <div class="content-img-curso">
                    <img class="img-curso" src="`+val.img+`" alt="`+val.nome+`">
                </div>
            </header>
            <p>`+val.descricao+`</p>
            <a class="btn-ver-projeto-final" href="`+val.id+`">Ver projeto final</a>
        </div>
        `;   
    })
}

inicializarCursos();

//Aplicativos
const itensAplicativo = [
    {
        id: 'aplicativo0',
        nome: 'Adobe Photoshop',
        img: 'https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg',
    },

    {
        id: 'aplicativo1',
        nome: 'Adobe Illustrator',
        img: 'https://www.adobe.com/content/dam/cc/icons/illustrator.svg',
    },

    {
        id: 'aplicativo2',
        nome: 'Adobe After Effects',
        img: 'https://www.adobe.com/content/dam/cc/icons/aftereffects.svg',
    },

    {
        id: 'aplicativo3',
        nome: 'Adobe Xd',
        img: 'https://www.adobe.com/content/dam/cc/icons/xd.svg',
    },

    {
        id: 'aplicativo4',
        nome: 'Adobe Premiere Pro',
        img: 'https://www.adobe.com/content/dam/cc/icons/pr_cc_app_RGB.svg',
    },

    {
        id: 'aplicativo5',
        nome: 'Adobe Indesign',
        img: 'https://www.adobe.com/content/dam/cc/icons/indesign.svg',
    },

    {
        id: 'aplicativo6',
        nome: 'Adobe Animate',
        img: 'https://www.adobe.com/content/dam/cc/icons/animate.svg',
    },

    {
        id: 'aplicativo7',
        nome: 'Adobe Character Animator',
        img: 'https://www.adobe.com/content/dam/shared/images/product-icons/svg/character-animator.svg',
    },

    {
        id: 'aplicativo8',
        nome: 'Fusion 360',
        img: 'https://damassets.autodesk.net/content/dam/autodesk/www/products/responsive-imagery/responsive-badges-free-trial/2020/fusion-360-icon-128px-hd.png',
    },

    {
        id: 'aplicativo9',
        nome: 'Office 365',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png',
    },

    {
        id: 'aplicativo10',
        nome: 'Android Studio',
        img: 'https://i.pinimg.com/originals/4e/74/7c/4e747c82368d9681b75d54f56319dae7.png',
    },

    {
        id: 'aplicativo11',
        nome: 'Figma',
        img: 'https://i.pinimg.com/originals/66/8c/cc/668cccb3f734f342e07c0185e6d9a975.png',
    },

    {
        id: 'aplicativo12',
        nome: 'Miro',
        img: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_cde9699182f0df72e12eb06a77ebb4cc/miro.png',
    },
]

inicializarAplicativos = () => {
    var containerAplicativo =  document.getElementById('itens-faixa-aplicativo');
    itensAplicativo.map((val)=>{
        containerAplicativo.innerHTML+= `
        <div class="item-faixa">
            <div class="logo-item-faixa-aplicativo">
                    <img src="`+val.img+`">
                    `+val.nome+`
            </div>
        </div>
        `;   
    })
}

inicializarAplicativos();

//Programação
const itensProgramacao = [
    {
        id: 'programacao0',
        nome: 'HTML5',
        img: 'https://img.icons8.com/color/96/000000/html-5.png',
    },

    {
        id: 'programacao1',
        nome: 'CSS3',
        img: 'https://img.icons8.com/color/96/000000/css3.png',
    },

    {
        id: 'programacao3',
        nome: 'PHP',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1067px-PHP-logo.svg.png',
    },

    {
        id: 'programacao2',
        nome: 'JavaScript',
        img: 'https://img.icons8.com/color/96/000000/javascript.png',
    },

    {
        id: 'programacao3',
        nome: 'Python',
        img: 'https://img.icons8.com/color/96/000000/python.png',
    },
]

inicializarProgramacao = () => {
    var containerProgramacao =  document.getElementById('itens-faixa-programacao');
    itensProgramacao.map((val)=>{
        containerProgramacao.innerHTML+= `
        <div class="item-faixa">
            <div class="logo-item-faixa-programacao">
                    <img src="`+val.img+`">
                    `+val.nome+`
            </div>
        </div>
        `;   
    })
}

inicializarProgramacao();