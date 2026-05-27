+++
date = '2026-05-27T20:17:58+05:30'
draft = true
title = 'Gentoo cheat sheet'
+++

- Sync local pkg database

```bash
emaint sync
```

- Update pkgs

```bash
emerge -avuDN @world
```

- Cleanup pkgs after a update

```bash
emerge --depclean
```

- Cleanup dist files

```bash
eclean -d distfiles && eclean packages
```
