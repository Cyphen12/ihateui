import * as React from 'react'

interface Props {
  cardImage: string
  cardTitle: string
  cardContent: string
  cardSubtitle: string
  styleSubtitle: string
  styleTitle: string
  styleContent: string
  cardButton: string
  styleButton: string
}
export const Card = ({
  cardImage,
  cardTitle,
  cardContent,
  cardSubtitle,
  styleSubtitle,
  styleTitle,
  styleContent
}: Props) => {
  return (
    <div className='max-w-xs p-6 rounded-md shadow-md'>
      <img
        src={cardImage}
        alt=''
        className='object-cover object-center w-full rounded-md h-72 '
      />
      <div className='mt-6 mb-2'>
        <span
          className={`'text-xs font-medium tracking-widest uppercase' ${styleSubtitle}`}
        >
          {cardSubtitle}
        </span>
        <h2 className={`'text-xl font-semibold tracking-wide'${styleTitle}`}>
          {cardTitle}
        </h2>
      </div>
      <p className={`${styleContent}`}>{cardContent}</p>
    </div>
  )
}

// function ButtonCard({
//   cardImage,
//   cardTitle,
//   cardButton,
//   cardSubtitle,
//   styleSubtitle,
//   styleTitle,
//   styleButton
// }: Props) {
//   return (
//     <div className='max-w-xs rounded-md shadow-md bg-coolGray-50 text-coolGray-800'>
//       <img
//         src={cardImage}
//         className='object-cover object-center w-full rounded-t-md h-72 bg-coolGray-500'
//       />
//       <div className='flex flex-col justify-between p-6 space-y-8'>
//         <div className='space-y-2'>
//           <h2
//             className={`"text-3xl font-semibold tracking-wide" ${styleTitle}`}
//           >
//             {cardTitle}
//           </h2>
//           <p className={`${styleSubtitle}`}>{cardSubtitle}.</p>
//         </div>
//         <button
//           type='button'
//           className={`"flex items-center justify-center w-full  font-semibold tracking-wide " ${styleButton} `}
//         >
//           {cardButton}
//         </button>
//       </div>
//     </div>
//   )
// }

// export { NormalCard, ButtonCard }
