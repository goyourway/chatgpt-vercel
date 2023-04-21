export const setting = {
  continuousDialogue: true,
  archiveSession: true,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- ChatCat 基于 ChatGPT-3.5 模型，是其国内直用版，无需魔法梯子，不掉线不卡顿，响应快速，一键即用
- 本网站需要使用密码，请于 [www.chatcat.fun](http://www.chatcat.fun) 获取
- 输入 [[/]] 使用本网站预设的提示词，以便于更高效地和AI沟通，为方便您的后续使用，可将本网站收藏`

export type Setting = typeof setting

export const resetContinuousDialogue = false
