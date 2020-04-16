const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const baseConfig = env => {
  console.log("node_env:", env.NODE_ENV);
  const isProd = env.NODE_ENV === "production" ? true : false;
  const cleanPlugin = isProd ? [new CleanWebpackPlugin()] : [];
  return {
    entry: {
      tradewindow: "./src/js/index.js",
      tradedocs: "./src/js/tradedocs.js",
      legal: "./src/js/legal.js",
      policies: "./src/js/policy.js",
      signup: "./src/js/signup.js",
      login: "./src/js/login.js",
      // confirmUser:"./src/js/confirmUser.js",
      prodoc: "./src/js/prodoc.js"
    },
    output: {
      path: __dirname + "/build",
      publicPath: "",
      filename: "./script/[name].[hash:20].js"
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpe?g|gif|ttf|eot|woff2?|mp4)$/,
          use: [
            {
              loader: "file-loader",
              // loader: "url-loader",
              options: {
                limit: 10000,
                name: "./asset/[name].[hash:8].[ext]"
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true,
                attrs: ["source:src", "img:src"]
              }
            }
          ]
        },
        {
          test: /\.css$/,
          // use: ["style-loader", "css-loader"]
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: "../"
              }
            },
            "css-loader"
          ]
        },
        {
          test: /\.scss$/,
          // use: ["style-loader", "css-loader"]
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: "../"
              }
            },
            "css-loader",
            {
              loader: require.resolve("postcss-loader"),
              options: {
                // Necessary for external CSS imports to work
                ident: "postcss",
                plugins: () => [
                  require("postcss-flexbugs-fixes"),
                  require("postcss-preset-env")({
                    autoprefixer: {
                      flexbox: "no-2009"
                    },
                    stage: 3
                  })
                ]
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      ...cleanPlugin,
      new CopyPlugin([
        {
          from: "public"
        }
      ]),
      new HtmlWebPackPlugin({
        //inject: false,
        chunks: ["tradewindow"],
        // inject: true,
        template: "./src/html/index.html",
        filename: "./index.html"
      }),
      new HtmlWebPackPlugin({
        chunks: ["tradedocs"],
        inject: true,
        template: "./src/html/tradedocs.html",
        filename: "./tradedocs.html"
      }),
      new HtmlWebPackPlugin({
        chunks: ["legal"],
        inject: true,
        template: "./src/html/legal.html",
        filename: "./legal.html"
      }),
      new HtmlWebPackPlugin({
        chunks: ["policies"],
        inject: true,
        template: "./src/html/policies.html",
        filename: "./policies.html"
      }),
      new HtmlWebPackPlugin({
        chunks: ["privacypolicy"],
        inject: true,
        template: "./src/html/privacypolicy.html",
        filename: "./privacypolicy.html"
      }),
      new HtmlWebPackPlugin({
        chunks: ["cookiepolicy"],
        inject: true,
        template: "./src/html/cookiepolicy.html",
        filename: "./cookiepolicy.html"
      }),
      new HtmlWebPackPlugin({
        chunks: ["termsandconditions"],
        inject: true,
        template: "./src/html/termsandconditions.html",
        filename: "./termsandconditions.html"
      }),
      new HtmlWebPackPlugin({
        chunks: ["signup"],
        inject: true,
        template: "./src/html/signup.html",
        filename: "./signup.html"
      }),
      new HtmlWebPackPlugin({
        chunks: ["login"],
        inject: true,
        template: "./src/html/login.html",
        filename: "./login.html"
      }),
      // new HtmlWebPackPlugin({
      //     chunks: ["confirmUser"],
      //     inject: true,
      //     template: "./src/html/confirmUser.html",
      //     filename: "./confirmUser.html"
      // }),

      new HtmlWebPackPlugin({
        chunks: ["prodoc"],
        inject: true,
        template: "./src/html/prodoc.html",
        filename: "./prodoc.html"
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        //chunkFilename: "[id].css"
        filename: "./style/[name].css"
      })
    ]
  };
};

const confirmUserConfig = env => {
  console.log("node_env:", env.NODE_ENV);
  const isProd = env.NODE_ENV === "production" ? true : false;
  return {
    entry: {
      confirmUser: "./src/js/confirmUser.js"
    },
    output: {
      path: __dirname + "/build",
      publicPath: "",
      filename: "./confirmUser/index.js"
    },
    optimization: {
      minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    module: {
      rules: [
        {
          test: /\.(png|svg|jpe?g|gif|ttf|eot|woff2?|mp4)$/,
          use: [
            {
              loader: "file-loader",
              // loader: "url-loader",
              options: {
                limit: 10000,
                outputPath: "/",
                name: "./asset/[name].[hash:8].[ext]"
              }
            }
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true,
                attrs: ["source:src", "img:src"],
                root: "/"
              }
            }
          ]
        },
        {
          test: /\.css$/,
          // use: ["style-loader", "css-loader"]
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                // publicPath: "../"
              }
            },
            "css-loader"
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                // publicPath: "../"
              }
            },
            "css-loader",
            {
              loader: require.resolve("postcss-loader"),
              options: {
                // Necessary for external CSS imports to work
                ident: "postcss",
                plugins: () => [
                  require("postcss-flexbugs-fixes"),
                  require("postcss-preset-env")({
                    autoprefixer: {
                      flexbox: "no-2009"
                    },
                    stage: 3
                  })
                ]
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        chunks: ["confirmUser"],
        inject: isProd ? false : true,
        //inject: true,
        template: "./src/html/confirmUser.html",
        filename: "./confirmUser/index.html"
      }),

      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        //chunkFilename: "[id].css"
        filename: "./confirmUser/style/[name].css"
      })
    ]
  };
};

// Return Array of Configurations
module.exports = [baseConfig, confirmUserConfig];
