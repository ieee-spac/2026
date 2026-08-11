import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { HeaderLogo } from '@/components/layout/header/header-logo'

import { HEADER } from '@/content/constants'

const logo = HEADER.IMAGE_URL

const meta = {
  title: 'website/layout/Header/HeaderLogo',
  component: HeaderLogo,
  // this component will have an automatically generated autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['!autodocs'],
  parameters: {
    // more on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: { logo },
} satisfies Meta<typeof HeaderLogo>

export default meta

type story = StoryObj<typeof meta>

export const Default: story = {}
