import path from 'path';
import glob from 'glob';
import webpack, { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import PurgecssPlugin from 'purgecss-webpack-plugin';

interface Environment {
  development?: boolean;
  production?: boolean;
}

const webpackConfig = (env: Environment): Configuration => ({
  mode: env.production || !env.development ? 'production' : 'development',
  ...(env.production || !env.development ? {} : { devtool: 'source-map' }),
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
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
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }) as any,
    new PurgecssPlugin({
      paths: glob.sync(`${path.join(__dirname, 'app')}/**/*`, { nodir: true })
    }),
    new webpack.DefinePlugin({
      'process.env.PRODUCTION': env.production || !env.development,
      'process.env.NAME': JSON.stringify(require('./package.json').name),
      'process.env.VERSION': JSON.stringify(require('./package.json').version)
    })
  ]
});

export default webpackConfig;
