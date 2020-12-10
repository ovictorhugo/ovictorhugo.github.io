//Destaques
const itens_destaques = [
    {
        id: 'Destaques1',
        nome: 'Oi Italo',
        descricao: 'Obra de arte',
        img: 'img/fundo_1.png',
        popup:'',
        imgpopup: 'img/teste_1.png',
        app: '',
    },

    {
        id: 'Destaques2',
        nome: 'teste1',
        descricao: 'Obra de arte',
        img: 'img/teste_1.png',
        popup:'',
        imgpopup: '',
        app: '<div><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""></div>',
    },

    {
        id: 'Destaques2',
        nome: 'teste1',
        descricao: 'Obra de arte',
        img: 'img/teste_1.png',
        popup:'',
        imgpopup: '',
        app: '<div><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""></div>',
    },

    {
        id: 'Destaques2',
        nome: 'teste1',
        descricao: 'Obra de arte',
        img: 'img/teste_1.png',
        popup:'',
        imgpopup: '',
        app: '<div><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""></div>',
    },

]

inicializarDestaques = () => {
    var containerDestaques =  document.getElementById('destaques');
    itens_destaques.map((val)=>{
        containerDestaques.innerHTML+= `
        <a href="#`+val.id+`" key="`+val.id+`" class="project" id="project">
            <div class="content-project">
                <div class="cover-content-project">
                        <img src="`+val.img+`" alt="">
                </div>
            </div>
            <div class="content-project-footer">
                <h3>`+val.nome+`</h3>
                `+val.app+`
            </div>
        </a>

        <!-- Popup -->

        <div id="`+val.id+`" class="overlay">
        <div class="main-overlay">
            <div class="popup">
                <div class="popup-cabecalho">
                    <div class="content-popup-cabecalho">
                        <div class="img-titulo-cabecalho">
                            <div class="img-popup-cabecalho"><img src="`+val.popup+`" alt="`+val.nome+`"></div>
                            <div class="titulo-popup">
                                <h1>`+val.nome+`</h1>
                                <p>`+val.descricao+`</p>
                            </div>
                        </div>

                        <div class="actions-popup">
                            <div class="content-actions-popup">
                                <a href="#projetos" class="action-popup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="var(--orange)"/></svg></a>
                                <a href="javascript:void(0)" onclick="share()" class="action-popup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z" fill="var(--orange)"/></svg></a>
                                <label class="action-popup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.763 17H20V5H4v13.385L5.763 17zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455z" fill="var(--orange)"/></svg><input class="input-section" type="radio" name="colorRadio" value="contato"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <img src="`+val.imgpopup+`" alt="`+val.nome+`">

                <div href="" class="descricao-popup">
                    <div class="content-descricao-popup">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                
                <div class="footer-popup">
                    <div class="content-footer-popup">
                        <h2>Talvez você também goste</h2>
                        <div class="contentGrid-grid" id="contentGrid-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;   
    })
}

inicializarDestaques();

//Logomarcas
const itens_logomarcas = [
    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/fundo_1.png',
        popup:'',
        imgpopup: 'img/teste_1.png',
        app: '',
    },

    {
        id: 'Destaques2',
        nome: 'teste1',
        descricao: 'Obra de arte',
        img: 'img/teste_1.png',
        popup:'',
        imgpopup: '',
        app: '<div><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""></div>',
    },

]

inicializarLogomarcas = () => {
    var containerLogomarcas =  document.getElementById('logomarcas');
    itens_logomarcas.map((val)=>{
        containerLogomarcas.innerHTML+= `
        <a href="#`+val.id+`" key="`+val.id+`" class="project" id="project">
            <div class="content-project">
                <div class="cover-content-project">
                        <img src="`+val.img+`" alt="">
                </div>
            </div>
            <div class="content-project-footer">
                <h3>`+val.nome+`</h3>
                `+val.app+`
            </div>
        </a>

        <!-- Popup -->

        <div id="`+val.id+`" class="overlay">
        <div class="main-overlay">
            <div class="popup-cabecalho">
                <div class="content-popup-cabecalho">
                    <div class="titulo-popup">
                        <h1>`+val.nome+`</h1>
                        <p>`+val.descricao+`</p>
                    </div>
    
                    <div class="btns-popup">
                        <a href="" class="forward-popup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z" fill="var(--orange)"/></svg></a>
                        <a href="#projetos" class="close-popup">Fechar</a>
                    </div>
                </div>
            </div>
            <div class="popup">
                <img src="`+val.imgpopup+`" alt="`+val.nome+`">
                <div class="footer-popup">
                    <div class="content-footer-popup">
                        <h2>Talvez você também goste</h2>
                        <div class="contentGrid-grid" id="contentGrid-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;   
    })
}

inicializarLogomarcas();

//Ilustracoes
const itens_ilustracoes = [
    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/fundo_1.png',
        popup:'',
        imgpopup: 'img/teste_1.png',
        app: '',
    },

    {
        id: 'Destaques2',
        nome: 'teste1',
        descricao: 'Obra de arte',
        img: 'img/teste_1.png',
        popup:'',
        imgpopup: '',
        app: '<div><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""></div>',
    },

]

inicializarIlustracoes = () => {
    var containerIlustracoes =  document.getElementById('ilustracoes');
    itens_ilustracoes.map((val)=>{
        containerIlustracoes.innerHTML+= `
        <a href="#`+val.id+`" key="`+val.id+`" class="project" id="project">
            <div class="content-project">
                <div class="cover-content-project">
                        <img src="`+val.img+`" alt="">
                </div>
            </div>
            <div class="content-project-footer">
                <h3>`+val.nome+`</h3>
                `+val.app+`
            </div>
        </a>

        <!-- Popup -->

        <div id="`+val.id+`" class="overlay">
        <div class="main-overlay">
            <div class="popup-cabecalho">
                <div class="content-popup-cabecalho">
                    <div class="titulo-popup">
                        <h1>`+val.nome+`</h1>
                        <p>`+val.descricao+`</p>
                    </div>
    
                    <div class="btns-popup">
                        <a href="" class="forward-popup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z" fill="var(--orange)"/></svg></a>
                        <a href="#projetos" class="close-popup">Fechar</a>
                    </div>
                </div>
            </div>
            <div class="popup">
                <img src="`+val.imgpopup+`" alt="`+val.nome+`">
                <div class="footer-popup">
                    <div class="content-footer-popup">
                        <h2>Talvez você também goste</h2>
                        <div class="contentGrid-grid" id="contentGrid-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;   
    })
}

inicializarIlustracoes();

//Web Design
const itens_web_design = [
    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/fundo_1.png',
        popup:'',
        imgpopup: 'img/teste_1.png',
        app: '',
    },

    {
        id: 'Destaques2',
        nome: 'teste1',
        descricao: 'Obra de arte',
        img: 'img/teste_1.png',
        popup:'',
        imgpopup: '',
        app: '<div><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""></div>',
    },

]

inicializarWebDesign = () => {
    var containerWebDesign =  document.getElementById('web_design');
    itens_web_design.map((val)=>{
        containerWebDesign.innerHTML+= `
        <a href="#`+val.id+`" key="`+val.id+`" class="project" id="project">
            <div class="content-project">
                <div class="cover-content-project">
                        <img src="`+val.img+`" alt="">
                </div>
            </div>
            <div class="content-project-footer">
                <h3>`+val.nome+`</h3>
                `+val.app+`
            </div>
        </a>

        <!-- Popup -->

        <div id="`+val.id+`" class="overlay">
        <div class="main-overlay">
            <div class="popup-cabecalho">
                <div class="content-popup-cabecalho">
                    <div class="titulo-popup">
                        <h1>`+val.nome+`</h1>
                        <p>`+val.descricao+`</p>
                    </div>
    
                    <div class="btns-popup">
                        <a href="" class="forward-popup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z" fill="var(--orange)"/></svg></a>
                        <a href="#projetos" class="close-popup">Fechar</a>
                    </div>
                </div>
            </div>
            <div class="popup">
                <img src="`+val.imgpopup+`" alt="`+val.nome+`">
                <div class="footer-popup">
                    <div class="content-footer-popup">
                        <h2>Talvez você também goste</h2>
                        <div class="contentGrid-grid" id="contentGrid-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;   
    })
}

inicializarWebDesign();

//Web Design
const itens_impressos = [
    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/fundo_1.png',
        popup:'',
        imgpopup: 'img/teste_1.png',
        app: '',
    },

    {
        id: 'Destaques2',
        nome: 'teste1',
        descricao: 'Obra de arte',
        img: 'img/teste_1.png',
        popup:'',
        imgpopup: '',
        app: '<div><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""></div>',
    },

]

inicializarImpressos = () => {
    var containerImpressos =  document.getElementById('impressos');
    itens_impressos.map((val)=>{
        containerImpressos.innerHTML+= `
        <a href="#`+val.id+`" key="`+val.id+`" class="project" id="project">
            <div class="content-project">
                <div class="cover-content-project">
                        <img src="`+val.img+`" alt="">
                </div>
            </div>
            <div class="content-project-footer">
                <h3>`+val.nome+`</h3>
                `+val.app+`
            </div>
        </a>

        <!-- Popup -->

        <div id="`+val.id+`" class="overlay">
        <div class="main-overlay">
            <div class="popup-cabecalho">
                <div class="content-popup-cabecalho">
                    <div class="titulo-popup">
                        <h1>`+val.nome+`</h1>
                        <p>`+val.descricao+`</p>
                    </div>
    
                    <div class="btns-popup">
                        <a href="" class="forward-popup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z" fill="var(--orange)"/></svg></a>
                        <a href="#projetos" class="close-popup">Fechar</a>
                    </div>
                </div>
            </div>
            <div class="popup">
                <img src="`+val.imgpopup+`" alt="`+val.nome+`">
                <div class="footer-popup">
                    <div class="content-footer-popup">
                        <h2>Talvez você também goste</h2>
                        <div class="contentGrid-grid" id="contentGrid-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;   
    })
}

inicializarImpressos();

//Web Design
const itens_social_media = [
    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/fundo_1.png',
        popup:'',
        imgpopup: 'img/teste_1.png',
        app: '',
    },

    {
        id: 'Destaques2',
        nome: 'teste1',
        descricao: 'Obra de arte',
        img: 'img/teste_1.png',
        popup:'',
        imgpopup: '',
        app: '<div><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""></div>',
    },

]

inicializarSocialMedia = () => {
    var containerSocialMedia =  document.getElementById('social_media');
    itens_social_media.map((val)=>{
        containerSocialMedia.innerHTML+= `
        <a href="#`+val.id+`" key="`+val.id+`" class="project" id="project">
            <div class="content-project">
                <div class="cover-content-project">
                        <img src="`+val.img+`" alt="">
                </div>
            </div>
            <div class="content-project-footer">
                <h3>`+val.nome+`</h3>
                `+val.app+`
            </div>
        </a>

        <!-- Popup -->

        <div id="`+val.id+`" class="overlay">
        <div class="main-overlay">
            <div class="popup-cabecalho">
                <div class="content-popup-cabecalho">
                    <div class="titulo-popup">
                        <h1>`+val.nome+`</h1>
                        <p>`+val.descricao+`</p>
                    </div>
    
                    <div class="btns-popup">
                        <a href="" class="forward-popup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z"/><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z" fill="var(--orange)"/></svg></a>
                        <a href="#projetos" class="close-popup">Fechar</a>
                    </div>
                </div>
            </div>
            <div class="popup">
                <img src="`+val.imgpopup+`" alt="`+val.nome+`">
                <div class="footer-popup">
                    <div class="content-footer-popup">
                        <h2>Talvez você também goste</h2>
                        <div class="contentGrid-grid" id="contentGrid-grid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;   
    })
}

inicializarSocialMedia();

//Stories
const itens_stories = [
    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/stories-teste.png',
        popup:'',
        app: '<div><img src="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" alt=""></div>',
    },

    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/stories-teste.png',
        popup:'',
        app: '',
    },

    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/stories-teste.png',
        popup:'',
        app: '',
    },

    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/stories-teste.png',
        popup:'',
        app: '',
    },

    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/stories-teste.png',
        popup:'',
        app: '',
    },

    {
        id: 'Destaques1',
        nome: 'teste',
        descricao: 'Obra de arte',
        img: 'img/stories-teste.png',
        popup:'',
        app: '',
    },

]

inicializarStories = () => {
    var containerStories =  document.getElementById('stories');
    itens_stories.map((val)=>{
        containerStories.innerHTML+= `
        <a href="" class="long-project" id="long-project">
            <div class="content-long-project">
                    <div class="cover-long-content-project">
                        <img src="`+val.img+`" alt="`+val.nome+`">
                    </div>
            </div>
    
            <div class="content-long-project-footer">
                <h3>`+val.nome+`</h3>
                `+val.app+`
            </div>
         </a>
        `;   
    })
}

inicializarStories();