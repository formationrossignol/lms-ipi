export function revealPlugin(md) {
  const defaultRender = md.renderer.rules.fence || function(tokens, idx, options, env, renderer) {
    return renderer.renderToken(tokens, idx, options)
  }

  md.renderer.rules.fence = function(tokens, idx, options, env, renderer) {
    const token = tokens[idx]
    const info = token.info.trim()
    
    if (info === 'reveal') {
      const slides = token.content
        .split('---')
        .map(slide => `<section>${md.render(slide.trim())}</section>`)
        .join('')
      
      return `<div class="reveal-slides">${slides}</div>`
    }
    
    return defaultRender(tokens, idx, options, env, renderer)
  }
}
