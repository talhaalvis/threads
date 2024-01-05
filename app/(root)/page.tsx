
 import Card from './../../components/cards/Card'
export default function Home() {
  return (
    < >
      <h1 className="head-text text-left">Home</h1>
      <div className='container mx-auto p-4 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

        </div>

      </div>

    </>
  )
}