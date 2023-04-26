import './Companies.css'
import CompaniesList from '../../utils/companies.json'

const Companies = () => {
	return (
		<section className='c-wrapper'>
            <div className='paddings innerWidth flexCenter c-container'>
                {CompaniesList && CompaniesList.map(company => (
                    <img src={company.image} key={company.id} alt={company.alt} />
                ))}
            </div>
		</section>
	)
}

export default Companies
