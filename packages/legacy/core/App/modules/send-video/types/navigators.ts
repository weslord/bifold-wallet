import { Prompt } from "./api"

export enum Screens {
  VideoInstructions = 'Video Instructions',
  CaptureVideo = 'Capture Video',
  SubmitVideo = 'Submit Video',
}

export type SendVideoStackParams = {
  [Screens.VideoInstructions]: undefined
  [Screens.CaptureVideo]: { prompts: Prompt[]}
  [Screens.SubmitVideo]: undefined
}
