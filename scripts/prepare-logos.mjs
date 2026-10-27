import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = '/tmp/didev-brand/DiDev/DiDev Logo and Visual Identity'
const outDir = path.resolve('public/brand')

const jobs = [
  [path.join(root, 'Logo Icon.jpg'), 'logo-icon.png', 640],
  [path.join(root, 'Primary Horizontal.jpg'), 'logo-horizontal.png', 1600],
  [path.join(root, 'Primary Vertical.jpg'), 'logo-vertical.png', 900],
  [path.join(root, 'Academy/DiDev Academy Horizontal.jpg'), 'logo-academy.png', 1600],
  [path.join(root, 'Consulting/DiDev Consulting Horizontal.jpg'), 'logo-consulting.png', 1600],
  [path.join(root, 'Network/DiDev Network Horizontal.jpg'), 'logo-network.png', 1600],
]

function isNeutralLight(r, g, b) {
  return Math.abs(r - g) < 22 && Math.abs(g - b) < 22 && r > 186 && g > 186 && b > 186
}

function knockOut(data, width, height) {
  const count = width * height
  const seen = new Uint8Array(count)
  const queue = new Int32Array(count)
  let tail = 0
  let head = 0

  const push = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return
    const i = y * width + x
    if (seen[i]) return
    const o = i * 4
    if (!isNeutralLight(data[o], data[o + 1], data[o + 2])) return
    seen[i] = 1
    queue[tail++] = i
  }

  for (let x = 0; x < width; x++) {
    push(x, 0)
    push(x, height - 1)
  }
  for (let y = 0; y < height; y++) {
    push(0, y)
    push(width - 1, y)
  }

  while (head < tail) {
    const i = queue[head++]
    data[i * 4 + 3] = 0
    const x = i % width
    const y = (i - x) / width
    push(x + 1, y)
    push(x - 1, y)
    push(x, y + 1)
    push(x, y - 1)
  }

  for (let pass = 0; pass < 3; pass++) {
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const i = y * width + x
        const o = i * 4
        if (data[o + 3] === 0) continue
        if (!isNeutralLight(data[o], data[o + 1], data[o + 2])) continue
        let touches = false
        for (let yy = y - 1; yy <= y + 1 && !touches; yy++) {
          for (let xx = x - 1; xx <= x + 1; xx++) {
            if (data[(yy * width + xx) * 4 + 3] === 0) touches = true
          }
        }
        if (touches) data[o + 3] = 0
      }
    }
  }
}

await mkdir(outDir, { recursive: true })

for (const [input, name, maxWidth] of jobs) {
  const source = sharp(input).ensureAlpha()
  const { data, info } = await source.raw().toBuffer({ resolveWithObject: true })
  const pixels = Buffer.from(data)
  knockOut(pixels, info.width, info.height)

  let minX = info.width
  let minY = info.height
  let maxX = 0
  let maxY = 0
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (pixels[(y * info.width + x) * 4 + 3] < 32) continue
      if (x < minX) minX = x
      if (y < minY) minY = y
      if (x > maxX) maxX = x
      if (y > maxY) maxY = y
    }
  }
  const pad = 8
  const left = Math.max(0, minX - pad)
  const top = Math.max(0, minY - pad)
  const width = Math.min(info.width - left, maxX - minX + 1 + pad * 2)
  const height = Math.min(info.height - top, maxY - minY + 1 + pad * 2)

  const file = path.join(outDir, name)
  await sharp(pixels, { raw: { width: info.width, height: info.height, channels: 4 } })
    .extract({ left, top, width, height })
    .resize({ width: maxWidth, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(file)

  const check = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  let clear = 0
  const total = check.info.width * check.info.height
  for (let i = 3; i < check.data.length; i += 4) if (check.data[i] < 16) clear++
  console.log(`${name} ${check.info.width}x${check.info.height} transparent ${Math.round((clear / total) * 100)}%`)
}

await sharp(path.join(outDir, 'logo-icon.png'))
  .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.resolve('public/favicon.png'))

await sharp(path.join(outDir, 'logo-icon.png'))
  .resize(180, 180, { fit: 'contain', background: { r: 17, g: 24, b: 53, alpha: 1 } })
  .png()
  .toFile(path.resolve('public/apple-touch-icon.png'))

console.log('logos ready')
