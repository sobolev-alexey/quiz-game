import WebFontLoader from 'webfontloader';

export default () => 
    WebFontLoader.load({
        google: {
            families: [
                'Open Sans:300,400,500,600,700,800', 
                'Maven Pro:300,400,500,600,700,800',
                'Inter:300,400,500,600,700,800',
                'Metropolis:300,400,500,600,700,800,900',
                'Roboto:300,400,500,600,700,800,900'
            ],
        },
    });
