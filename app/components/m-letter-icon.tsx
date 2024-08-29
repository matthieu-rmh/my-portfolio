import Image from 'next/image'

const MLetterIcon = () => {
    return(
        <Image
          src="/m-letter-icon.png"
          width={30}
          height={30}
          alt="M"
          className='m-2 rounded-lg'/>
    )
};

export default MLetterIcon;