export enum Screens {
  VideoInstructions = 'Video Instructions',
  CaptureVideo = 'Capture Video',
  SubmitVideo = 'Submit Video',
}

export type SendVideoStackParams = {
  [Screens.VideoInstructions]: undefined
  [Screens.CaptureVideo]: undefined
  [Screens.SubmitVideo]: undefined
}
