'use client'
import React, {useState} from 'react'
import { CgRedo } from "react-icons/cg";
import { VscGraphLine } from "react-icons/vsc";
import IconButton from '@/components/Buttons/IconButton';
import { FaWallet } from "react-icons/fa";
import { MdSwapVert } from "react-icons/md";
import LargeButton from '@/components/Buttons/LargeButton';
import Link from 'next/link';
import { BsGlobe2 } from "react-icons/bs";
import { link } from 'fs';


const SwapPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [tokenOne, setTokenOne] = useState({name: 'Ethereum', symbol: 'Eth', descrption: "Ethereum is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts. Ether (ETH) is the native cryptocurrency of the platform and the second-largest cryptocurrency by market capitalization after Bitcoin. ETH is the lifeblood of Ethereum.", link: 'https://ethereum.org/'})  ;

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  const toggleSettingsOpen = () => {
    setIsSettingsOpen(!isSettingsOpen)
  }
  const pools =[
    {
      token1: 'ETH',
      token2: 'USDT',
      link: 'https://app.zksync.io/pool/ETH/USDT'
    },
    {
      token1: 'ETH',
      token2: 'ZK',
      link: 'https://app.zksync.io/'
    },
    {
      token1: 'ETH',
      token2: 'DAI',
      link: 'https://app.zksync.io/pool/ETH/DAI'
    }
  ]
  const wallet = {
    isConnected: false,
    balance: 10,
  }
  return (
    <div className='w-full h-full max-w-[1560px] mx-auto '>
      <section className='w-full  flex flex-col sm:flex-row justify-center items-center py-8 px-4 h-full sm:p-8 gap-8'>
      {isOpen &&(
          <div className='w-full max-w-[600px] flex flex-col gap-4 sm:gap-8 transition-all border-[1px] shadow-md h-full roounded p-2'>
            <div className='flex flex-col gap-2 sm:gap-4'>
              <h2 className='text-black font-semibold text-sm 2xl:text-xl'>Price Chart</h2>
              <div className='w-full h-[250px] bg-primary'></div>
            </div>
            <div className='flex flex-col gap-2 sm:gap-4'>
              <h2 className='text-black font-semibold text-sm 2xl:text-xl'>About {tokenOne.symbol}</h2>
              <p className='text-xs text-black/70'>{tokenOne.descrption}</p>
              <Link href={tokenOne.link} target='_blank' className='p-1 text-xs text-black/60 border-[1px] w-auto max-w-[160px]  flex justify-center items-center rounded-full border-primary bg-gray-300/30 gap-2'><span><BsGlobe2 /></span>{tokenOne.link}</Link>
            </div>
            <div className='flex flex-col gap-2 sm:gap-4'>
              <h2 className='text-black font-semibold text-sm 2xl:text-xl'>Feature Pool</h2>
              <p className='text-xs text-black/70'>Put your assets to work. Become a market maker today by providing liquidity on ZK pools to earn trading fees and juicy rewards.</p>
              <div className='flex gap-2'>
                {
                  pools.map((pool, index) => (
                    <Link key={index} href={pool.link} target='_blank' className='p-1 text-xs text-black/60 border-[1px] w-auto max-w-[100px]  flex justify-center items-center rounded-full border-primary bg-gray-300/30 '>
                      <p className='text-xs text-black/70'>{pool.token1}/{pool.token2}</p>
                      
                    </Link>
                  ))
                }
              </div>
            
            </div>
            
          </div>
        )}
        <div className='w-full sm:max-w-[400px] p-4 h-auto flex flex-col gap-4 rounded border-[1px] shadow-md'>
            <div className='flex justify-between items-center'>
              <h2 className='text-black font-semibold text-sm 2xl:text-xl'>Swap</h2>
              <div className='gap-4 flex'>
                <IconButton buttonClass={``}><CgRedo /></IconButton>
                <IconButton onClick={toggleOpen}><VscGraphLine  /></IconButton>
              </div>
            </div>
            {/* From Crytocurrency */}
            <div>
              <div className='p-1 flex justify-between items-center'>
                <label className='text-black/80 text-sm'>From</label>
                <p className='text-black/80 text-sm flex gap-1 items-center'>{wallet && wallet.balance} 
                <span className='text-primary'><FaWallet /></span></p>
              </div>
              <div className='p-2 border-[1px] border-primary rounded flex w-full justify-between'>
              <input type='text' className='outline-none text-black/70 text-sm bg-transparent '  placeholder='0' />
              <select className='outline-none bg-transparent border-[1px] text-sm p-1'>
                <option value='' ></option>
                <option value=''>Token 1</option>
                <option value=''>Token 2</option>
                <option value=''>Token 3</option>
              </select>
              </div>

            </div>
            <div className='w-full flex justify-center items-center'>
              <IconButton buttonClass='bg-primary text-white border-none hover:scale-90 transition-all'><MdSwapVert /></IconButton>
            </div>
             {/* To Crytocurrency */}
            <div>
              <div className='p-1 flex justify-between items-center'>
                <label className='text-black/80 text-sm'>To</label>
                <p className='text-black/80 text-sm flex gap-1 items-center'>{wallet.balance} 
                <span className='text-primary '><FaWallet /></span></p>
              </div>
              <div className='p-2 border-[1px] border-primary rounded flex w-full justify-between'>
              <input type='text' className='outline-none text-black/70 text-sm bg-transparent ' placeholder='0'/>
              <select className='outline-none bg-transparent border-[1px] text-sm'>
                <option value='' ></option>
                <option value=''>Token 1</option>
                <option value=''>Token 2</option>
                <option value=''>Token 3</option>
              </select>
              </div>
              <div>
                <div className='p-2 flex justify-between items-center'>
                  <p className='text-black/60 text-xs'>Minimum Recieved</p>
                  <p className='text-black/60 text-xs flex gap-1 items-center'>{wallet.balance} 
                  Token</p>
                </div>
                {/* Advanced Setting */}
                {
                  isSettingsOpen && (<>
                    <div className='p-2 flex justify-between items-center'>
                      <p className='text-black/60 text-xs'>Slippage Tolerance</p>
                      <p className='text-black/60 text-xs flex gap-1 items-center'>0.1%</p>
                    </div>
                    <div className='p-2 flex justify-between items-center'>
                      <p className='text-black/60 text-xs'>Transaction Deadline</p>
                      <p className='text-black/60 text-xs flex gap-1 items-center'>20m</p>
                    </div>
                    </>
                  )
                }
                <div className='w-full flex justify-center items-center'>
                <button onClick={toggleSettingsOpen} className='underline text-xs flex text-primary mt-1 '>
                {isSettingsOpen ? 'Hide' : 'Show'} Advanced Settings</button>
                </div>
                
                

              </div>
              <div className='flex justify-center items-center mt-4'>
                <LargeButton>{wallet.isConnected ? "Swap" : "Connect Wallet"}</LargeButton>
              </div>
                    
            </div>
            

        </div>
       
        
       
      </section>
      
    </div>
  )
}

export default SwapPage