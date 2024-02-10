module.exports = {
	// Tailwind CSS
	useTailwindCSS: true,

	// Options de build
	buildDir: "build", // chemin vers le dossier de build
	minifyHtml: true, // le code HTML sera minifié si activé, Tailwind CSS et le JavaScript sont toujours minifiés

	// Développement
	devPort: 3000, // process.env.PORT restera prioritaire dans tous les cas
	devOpenBrowser: true // ouvrir le navigateur automatiquement quand on démarre le serveur de développement
}