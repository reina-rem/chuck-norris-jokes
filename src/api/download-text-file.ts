export const downloadTextFile = (fileName: string, text: string): void => {
  const blob = new Blob([text], { type: 'text/plain' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')

  a.href = url
  a.download = fileName

  a.click()
  window.URL.revokeObjectURL(url)
}
