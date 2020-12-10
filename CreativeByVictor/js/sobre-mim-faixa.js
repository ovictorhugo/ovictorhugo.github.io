const itensFaixa = [
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

inicializarFaixa = () => {
    var containerFaixa =  document.getElementById('itens-faixa');
    itensFaixa.map((val)=>{
        containerFaixa.innerHTML+= `
        <div class="item-faixa">
            <div class="logo-item-faixa">
                    <img src="`+val.img+`">
                    `+val.nome+`
            </div>
        </div>
        `;   
    })
}

inicializarFaixa();