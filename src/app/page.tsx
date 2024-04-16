"use client"
import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";
import Reviews from '@/components/Reviews'
import Creative from '@/components/Creative'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'

import Meeting from '@/components/Meeting'

import Services from '@/components/Services'
import WhatsappButton from '@/components/WhatsappButton'

import Navbars from "@/components/NavBars";
import Faq from "@/components/Faq";
import Path from "@/components/Path";





export default function Home() {
  return (
    <main >
      <NextUIProvider>
        <Navbars />
        <Creative />
        <Services />
        <Path/>
        <Meeting />
        <Reviews />
        <Faq/>
        {/* <GetInTouch /> */}
        <Footer />
        <WhatsappButton />
      </NextUIProvider>
    </main>
  )
}