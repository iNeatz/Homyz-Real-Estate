import './Contact.css'
import contactList from '../../utils/contactList'

const Contact = () => {
	return (
		<section className='c-wrapper'>
			<div className='paddings innerWidth flexCenter c-container'>
				{/* left side */}
				<div className='flexColStart c-left'>
					<span className='orangeText'>Our Contacts</span>
					<span className='primaryText'>Easy to Contact Us</span>
					<span className='secondaryText'>
						Qui minim nisi qui officia duis. Sint deserunt cillum excepteur aute
						mollit qui nulla ad. Velit nostrud irure cupidatat ea dolore labore.
					</span>

					<div className='flexCenter contactModes'>
						{contactList.map((data, index) => (
							<div key={index} className='flexColCenter mode'>
								<div className='flexStart'>
									<div className='flexCenter icon'>{data.icon}</div>
									<div className='flexColStart detail'>
										<span className='primaryText'>{data.title}</span>
										<span className='secondaryText'>{data.subtitle}</span>
									</div>
								</div>
								<div className='flexCenter button'>{data.buttonText}</div>
							</div>
						))}
					</div>
				</div>

				{/* right side */}
				<div className='c-right'>
					<div className='image-container'>
						<img src='/contact.jpg' alt='Contact' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
