/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import React from 'react';

import { AppConfig } from '@/utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <React.Fragment>
        <Html lang={AppConfig.locale}>
          <Head>
            <link
              rel='stylesheet'
              href='https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css'
            />
            <link
              rel='stylesheet'
              href='https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css'
            />
            <link rel='stylesheet' href='/assets/css/ace.jqgrid.css' />
          </Head>
          <body className='bg-gray-500'>
            <Main />
            <NextScript />
          </body>
          {/* <script src='/js/scripts.js'></script> */}
        </Html>
      </React.Fragment>
    );
  }
}

export default MyDocument;
