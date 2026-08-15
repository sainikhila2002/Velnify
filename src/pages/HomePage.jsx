import Hero from '../components/sections/Hero'
import Categories from '../components/sections/Categories'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Wellness from '../components/sections/Wellness'
import About from '../components/sections/About'
import Journal from '../components/sections/Journal'
import Trust from '../components/sections/Trust'
import Newsletter from '../components/sections/Newsletter'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Wellness />
      <About />
      <Journal />
      <Trust />
      <Newsletter />
    </>
  )
}
