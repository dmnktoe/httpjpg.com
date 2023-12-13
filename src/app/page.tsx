'use client';

import Head from 'next/head';
import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <div className='flex min-h-screen flex-row items-center justify-center'>
        {/* Sidebar project navigation */}
        <div className='h-screen w-1/4 min-w-[300px] overflow-y-scroll'>
          <div className='flex h-full flex-col justify-start'>
            <div className='mb-16 flex min-h-[200px] w-full flex-col justify-end border-b-[1px] border-b-black'>
              <div className='mt-4 w-16 p-2'>
                <Logo />
              </div>
            </div>
            <ul className='mb-16 flex w-full flex-col items-start justify-start border-t-[1px] border-t-black'>
              <li className='flex h-6 w-full flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black'>
                <span className='text-xs font-black italic'>... INDEX</span>
              </li>
              <UnstyledLink href='/about' className='w-full'>
                <li className='flex h-6 flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black hover:bg-black hover:text-white'>
                  <span className='mr-1 block text-xs text-neutral-400'>
                    2024
                  </span>
                  <span className='text-xs'>TimeCurve®App</span>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/about' className='w-full'>
                <li className='flex h-6 flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black hover:bg-black hover:text-white'>
                  <span className='mr-1 block text-xs text-neutral-400'>
                    2023
                  </span>
                  <span className='text-xs'>Antel Display</span>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/about' className='w-full'>
                <li className='flex h-6 flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black hover:bg-black hover:text-white'>
                  <span className='mr-1 block text-xs text-neutral-400'>
                    2023
                  </span>
                  <span className='text-xs'>Sterile Romantik</span>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/about' className='w-full'>
                <li className='flex h-6 flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black hover:bg-black hover:text-white'>
                  <span className='mr-1 block text-xs text-neutral-400'>
                    2022
                  </span>
                  <span className='text-xs'>Outlet Storefront</span>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/about' className='w-full'>
                <li className='flex h-6 flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black hover:bg-black hover:text-white'>
                  <span className='mr-1 block text-xs text-neutral-400'>
                    2022
                  </span>
                  <span className='text-xs'>Galeria Kollektiva</span>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/about' className='w-full'>
                <li className='flex h-6 flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black hover:bg-black hover:text-white'>
                  <span className='mr-1 block text-xs text-neutral-400'>
                    2021
                  </span>
                  <span className='text-xs'>myHEALFRORM</span>
                </li>
              </UnstyledLink>
              <UnstyledLink href='/about' className='w-full'>
                <li className='flex h-6 flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black hover:bg-black hover:text-white'>
                  <span className='mr-1 block text-xs text-neutral-400'>
                    2021
                  </span>
                  <span className='text-xs'>Radio Rasclat • OFCR</span>
                </li>
              </UnstyledLink>
            </ul>
            <ul className='mb-16 flex w-full flex-col items-start justify-start border-t-[1px] border-t-black'>
              <li className='flex h-6 w-full flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black'>
                <span className='text-xs font-black italic'>... Websites</span>
              </li>
              <UnstyledLink href='/about' className='w-full'>
                <li className='flex h-6 flex-row items-center justify-start border-b-[1px] border-b-black py-2 pl-2 font-light tracking-tighter text-black hover:bg-black hover:text-white'>
                  <span className='text-xs'>Dücker Medizintechnik</span>
                </li>
              </UnstyledLink>
            </ul>
            <div className='mb-16 flex w-full flex-col items-start justify-center'>
              <div className='p-2 text-xs font-light tracking-tighter'>
                As a web developer and designer, my work often results in
                cross-media solutions. I tend to mix the media's typical
                practices with cutting-edge digital processing techniques.
              </div>
              <div className='p-2 text-xs font-light tracking-tighter'>
                Don’t hesitate to contact:
                <br />
                Domenik Toefflinger
                <br />
                e: dmnktoe[at]gmail.com
              </div>
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className='flex h-screen w-full flex-col items-center justify-start'>
          <div className='mb-16 flex min-h-[200px] w-full flex-col justify-end border-b-[1px] border-b-black'>
            {/* -90deg rotated navigation bar items */}
          </div>
          <h1 className='text-4xl font-bold text-gray-800'>Hi</h1>
          <p className='mt-2 text-sm text-gray-500'>
            Welcome to your Next.js Starter
          </p>
        </div>
        {/* Sidebar stories */}
        <div className='h-screen w-1/4 bg-gray-50'>
          <div className='mt-8 flex flex-col items-center justify-center'>
            <ButtonLink href='/about'>About</ButtonLink>
            <ArrowLink href='/about'>About</ArrowLink>
            <UnderlineLink href='/about'>About</UnderlineLink>
            <UnstyledLink href='/about'>About</UnstyledLink>
          </div>
        </div>
      </div>
    </main>
  );
}
