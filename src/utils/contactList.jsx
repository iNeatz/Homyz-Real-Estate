import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const contactList = [
	{
		icon: <MdCall size={20} />,
		title: 'Call',
		subtitle: '021 123 145 14',
		buttonText: 'Call Now'
	},
	{
		icon: <BsFillChatDotsFill size={20} />,
		title: 'Chat',
		subtitle: '021 123 134 14',
		buttonText: 'Chat Now'
	},
	{
		icon: <BsFillChatDotsFill size={20} />,
		title: 'Video Call',
		subtitle: '012 123 145 14',
		buttonText: 'Video Call Now'
	},
	{
		icon: <HiChatBubbleBottomCenter size={20} />,
		title: 'Message',
		subtitle: '012 123 145 14',
		buttonText: 'Message Now'
	}
]

export default contactList
