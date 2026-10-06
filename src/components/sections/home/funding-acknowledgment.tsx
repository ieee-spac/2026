import { IeeeLogo } from '@/components/layout/ieee-logo'

export function FundingAcknowledgment() {
  return (
    <section aria-labelledby="funding-heading" className="mb-6">
      <h2 id="funding-heading" className="text-center text-base font-medium text-muted-foreground">
        Supported by
      </h2>
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center sm:gap-x-8">
        {/* Half the complete anniversary mark's height stays clear on every side. */}
        <a href="https://yp.ieee.org/" className="inline-flex shrink-0 p-9">
          <IeeeLogo
            name="IEEE Young Professionals™ — 30th Anniversary"
            lightSrc="/assets/ieee/young-professionals-30-color.png"
            darkSrc="/assets/ieee/young-professionals-30-white.png"
            width={6216}
            height={2064}
            className="h-auto w-[216px]"
          />
        </a>
        {/* 36px exceeds the Foundation's one-letter-height isolation area. */}
        <a href="https://www.ieeefoundation.org/" className="inline-flex shrink-0 p-9">
          <IeeeLogo
            name="IEEE Foundation"
            lightSrc="/assets/ieee/foundation-blue.png"
            darkSrc="/assets/ieee/foundation-white.png"
            width={291}
            height={65}
            darkWidth={292}
            darkHeight={66}
            className="h-auto w-48"
          />
        </a>
      </div>
    </section>
  )
}
