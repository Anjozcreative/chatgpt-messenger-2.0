import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

//app body
export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center text-white px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Describe your ideal futuristic cityscape"</p>
            <p className="infoText">"Invent a new mythical creature and its habitat"</p>
            <p className="infoText">"Craft a thrilling cliffhanger for a story"</p>
          </div>
        </div>

        <div className='hidden md:inline-block'>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Text generation across diverse topics"</p>
            <p className="infoText">"Answering questions on various subjects"</p>
            <p className="infoText">"Assisting in creative writing tasks"</p>
          </div>
        </div>

        <div className='hidden md:inline-block'>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Contextual comprehension constraints"</p>
            <p className="infoText">"Potential biased or inaccurate responses"</p>
            <p className="infoText">"Limited real-time, dynamic information updates"</p>
          </div>
        </div>

      </div>
    </div>
  )
}
