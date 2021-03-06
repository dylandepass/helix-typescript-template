import path from 'path';
import webpack, { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

interface Environment {
  development?: boolean;
  production?: boolean;
}

const webpackConfig = (env: Environment): Configuration => ({
  mode: env.production || !env.development ? 'production' : 'development',
  ...(env.production || !env.development ? {} : { devtool: 'source-map' }),
  optimization: {
    runtimeChunk: 'single'
  },
  entry: {
    app: {
      import: './app/app.tsx',
      dependOn: 'shared'
    },
    home: {
      import: './app/templates/Home/index.tsx',
      dependOn: 'shared'
    },
    about: {
      import: './app/templates/About/index.tsx',
      dependOn: 'shared'
    },
    blog: {
      import: './app/templates/Blog/index.tsx',
      dependOn: 'shared'
    },
    post: {
      import: './app/templates/Post/index.tsx',
      dependOn: 'shared'
    },
    contacts: {
      import: './app/templates/Contacts/index.tsx',
      dependOn: 'shared'
    },
    shared: ['render-jsx']
  },
  watch: env.production || !env.development ? false : true,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name]-bundle.js'
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: ['.css', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }, 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }) as any,
    new webpack.DefinePlugin({
      'process.env.PRODUCTION': env.production || !env.development,
      'process.env.NAME': JSON.stringify(require('./package.json').name),
      'process.env.VERSION': JSON.stringify(require('./package.json').version)
    }),
    ...(env.production ? [new CssMinimizerPlugin()] : [])
  ]
});

export default webpackConfig;
