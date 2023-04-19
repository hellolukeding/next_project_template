import { parse } from "yaml"

// 获取项目运行环境
export const getEnv = () => {
  return process.env.RUNNING_ENV
}

// 读取项目配置
/**
 * @description 读取项目配置
 * @parse https://stackoverflow.com/questions/43112619/typescript-require-statement-not-part-of-an-import-statement
 * @returns 
 */
export const getConfig = () => {
  const environment = getEnv()
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const path=require("path")
  const yamlPath = path.join(process.cwd(), `./.config/.${environment}.yaml`)
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const fs=require("fs")
  const file = fs.readFileSync(yamlPath, 'utf8')
  const config = parse(file)
  return config
}