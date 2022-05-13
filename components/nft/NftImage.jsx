import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
  topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
  topBarContent: `flex items-center`,
  likesCounter: `flex-1 flex items-center justify-end`,
  imageWrapper: `mt-4`
}
const NftImage = ({selectedNft }) => {
  return (
    <div>
    <div className={style.topBar}>
      <div className={style.topBarContent}>
        <IoMdSnow />
        <div className={style.likesCounter}>
          <AiOutlineHeart />
          2.3K
        </div>
      </div>
    </div>
    <div className={style.imageWrapper}> 
      <img src={selectedNft?.image} />
    </div>
  </div>
  )
}

export default NftImage