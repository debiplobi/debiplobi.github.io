+++
title = "How to Increase Increase a Video FPS"
date = 2025-07-26
description = "how to increase a video frame rate using FFMPEG from cli"
tags = ["video", "framerate", "increase-framerate", "increse-video-framerate", "GPU", "FPS"]
+++

We are going to use frame interpolation method to increase a video framerate using ffmpeg,

- With NVIDIA GPU Card

```bash
ffmpeg -hwaccel cuda -i input.mp4 -c:a copy -c:v libx264  -vf "minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1'" -c:v h264_nvenc -preset slow -r 60 -vb 20M  output.mp4
```

- Without NVIDIA Card

```bash
ffmpeg -i input.mp4 -c:a copy -c:v libx264 -vf "minterpolate=mi_mode=mci:mc_mode=aobmc:vsbmc=1" -preset slow -r 60 -b:v 20M output.mp4
```

- Explanation:

  `input.mp4` is your input video that you want to convert
  `-preset` the slower it is the better
  `-r 60` is the framerate that you want to convert into
  `output.mp4` is the output file

- Downsides:

1. It's a time consuming process but gets the job done.
2. If the video has too much motion, things became hazy.

Biggest pluspoint is it works, without using fake websites or any subscription based online tools or AI, your file without leaving your computer.
