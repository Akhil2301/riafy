import React from 'react'

const Data = ({data}) => {
  return (
    <div className="w-1/2 mt-5 rounded-lg shadow-lg bg-white overflow-hidden pb-4">
                <div className='pt-5  pb-6 font-semibold text-xl '>{data.Name}</div>

                <div className='flex '>

                    <div className='flex-1'>

                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-lg bg-neutral-50 shadow-sm">
                            <span className='pt-3 px-2'>Market Cap</span>
                            <span className='text-red-500 text-right pt-3 pr-3'>₹ {data.MarketCap}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-lg bg-neutral-200 shadow-sm">
                            <span className='pt-3 px-2'>Current Price </span>
                            <span className='text-red-500 pt-3 pr-3'>₹ {data.CurrentMarketPrice}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rrounded-lg bg-neutral-50 shadow-sm">
                            <span className='pt-3 px-2'>Stock P/E</span>
                            <span className='text-red-500 pt-3 pr-3'>₹ {data.StockP_E}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-lg bg-neutral-200 shadow-sm">
                            <span className='pt-3 px-2'>Debt</span>
                            <span className='text-red-500 pt-3 pr-3'>₹ {data.Debt}</span>
                        </div>

                    </div>

                    <div className='flex-1 '>

                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-lg bg-neutral-50 shadow-sm">
                            <span className='pt-3 px-2'>Dividnet Yield</span>
                            <span className='text-red-500 pt-3 pr-3'>₹ {data.DividendYield}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-lg bg-neutral-200 shadow-sm">
                            <span className='pt-3 px-2'>ROCE</span>
                            <span className='text-red-500 pt-3 pr-3'>₹ {data.ROCE}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-lg bg-neutral-50 shadow-sm">
                            <span className='pt-3 px-2'>ROE</span>
                            <span className='text-red-500 pt-3 pr-3'>₹ {data.ROEPreviousAnnum}</span>
                        </div>

                    </div>

                    <div className='flex-1 '>

                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-lg bg-neutral-50 shadow-sm">
                            <span className='pt-3 px-2'>Debt Equality </span>
                            <span className='text-red-500 pt-3 pr-3'>₹ {data.DebttoEquity}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-lg bg-neutral-200 shadow-sm">
                            <span className='pt-3 px-2'>Eps</span>
                            <span className='text-red-500 pt-3 pr-3'>₹ {data.EPS}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-lg bg-neutral-50 shadow-sm">
                            <span className='pt-3 px-2'>Reserves</span>
                            <span className='text-red-500 pt-3 pr-3'>₹ {data.Reserves}</span>
                        </div>

                    </div>

                </div>
            </div>
  )
}

export default Data