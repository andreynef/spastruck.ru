import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/ui/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>{/*добавить head к кажд pages для seo*/}
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta property={'og:type'} content={'website'}/>{/*добавляем open graph превью для SEO. Подробности в www.ogp.me */}
          <meta property={'og:image'} content={'https://kazan.skidkom.ru/static/content/35350/common/avto/35350_16021561744484.jpg'}/>{/*добавляем open graph превью для SEO */}
          <meta property={'og:image:type'} content={'image/png'}/>{/*добавляем open graph превью для SEO */}
          <meta property={'og:image:width'} content={'1200'}/>{/*рекоменд ширина картинки */}
          <meta property={'og:image:height'} content={'630'}/>{/*рекоменд высота картинки */}
          <meta property={'og:image:alt'} content={'company logo'}/>{/*alt*/}
          <link rel="icon" href="/favicon.png" />{/*добавляем картинку фавикон*/}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Caveat|Raleway:100,400,400i,700|Roboto:300,400,500,700|Galdeano:100,400,400i,700&display=swap"
          />{/*добавляем нужные шрифты*/}

        </Head>
        <body style={{margin:0}}>{/*сброс дефолт полей*/}
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {


  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
