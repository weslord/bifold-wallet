export enum Screens {
  VideoInstructions = 'Instructions',
  VerifyVideo = 'Capture Video',
  SubmitVideo = 'Submit Video',
}

export type SendVideoStackParams = {
  [Screens.VideoInstructions]: undefined
  [Screens.VerifyVideo]: undefined
  [Screens.SubmitVideo]: undefined
}
