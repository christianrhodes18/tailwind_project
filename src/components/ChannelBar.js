import { BsHash } from 'react-icons/bs'
import { FaChevronDown, FaChevronRight, FaPlus } from 'react-icons/fa'
import { useState } from 'react'

const topics = ['ai', 'stable diffusion']
const discussions = ['compatible hardware', 'twitter buyout', 'instagram nfts']
const projects = ['metablaze', 'silks']

const ChannelBar = () => {
    return (
        <div className='channel-bar shadow-lg'>
            <ChannelBlock />
            <div className='channel-containers'>
                <Dropdown header='Topics' selections={topics} />
                <Dropdown header='Discussions' selections={discussions} />
                <Dropdown header='Projects' selections={projects} />
            </div>
        </div>
    )
}

const ChannelBlock = () => (
    <div className='channel-block'>
        <h5 className='channel-block-text'>Channels</h5>
    </div>
)

const Dropdown = ({ header, selections }) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className='dropdown'>
            <div onClick={() => setExpanded(!expanded)} className='dropdown-header'>
                <ChevronIcon expanded={expanded} />
                <h5
                    className={expanded ? 'dropdown-header-text-selected' : 'dropdown-header-text'}
                >
                    {header}
                </h5>
                <FaPlus size='12' className='text-accent text-opacity-80 my-auto ml-auto' />
            </div>
            {expanded &&
                selections && 
                selections.map((selection) => <TopicSelection selection={selection} />)}
        </div>
    )
}

const ChevronIcon = ({ expanded }) => {
    const chevClass = 'text-accent text-opacity-80 my-auto mr-1'
    return expanded ? (
        <FaChevronDown size='14' className={chevClass} />
    ) : (
        <FaChevronRight size='14' className={chevClass} />
    )
}

const TopicSelection = ({ selection }) => (
    <div className='dropdown-selection'>
        <BsHash size='24' className='text-gray-400' />
        <h5 className='dropdown-selection-text'>{selection}</h5>
    </div>
)

export default ChannelBar