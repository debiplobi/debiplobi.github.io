+++
date = '2026-06-07T22:34:31+05:30'
title = 'Easy Guide to Secure Boot'
tags = ["secure-boot", "linux", "guide",]
+++

## Why?

Over the years I have found that doing dual booting with secureboot is a pain.

There are many ways to do it but I have found easier way to do it with signing the firmware with own keys.

So, We are gonna use tool called `sbctl` which does that for us.

Remember, I am no expert on this and I am writing from my experience.

## Let's start

### Install the required package

- Install `sbctl` as per your distro.

### Check the status

```
$ sbctl status
Installed:	✘ Sbctl is not installed
Setup Mode:	✘ Enabled
Secure Boot:	✘ Disabled
```

- You should see that sbctl is not installed and secure boot is disabled.

### Create the keys

```
$ sbctl create-keys
```

### Enroll the keys

```
sbctl enroll-keys --microsoft
```

### Sign the kernel and modules

```
sbctl sign-all
```

This command signs almost everything needed eg: kernel, bootloader, etc.

If you want sign manually `sbctl sign -s <path>`
in most cases that is not needed.

### Verification

```
sbctl verify
```

you should see all green check marks,
you are ready to reboot into BIOS and enable Secure Boot.

#### Refs.

https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot

https://wiki.gentoo.org/wiki/Sbctl#sbctl_status
