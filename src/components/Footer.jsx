export default function About() {
    const currentYear = new Date().getFullYear()
    return (
        <footer>
            <small>&copy; {currentYear} - Camila Sandoval</small>
        </footer>
    )
}