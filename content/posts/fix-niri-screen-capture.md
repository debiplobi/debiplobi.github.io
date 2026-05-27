+++
title = "How to Fix Niri Window Manager Screen Capture"
date = 2026-01-22
tags = ["niri", "niri wm", "window manager", "obs", "wayland", "screen share", "screen capture", "compositor", "smithay compositor", "niri window manager", "screen sharing", "pipewire"]
+++

## What is the issue?

1. The main issue here is the portal you do not have the correct portals.
2. Niri is not starting correctly.
3. Portals are overidden by other portals or not starting at all .

### Let's address them one by one

### 1. For niri you only need these two(three) necessary portal to do screen sharing

- `xdg-desktop-portal`
- `xdg-desktop-portal-gnome`
- `xdg-desktop-portal-gtk`

find these packages in your corresponding distro and install them.

### 2. to fix this you just have to run this on startup(tty)

```bash
# systemd
niri-session
# others
dbus-run-session niri --session
```

### 3. To address this issue,

- we are just going to create a config file to specifically tell these backend are going to be used for these tasks.

~/.config/xdg-desktop-portal

```bash
[preferred]
org.freedesktop.impl.portal.FileChooser=gnome;
org.freedesktop.impl.portal.ScreenCast=gnome;
org.freedesktop.impl.portal.Screenshot=gnome;
org.freedesktop.impl.portal.RemoteDesktop=gnome;
```

ref:
[niri wiki](https://yalter.github.io/niri/Important-Software.html)
