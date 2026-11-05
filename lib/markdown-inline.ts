export function inlineMarkdown(text: string): string {
  return text.replace(
    /\*\*([^*]+)\*\*/g,
    '<strong class="font-semibold text-aib-fg dark:text-aib-fg-inverse">$1</strong>'
  )
}
