+++
title = 'C++'
date = 2024-03-09T14:41:59+05:30
draft = false
+++

Linux distribution mainly consists of the following components
- Boot Loader
- Init System
- Display Renderer
- Display Manager
- Display Environments
- Package Managers

All Linux Distros differ based on these 3 components
- Debian Linux -> Debian uses a stable release cycle and generally has older packages, but they don’t usually have many bugs and are very reliable. This is typically my go to for desktops I don’t change much.
	- Bootloader - GRUB
	- Init System - systemd
	- Display Render - Xorg
	- Display Manager - SDDM/GDM
	- Desktop Environment - KDE/GNOME
	- Package Manager - APT


- Arch Linux
- Fedora Linux -> This is a RHEL (Red Hat Enterprise Linux) based distribution. It strikes a balance between newer packages and Linux kernels between Debian and Arch. Its not as new as Arch, but not as old as Debian. It has different SPINS but its main download uses the following:
	- Bootloader - Systemd
	- Init System - systemd
	- Display Render - Wayland
	- Desktop Environment - GNOME
	- Package Manager - DNF

