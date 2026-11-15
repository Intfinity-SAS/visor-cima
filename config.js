// Clave de API de Google (solo Drive API, restringida a la dirección de esta
// página en Google Cloud → Credenciales). Es pública por diseño: solo lee
// carpetas que ya son públicas con el enlace. Sirve para los enlaces viejos
// (#<carpeta de Drive>).
//
// r2: la dirección pública del bucket de Cloudflare R2 (la misma publicUrl
// de r2.json en el servidor), para los enlaces #r/<carpeta>.
window.VISOR = {
  apiKey: 'AIzaSyDGZOYf2vbWUmVTYZCNMJEwJLxwryhWvfE',
  r2: 'https://pub-5d983d056f6a43af99c7d3e0a80049de.r2.dev',
}
