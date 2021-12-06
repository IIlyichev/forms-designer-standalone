require('@shesha/reactjs/dist/styles.less');
require('antd/dist/antd.less');
//require('src/styles/custom-n-progress.less');

import App from 'next/app';
import { withRouter } from 'next/router';
import React from 'react';

interface IState { }

// eslint-disable-next-line @typescript-eslint/ban-types
export class Main extends App<{}, {}, IState> {
  static async getInitialProps({ Component, ctx }: { Component: any; ctx: any }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const newRouter = {
      ...router, push: (url, as, options) => {
        console.log({ url, as, options });
        return router.push(url, as, options);
      }
    };

    return (
      <Component {...pageProps} />
    );
  }
}

export default withRouter(Main);
