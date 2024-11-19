---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "File Storage Zome"
  text: ""
  tagline: Plug-and-play file storage for your hApps
  actions:
    - theme: brand
      text: Setup
      link: /setup.md
    - theme: alt
      text: Integrity Zome API
      link: "/backend/doc/file_storage_integrity/index.html"
      target: "_blank"
    - theme: alt
      text: Coordinator Zome API
      link: "/backend/doc/file_storage/index.html"
      target: "_blank"
    - theme: alt
      text: Frontend API
      link: "/file-storage-client.md"

features:
  - title: UI + Coordinator + Integrity Zomes
    details: Following the TNESH stack guidelines
    link: https://darksoil.studio/tnesh-stack
  - title: Upload and download files
    details: Automatic handling of chunking for big files.
  - title: Plug-and-play UI element to upload files
    details: Using dropzone to see the upload progress.
    link: "/elements/upload-files.md" 
  - title: Embed images in your entries
    details: Use "<show-image hash={imageHash}>" to directly show the uploaded image.
    link: "/elements/show-image.md" 
---

