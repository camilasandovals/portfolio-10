import { Github } from "react-bootstrap-icons"

export default function About() {
    const githubUrl = "https://github.com/camilasandovals/"
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <p className="text-center">
            <small>&copy; {currentYear} - Camila Sandoval</small>
            <a href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="button-effect">
            <Github size = "60" color="black"/>
            </a>
            </p>
        </footer>
    )
}