import CountUp from 'react-countup'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import Stats from '../../utils/stats.json'
import { motion } from 'framer-motion'

const Hero = () => {
	return (
		<section className='hero-wrapper'>
			<div className='paddings innerWidth flexCenter hero-container'>
				{/* left side */}
				<div className='flexColStart hero-left'>
					<div className='hero-title'>
						<div className='orange-circle' />
						<motion.h1
							initial={{ y: '2rem', opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 2, type: 'spring' }}
						>
							Discover <br /> Most Suitable <br /> Property
						</motion.h1>
					</div>

					<div className='flexColStart hero-des'>
						<span className='secondaryText'>
							Find a variety of properties that suit you very well
						</span>
						<span className='secondaryText'>
							Forget all difficulties in finding a residence for you
						</span>
					</div>

					<div className='flexCenter search-bar'>
						<HiLocationMarker color='var(--blue)' size={25} />
						<input type='text' />
						<button className='button'>Search</button>
					</div>

					<div className='flexCenter stats'>
						{Stats &&
							Stats.map((stat) => (
								<div key={stat.id} className='flexColCenter stat'>
									<span>
										<CountUp
											start={stat.start}
											end={stat.end}
											duration={stat.duration}
										/>
										<span>+</span>
									</span>
									<span className='secondaryText'>{stat.title}</span>
								</div>
							))}
					</div>
				</div>

				{/* right side */}
				<div className='flexCenter hero-right'>
					<motion.div
						className='image-container'
						initial={{ x: '7rem', opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 2, type: 'spring' }}
					>
						<img src='/hero-image.png' alt='Hero' />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Hero
