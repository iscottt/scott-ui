import * as fs from "fs-extra";
import * as path from "path";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;

  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);
  // await build(defineConfig({}))

  // fs.copyFileSync(
  //   path.resolve("./package.json"),
  //   path.resolve(config.build.outDir + "/package.json")
  // );
  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "smarty-ui.umd.js";
  packageJson.module = "smarty-ui.esm.js";
  fs.outputFile(
    path.resolve(config.build.outDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  const srcDir = path.resolve(__dirname, "../src/");
  for (const name1 of fs.readdirSync(srcDir).filter((name) => {
    // 只要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(srcDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  })) {
    const outDir = path.resolve(config.build.outDir, name1);
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name1),
        name1, // 导出模块名
        fileName: `index`,
        formats: [`es`, `umd`],
      },
      outDir,
    };

    Object.assign(config.build, custom);
    await build(defineConfig(config as UserConfig) as InlineConfig);

    fs.outputFile(
      path.resolve(outDir, `package.json`),
      `{
          "name": "scott-ui/${name1}",
          "main": "index.umd.js",
          "module": "index.umd.js"
        }`,
      `utf-8`
    );
  }
};

buildAll();
