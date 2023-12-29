import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  // function Footer({ displayClass }: QuartzComponentProps) {
  function Footer(quartzComponentProps: QuartzComponentProps) {
    const displayClass = quartzComponentProps.displayClass
    const slug = quartzComponentProps.fileData.slug
    const editSuggestionLink = `https://github.com/lafixier/notes/blob/v4/content/${slug}.md`
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          <a href={editSuggestionLink}>GitHubで編集を提案する</a>
        </p>
        <p>
          Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>, © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
