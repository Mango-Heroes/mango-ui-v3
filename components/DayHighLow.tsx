import { StyledMarketInfoLabel } from './MarketHeader'

const DayHighLow = () => {
  return (
    <div className="pr-6">
      <StyledMarketInfoLabel className="text-center text-th-fgd-3">
        24h Range
      </StyledMarketInfoLabel>
      <div className="flex items-center">
        <div className="pr-2 text-th-fgd-1 text-xs">$XX.XX</div>
        <div className="h-1.5 flex rounded bg-th-bkg-3 w-24">
          <div
            style={{
              width: `50%`,
            }}
            className="flex rounded bg-th-primary"
          ></div>
        </div>
        <div className="pl-2 text-th-fgd-1 text-xs">$XX.XX</div>
      </div>
    </div>
  )
}

export default DayHighLow