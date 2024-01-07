import Creative from '@/components/Creative'
import Expertise from '@/components/Expertise'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'
import GetInTouch from '@/components/GetInTouch'
import Header from '@/components/Header'
import Meeting from '@/components/Meeting'
import Projects from '@/components/Projects'


export default function Home() {
  return (
    <main > 
     <Header/>
     <Creative/>
     <Expertise/>
     <Meeting/>
     <Projects/>
     <Feedback/>
     <GetInTouch/>
     <Footer/>
    </main>
  )
}
