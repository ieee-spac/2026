import createMDX from 'fumadocs-mdx/config'
import { remarkInstall } from 'fumadocs-docgen'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

const withMDX = createMDX({
  rootContentPath: './src/content',
  mdxOptions: {
    lastModifiedTime: 'git',
    remarkPlugins: [
      [remarkInstall, { Tabs: 'InstallTabs' }],
    ],
  },
})

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    useTypeScriptCli: false,
  },
  reactStrictMode: true,
}

export default withMDX(config)

initOpenNextCloudflareForDev()
